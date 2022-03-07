import { FC } from 'react';
import Head from "next/head"
import { Navbar } from '../ui/Navbar';


interface Props {
    title: string;
}

const origin = ( typeof window === 'undefined' ) ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{ title || "Pokemon App"}</title>
            <meta name="author" content="David Diaz H"/>
            <meta name="description" content={`Info del Pokémon ${ title }`}/>
            <meta name="keywords" content={`poke, pokemon, pokedex, ${ title }`} />

            <meta property="og:title" content={`Información sobre ${ title }`} />
            <meta property="og:description" content={`Esta es la página sobre el pokémon ${ title }`} />
            <meta property="og:image" content={`${origin}/banner.png`} />
        </Head>

        <Navbar />

        <main style={{
          padding: "0 20px"
        }}>
            { children }
        </main>
    </>
  )
}
