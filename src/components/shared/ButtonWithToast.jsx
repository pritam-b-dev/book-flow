"use client";
import React from "react";
import { toast, ToastContainer } from "react-toastify";

const ButtonWithToast = ({ bookTitle }) => {
  const handleBorrow = () => {
    toast.success(`"${bookTitle}" successfully borrowed!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };
  return (
    <>
      <button onClick={handleBorrow} className="btn btn-primary btn-lg w-full">
        Borrow This Book
      </button>
      <ToastContainer />
    </>
  );
};

export default ButtonWithToast;
