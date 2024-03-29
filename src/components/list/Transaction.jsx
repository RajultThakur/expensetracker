import React from 'react'
import { Apple, Dice1, OctagonX, Pencil,Luggage } from 'lucide-react';

export default function TransactionList({title, date, price, type="others"}) {
  return (
    <div className='flex gap-2 w-full mb-2 border-b-[2px] items-center justify-between p-1 px-2'>
      <div>{type==='food' ? <Apple/> : type === 'travel' ? <Luggage/> : <Dice1/> }</div>
      <div className='flex-1 text-sm items-center'>
        <p>{title}</p>
        <p className='text-gray-400 text-[10px]'>{date}</p>
      </div>
      <p className='text-orange-400 font-semibold mr-3'>{price}/</p>
      <div className='flex items-center justify-center gap-2'>
        <button><OctagonX/></button>
        <button><Pencil/></button>
      </div>

    </div>
  )
}
