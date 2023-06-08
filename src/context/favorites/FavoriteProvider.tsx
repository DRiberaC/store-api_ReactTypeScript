import { FC, useState } from 'react';
import { FavoriteContex } from '.';
import { IProduct } from '../../interfaces';

interface Props {
    children: JSX.Element
}

export const FavoriteProvider: FC<Props> = ({ children }) => {

    const [favorites, SetFavorites] = useState([] as IProduct[]);

    return (
        <FavoriteContex.Provider value={{ favorites, SetFavorites: SetFavorites }} >
            {children}
        </FavoriteContex.Provider>

    )
}
