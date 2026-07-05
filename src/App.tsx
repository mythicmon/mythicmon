import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import SafariPage from "./pages/SafariPage";
import CardsPage from "./pages/CardsPage";
import CreaturesPage from "./pages/CreaturesPage";
import BattlePassPage from "./pages/BattlePassPage";
import TasksPage from "./pages/TasksPage";
import EditorPage from "./pages/EditorPage";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
    return (
        <>
            <Navbar />

            <Routes>

                <Route path="/" element={<HomePage />} />

                <Route path="/shop" element={<ShopPage />} />

                <Route path="/safari" element={<SafariPage />} />

                <Route path="/cards" element={<CardsPage />} />

                <Route path="/creatures" element={<CreaturesPage />} />

                <Route path="/battlepass" element={<BattlePassPage />} />

                <Route path="/tasks" element={<TasksPage />} />

                <Route path="/editor" element={<EditorPage />} />

                <Route path="/profile" element={<ProfilePage />} />

            </Routes>
        </>
    );
}
