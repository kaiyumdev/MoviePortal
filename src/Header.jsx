/* eslint-disable no-unused-vars */
import Logo from "../src/assets/logo.svg";
import Ring from "../src/assets/ring.svg";
import Moon from "../src/assets/icons/moon.svg";
import ShoppingCart from "../src/assets/shopping-cart.svg";
import { useState } from "react";
import CardDetails from "./cine/CardDetails";

const Header = () => {
    const [showCard, setShowCard] = useState(false);

    const handleShowCard = () => {
        setShowCard(true);
    }

    return (
        <header>
            {
                showCard && <CardDetails></CardDetails>
            }
            <nav className="container flex items-center justify-between space-x-10 py-6">
                <a href="index.html">
                    <img src={Logo} width="139" height="26" alt="" />
                </a>

                <ul className="flex items-center space-x-5">
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <img src={Ring} width="24" height="24" alt="" />
                        </a>
                    </li>
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <img src={Moon} width="24" height="24" alt="" />
                        </a>
                    </li>
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#" onClick={handleShowCard}>
                            <img src={ShoppingCart} width="24" height="24" alt="" />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header