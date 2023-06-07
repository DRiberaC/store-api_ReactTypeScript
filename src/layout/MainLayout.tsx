import { FC } from 'react'
import { Header } from '../components'

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <>
            {/* Header */}

            <Header></Header>

            {/* contenido principal */}

            <main>
                {children}
            </main>

            {/* productos favoritos */}


        </>
    )
}
