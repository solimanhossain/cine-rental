import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Modal from "../Modal";
import CartDetails from "./CartDetails";

export default function ShowCart() {
    const [showCart, setShowCart] = useState(false);
    function handldShowCart() {
        setShowCart(!showCart);
        // console.log(showCart);
    }

    return (
        <>
            <li onClick={handldShowCart} className="hover:scale-105">
                <Link
                    className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                    href="#"
                >
                    <Image
                        src={`/assets/svg/cart.svg`}
                        width="24"
                        height="24"
                        alt="cart"
                    />
                </Link>
            </li>
            {showCart && (
                <Modal>
                    <CartDetails onsetShowCart={setShowCart} />
                </Modal>
            )}
        </>
    );
}
