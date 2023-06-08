import { createContext } from 'react';
import { IProduct } from '../../interfaces/products';

interface ContextProps {
    favorites: IProduct[],
    SetFavorites: any
}

export const FavoriteContex = createContext({} as ContextProps);