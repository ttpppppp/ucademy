"use client";
import { useCart } from '@/app/Context/CartContext';
import { ICourse } from '@/database/course.model';
import { IconTrash } from '@/icons';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState<ICourse[]>([]);
  const { updateCartCount } = useCart();

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    const parsedCart = storedCart ? JSON.parse(storedCart) : [];
    setCart(parsedCart);
  }, []);

  const deleteCartItem = (index: number) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    updateCartCount();
  };

  const deleteCartAll = () => {
    setCart([]);
    localStorage.setItem('cart', JSON.stringify([]));
    updateCartCount();
  };

  useEffect(() => {
    fetch('http://localhost:8080/category')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  let totalPrice = 0;

  return (
    <div className='grid grid-cols-10 gap-8'>
      <div className="bg-white p-4 rounded-lg col-span-7">
        <div className="flex items-center justify-between">
          <h1 className='text-3xl font-bold cursor-pointer'>Cart</h1>
          <div className="flex items-center gap-2 cursor-pointer text-red-600" onClick={deleteCartAll}>
            <IconTrash className='size-4'/>
            <span>Remove</span>
          </div>
        </div>
        <>
          {cart.length > 0 ? (
            <>
              {cart.map((item: ICourse, index: number) => {
                totalPrice += item.price;
                return (
                  <div key={index} className="product mt-5">
                    <div className="product-item cursor-pointer flex justify-between border p-3 rounded-lg">
                      <Link href={`/course/${item.slug}`}>
                        <div className="flex gap-2">
                          <Image 
                            src={item.image}
                            alt="image"
                            width={100}
                            height={100}
                            priority
                            className="rounded-lg"
                          />
                          <div>
                            <h3 className="font-bold max-w-xs overflow-hidden whitespace-nowrap text-ellipsis dark:text-grayDark">{item.title}</h3>
                            <p className="text-sm dark:text-grayDark">Mới nhất</p>
                          </div>
                        </div>
                      </Link>
                      <div className="flex items-center gap-5">
                        <span className="font-bold text-xl dark:text-grayDark">{item.price.toLocaleString('vi-VN')}đ</span>
                        <button onClick={() => deleteCartItem(index)} className="text-red-600">
                          <IconTrash className='size-4'/>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <div className="text-center mt-8">
              <p className='mb-3'>Không có khóa học nào!</p>
              <span>về</span>
              <Link href="/" className='text-primary font-bold italic mx-1 underline'>Trang chủ</Link>
              <span>để mua khóa học</span>
            </div>
          )}
        </>
      </div>
      <div className="bg-white p-4 rounded-lg col-span-3 h-64">
        <div className="subtotal flex items-center justify-between mb-5 dark:text-grayDark">
          <span>Subtotal</span>
          <span className='price font-bol'>{totalPrice.toLocaleString('vi-VN')}đ</span>
        </div>
        <div className="flex items-center justify-between mb-5 border-b border-dashed pb-4 dark:text-grayDark">
          <span>Discount</span>
          <span className='font-bo'>0đ</span>
        </div>
        <div className="flex items-center justify-between mb-5 dark:text-grayDark">
          <span className='font-bold'>Grand Total</span>
          <span className='font-bold'>{totalPrice.toLocaleString('vi-VN')}đ</span>
        </div>
        <button className='w-full font-bold p-3 bg-primary rounded-lg text-white'>Checkout Now</button>
      </div>
    </div>
  );
};

export default Cart;
