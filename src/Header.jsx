/* eslint-disable no-unused-vars */
import Logo from "../src/assets/logo.svg";
import Ring from "../src/assets/ring.svg";
import Moon from "../src/assets/icons/moon.svg";
import ShoppingCart from "../src/assets/shopping-cart.svg";
import { useContext, useState } from "react";
import CardDetails from "./cine/CardDetails";
import { MovieContext } from "./context";

const Header = () => {
    const [showCard, setShowCard] = useState(false);
    const { cardData } = useContext(MovieContext)
    console.log(cardData);

    const handleShowCard = () => {
        setShowCard(true);
    }

    return (
        <header>
            {
                showCard && <CardDetails onClose={() => setShowCard(false)}></CardDetails>
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
                            {
                                cardData.length > 0 && (
                                    <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">{cardData.length}</span>
                                )
                            }
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header