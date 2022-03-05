import type { NextPage, GetStaticProps } from 'next'
import { Layout } from '../components/layouts'
import { pokeApi } from '../api';
import { PokemonListResponse } from '../interfaces/pokemon-list';

const HomePage: NextPage = (props) => {

  console.log(props)

  return (
    <>
      <Layout title='Listado de Pokémons'>

        <ul>
            <li></li>
        </ul>
        
      </Layout>
    </>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  return {
    props: {
      pokemons: data.results
    }
  }
}


export default HomePage