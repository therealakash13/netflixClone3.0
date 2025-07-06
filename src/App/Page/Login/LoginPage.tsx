import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import type { decodedResponse } from "./LoginTypes";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

  const navigate = useNavigate();

  const responseMessage = (response: CredentialResponse) => {
    if (response.credential) {
      try {
        // Decode the response using jwt-decode
        const decoded = jwtDecode<decodedResponse>(response.credential!);
        console.log(decoded);

        // Save to sessionStorage
        const user: Partial<decodedResponse> = {
          name: decoded.name,
          email: decoded.email,
          picture: decoded.picture,
          sub: decoded.sub,
          exp: decoded.exp,
        };

        sessionStorage.setItem("user", JSON.stringify(user));
        navigate('/home');
      } catch (error) {
        console.error("Failed to decode credential:", error);
      }
    } else {
      console.warn("No credential found in response.");
    }
  };
  const errorMessage = () => {
    console.log("Login Failed");
  };

  return (
    <>
      <section className="h-screen w-screen absolute top-0 left-0 -z-10">
        <img
          className="w-full h-full object-cover filter brightness-50"
          src="/banner.jpg"
          alt="login banner"
        />
      </section>

      <div className="relative h-screen w-screen flex flex-col justify-center items-center gap-y-10">
        <h1 className="text-white font-bold sm:m-5 lg:m-7 sm:text-2xl lg:text-3xl bg-slate-600 rounded-xl px-5 py-3 bg-opacity-80">
          Unlimited movies, TV shows and more
        </h1>

        <h2 className="text-white font-semibold sm:text-xl lg:text-2xl bg-slate-600 rounded-xl px-5 py-3 bg-opacity-80">
          Ready to <span className="text-red-500">NI**AFLIX</span> ? Login with
          your Google account and Chill
        </h2>

        <div className="sm:m-4 lg:m-6">
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
      </div>
    </>
  );
}
