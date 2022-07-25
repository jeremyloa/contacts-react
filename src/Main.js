import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Fav from './pages/Fav'
import Search from './pages/Search'
import Details from './pages/Details'
import { APIProvider } from "./contexts/APIContext";
import { FavProvider } from "./contexts/FavContext";

export default function Main(){
    return(
            <FavProvider>
                <Routes>
                    <Route exact path="home" element={<Home/>}></Route>
                    <Route exact path="favorites" element={<Fav/>}></Route>
                    <Route exact path="search" element={<Search/>}></Route>
                    <Route exact path="detail/:id" element={<Details/>}></Route>
                </Routes>
            </FavProvider>
        // <APIProvider>
        // </APIProvider>
    )
}