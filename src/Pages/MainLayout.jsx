import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayout() {
    return (
        <>
            <Header />
            <main className="min-h-dvh bg-body">
                <div className="max-w-[1500px] mx-auto p-5 sm:p-10">
                    <Navbar />
                    <Outlet />
                </div>
            </main>
            <Footer />
        </>
    )
}
