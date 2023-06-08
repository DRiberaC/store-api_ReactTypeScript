import { FC, useContext } from 'react';
import { IProduct } from '../../interfaces/products';
import { FavoriteContex } from '../../context';
interface Props {
    product: IProduct
}

export const FavoriteCard: FC<Props> = ({ product }) => {

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const newArrayFavorite = favorites.filter(favoriteItem => favoriteItem != product)
        SetFavorites(newArrayFavorite);

        localStorage.setItem('favorites', JSON.stringify(newArrayFavorite));
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
                    value='Quitar de favoritos'
                    className='rounded-md bg-red-600 cursor-pointer hover:bg-red-700 transition-all mt-2 p-3 text-white'>
                </input>
            </form>
        </div>
    )
}
