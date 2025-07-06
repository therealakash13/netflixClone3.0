import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="p-4 outline-2 outline-amber-100">
        <Outlet />
      </main>
    </>
  );
}
