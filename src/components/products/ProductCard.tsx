import { FC, useContext } from 'react';
import { IProduct } from '../../interfaces/products';
import { FavoriteContex } from '../../context';

interface Props {
    product: IProduct
}

export const ProductCard: FC<Props> = ({ product }) => {

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const AllFavorites = [...favorites, product];
        SetFavorites(AllFavorites)
        localStorage.setItem('favorites', JSON.stringify(AllFavorites));

    }

    const { favorites } = useContext(FavoriteContex);
    const { SetFavorites } = useContext(FavoriteContex);

    return (
        <div className='flex flex-col justify-center p-5 rounded-lg shadow-lg'>
            <div>
                <img
                    className='m-auto h-auto max-w-[150px] w-full'
                    src={product.image}
                    alt={product.title}
                />
            </div>

            <form onSubmit={handleSubmit} >
                <h3 className='font-semibold mb-3'>{product.title}</h3>
                <p className='text-gray-500'>{product.description}</p>
                <p className='text-indigo-600'>{product.price}$</p>

                <input
                    type='submit'
                    value='Agregar a favoritos'
                    className='rounded-md bg-indigo-600 cursor-pointer hover:bg-indigo-700 transition-all mt-2 p-3 text-white'>
                </input>
            </form>
        </div>
    )
}
