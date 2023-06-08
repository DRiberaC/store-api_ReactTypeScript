import { createContext } from "react";
import { IProduct } from '../../interfaces/products';

interface ContextProps {
    products: IProduct[],
    isLoading: boolean
}
export const ProductContext = createContext({} as ContextProps);
