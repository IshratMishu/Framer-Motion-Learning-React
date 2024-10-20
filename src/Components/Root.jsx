import { Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import { AnimatePresence } from "framer-motion";


const Root = () => {

    return (
        <div>
            <Navbar></Navbar>
            <AnimatePresence mode="wait"/>
            <Outlet></Outlet>            
        </div>
    );
};

export default Root;

