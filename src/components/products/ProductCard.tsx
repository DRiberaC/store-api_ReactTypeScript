import React, { FC } from 'react'
import { IProduct } from '../../interfaces/products';

interface Props {
    product: IProduct
}

export const ProductCard: FC<Props> = ({ product }) => {
    return (
        <div className='flex flex-col justify-center p-5 rounded-lg shadow-lg'>
            <div>
                <img
                    className='m-auto h-auto max-w-[150px] w-full'
                    src={product.image}
                    alt={product.title}
                />
            </div>

            <div>
                <h3 className='font-semibold mb-3'>{product.title}</h3>
                <p className='text-gray-500'>{product.description}</p>
                <p className='text-indigo-600'>{product.price}$</p>

                <button className='rounded-md bg-indigo-600 cursor-pointer hover:bg-indigo-700 transition-all mt-2 p-3 text-white'>
                    Agregar a favoritos
                </button>
            </div>
        </div>
    )
}
