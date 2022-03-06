import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts'
import { Pokemon } from '../../interfaces/pokemon-full';

interface Props{
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

  console.log(pokemon)

  return (
    <Layout title='Algun pokémon'>
      <h1>{pokemon.name}</h1>
    </Layout>
  )
}




export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemonsTotal = [...Array(151)].map( ( value, index ) => `${ index + 1 }` );

  return {
    // paths: [
    //   {
    //     params: {
    //       id: '1'
    //     }
    //   }
    // ],

    paths: pokemonsTotal.map( id => ({
      params: { id }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params as { id: string } ;

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ id }`);

  return {
    props: {
      pokemon: data
    }
  }
}

export default PokemonPage;