import { FC, useState, useEffect } from 'react';
import { FavoriteContex } from '.';
import { IProduct } from '../../interfaces';

interface Props {
    children: JSX.Element
}

export const FavoriteProvider: FC<Props> = ({ children }) => {

    const [favorites, SetFavorites] = useState([] as IProduct[]);

    const getAllFavorites = () => {
        const tasksLS = localStorage.getItem('favorites');
        if (tasksLS) {
            const parsedFavorites = JSON.parse(tasksLS);
            SetFavorites(parsedFavorites);
        }
    }

    useEffect(() => {
        getAllFavorites();
    }, []);

    return (
        <FavoriteContex.Provider value={{ favorites, SetFavorites: SetFavorites }} >
            {children}
        </FavoriteContex.Provider>

    )
}
