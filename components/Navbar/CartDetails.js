"use client";
import Image from "next/image";
import CartItem from "./CartItem";
import { createPortal } from "react-dom";
import { useContext } from "react";
import { MovieContext } from "@/context";

export default function CartDetails({ onsetShowCart }) {
    const { cartMovie, setCartMovie } = useContext(MovieContext);
    function handleRemoveMovie(id) {
        let updateCartList = cartMovie?.filter((movie) => movie.id !== id);
        setCartMovie(updateCartList);
    }

    return createPortal(
        <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-inherit backdrop-blur-sm ">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto">
                <div className="bg-dark/85 text-white shadow-md  rounded-2xl overflow-hidden p-5 md:p-9">
                    <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">
                        Your Carts
                    </h2>
                    {cartMovie?.map((movie) => (
                        <CartItem
                            key={movie.id}
                            movie={movie}
                            onRemoveId={handleRemoveMovie}
                        />
                    ))}

                    <div className="flex items-center justify-between gap-2">
                        <a
                            className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-sm"
                            href="#"
                        >
                            <Image
                                src="/assets/svg/checkout.svg"
                                width="24"
                                height="24"
                                alt=""
                            />
                            <span>Checkout</span>
                        </a>
                        <button
                            className="border border-white rounded-lg py-2 px-4 gap-2 text-sm"
                            onClick={() => onsetShowCart(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById("modal")
    );
}
