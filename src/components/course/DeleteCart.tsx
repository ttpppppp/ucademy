"use client"
import { IconTrash } from '@/icons'
import React from 'react'

const DeleteCart = ({ index, deleteCartItem } : { index: number, deleteCartItem: (index: number) => void }) => {
    return (
      <div className="delete-cart" onClick={() => deleteCartItem(index)}>
        <IconTrash className="size-5 text-red-600" />
      </div>
    );
  };

export default DeleteCart
