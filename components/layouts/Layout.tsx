import { FC } from 'react';
import Head from "next/head"
import { Navbar } from '../ui/Navbar';


interface Props {
    title: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{ title || "Pokemon App"}</title>
            <meta name="author" content="David Diaz H"/>
            <meta name="description" content={`Info del Pokémon ${ title }`}/>
            <meta name="keywords" content={`poke, pokemon, pokedex, ${ title }`} />
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
