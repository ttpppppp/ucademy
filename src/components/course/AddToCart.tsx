"use client";
import { useCart } from '@/app/Context/CartContext';
import { ICourse } from '@/database/course.model';
import React from 'react';
import { toast } from 'react-toastify';

const AddToCart = ({ course }: { course: ICourse }) => {
  const { updateCartCount } = useCart();

  const addToCart = (course: ICourse) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const courseExists = cart.some((item: ICourse) => item._id === course._id);
    if (courseExists) {
      toast.warning("Đã được thêm");
    } else {
      cart.push(course);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      toast.success("Thêm thành công!");
    }
  };

  return (
    <button
      onClick={() => addToCart(course)}
      className="flex items-center justify-center w-full h-12 rounded-lg text-white font-bold bg-pink-500 px-1"
    >
      Thêm khóa học
    </button>
  );
};

export default AddToCart;
