import { FC, useContext } from 'react';
import { FavoriteContex, ProductContext } from '../../context';
import { FavoriteCard, ProductCard } from '.';

export const ProductsList: FC = () => {


    const { products, isLoading } = useContext(ProductContext);
    const { favorites } = useContext(FavoriteContex);


    if (isLoading) {
        return (
            <h1>Cargando...</h1>
        )
    }

    return (
        <>

            <div>
                <h2 className='font-semibold'>Todos los productos</h2>
                <div className='grid grid-cols-4 gap-4'>
                    {
                        products.map((product) =>
                            <ProductCard product={product} key={product.id} />
                        )
                    }
                </div>
            </div>

            <div className='mt-4'>
                <h2 className='font-semibold'>Favoritos</h2>
                <div className='grid grid-cols-4 gap-4'>
                    {
                        favorites.map((product) =>
                            <FavoriteCard product={product} key={product.id} />
                        )
                    }
                </div>
            </div>

        </>
    )
}
