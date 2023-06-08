import { FC, useEffect, useState } from 'react'
import { ProductContext } from '.';
import productsDb from '../../api/productsDb';
import { IProduct } from '../../interfaces/products';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const ProductProvider: FC<Props> = ({ children }) => {

    const [products, SetProducts] = useState([] as IProduct[]);
    const [isLoading, SetIsLoading] = useState(false as boolean);

    const getAllProducts = async () => {
        SetIsLoading(true);
        const { data } = await productsDb.get('/products');
        SetIsLoading(false);
        SetProducts(data);
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <ProductContext.Provider
            value={{
                products,
                isLoading
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}
