import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-text">
        <Outlet />
      </main>
    </>
  );
}
