"use client"
import DeleteCart from '@/components/course/DeleteCart'
import { ICourse } from '@/database/course.model'
import { IconCart, IconTrash } from '@/icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Cart = () => {
    const [cart, setCart] = React.useState([]);

    React.useEffect(() => {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCart(storedCart);
    }, []);
  
    const deleteCartItem = (index : number) => {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    };
    const deleteCartAll = () =>{
      const updatedCart = [...cart];
      updatedCart.splice(0, updatedCart.length);
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  return (
    <div className='grid grid-cols-10 gap-8'>
      <div className="bg-white p-4 rounded-lg col-span-7">
        <div className="flex items-center justify-between">
            <h1 className='text-3xl font-bold cursor-pointer'>Cart</h1>
            <div className="flex items-center gap-2 cursor-pointer text-red-600" onClick={() => deleteCartAll()}>
                <IconTrash className='size-4'/>
                <span>Remove</span>
            </div>
        </div>
        {cart.length > 0 ? (
        cart.map((item: ICourse, index: number) => (
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
                    <h3 className="font-bold max-w-xs overflow-hidden whitespace-nowrap text-ellipsis">{item.title}</h3>
                    <p className="text-sm">Mới nhất</p>
                  </div>
                </div>
                </Link>
                <div className="flex items-center gap-5">
              <span className="font-bold text-xl">100.000đ</span>
              <DeleteCart index={index} deleteCartItem={deleteCartItem} />
            </div>
          </div>
              </div>
        ))
      ) : (
        <div className="text-center mt-8">
          <p className='mb-3'>Không có khóa học nào!</p>
          <span>về</span>
          <Link href="/" className='text-primary font-bold italic mx-1 underline'>Trang chủ</Link>
          <span>để mua khóa học</span>
        </div>
      )}

      </div>
      <div className="bg-white p-4 rounded-lg col-span-3 h-64">
        <div className="subtotal flex items-center justify-between mb-5">
            <span>Subtotal</span>
            <span className='price font-bold'>100.000đ</span>
        </div>
        <div className="flex items-center justify-between mb-5 border-b border-dashed pb-4">
            <span>Discount</span>
            <span className='font-bold'>0đ</span>
        </div>
        <div className="flex items-center justify-between mb-5">
            <span className='font-bold'>Grand Total</span>
            <span className='font-bold'>0đ</span>
        </div>
        <button className='w-full font-bold p-3 bg-primary rounded-lg text-white'>Checkout Now</button>
      </div>
    </div>
  )
}

export default Cart