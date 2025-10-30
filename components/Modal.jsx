"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }) {
    const modalRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  function handleHide() {
    router.back();
  }
  return( createPortal(
      <dialog
        ref={modalRef}
        onClose={handleHide}
        className="shadow-teal-700 mt-18 shadow-2xl  flex flex-col p-2 rounded-md dark:bg-white/15 dark:bg-opacity-95 dark:text-gray-100"
      >
        <span onClick={handleHide}
          className="flex justify-end cursor-pointer">
            <Image
              src="/xmark.svg"
              alt="close"
              width={30}
              height={30} />
          </span>
          {children}
      </dialog>
    ,
    document.getElementById("modal-content")
  
));
}
