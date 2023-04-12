import { Outlet } from "react-router-dom";

import Footer from "./component/Footer/Footer";

import Header from "./component/Header/Header";


export default function App() {
    return (
        <>
           <Header />
           <div className="min-h-screen">
                <Outlet />
            </div>
            <Footer />
    
            
        </>
    );
}
