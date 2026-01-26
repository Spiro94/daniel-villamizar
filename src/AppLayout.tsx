import { Link, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

export default function AppLayout() {
    return (
        <div className="">
            <NavBar />


            {/* This renders the matching page */}
            <Outlet />
        </div>
    );
}