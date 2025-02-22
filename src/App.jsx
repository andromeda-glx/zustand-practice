import { BrowserRouter, Route, Routes } from "react-router"
import MainLayout from "./Pages/MainLayout"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
