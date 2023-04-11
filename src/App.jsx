import { Outlet } from "react-router-dom";

import Footer from "./component/Footer/Footer";
import StatisticsPage from "./pages/StatisticsPage/StatisticsPage";
import Header from "./component/Header/Header";


export default function App() {
    return (
        <>
           <Header></Header>
            <Outlet />
            <Footer />
    
            
        </>
    );
}
