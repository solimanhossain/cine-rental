"use client";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { useRef } from "react";

export default function Modal({ children }) {
    const router = useRouter();
    const modalRef = useRef(null);
    modalRef.current?.showModal();

    return createPortal(
        <dialog
            ref={modalRef}
            className="flex justify-end w-[75%] max-w-full p-4 bg-dark bg-opacity-50 text-white my-4 z-10 absolute"
        >
            <span
                onClick={() => router.back()}
                className="cursor-pointer absolute right-0 top-0  border bg-white/50 text-4xl px-3 py-1 text-black z-20"
            >
                X
            </span>
            {children}
        </dialog>,
        document.getElementById("modal")
    );
}
