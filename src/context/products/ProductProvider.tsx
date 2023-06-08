import { FC, useEffect, useState } from 'react'
import { ProductContext } from '.';
import productsDb from '../../api/productsDb';
import { IProduct } from '../../interfaces/products';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const ProductProvider: FC<Props> = ({ children }) => {

    const [products, setProducts] = useState([] as IProduct[]);
    const [isLoading, setIsLoading] = useState(false as boolean);

    const getAllProducts = async () => {
        setIsLoading(true);
        const { data } = await productsDb.get('/products');
        setIsLoading(false);
        setProducts(data);
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
