import { BrowserRouter, Route, Routes } from "react-router"
import MainLayout from "./Pages/MainLayout"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"

function App() {
    return (
        <BrowserRouter basename="/zustand-practice/">
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="cart" element={<Cart />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
