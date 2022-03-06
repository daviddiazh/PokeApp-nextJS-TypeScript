import type { NextPage, GetStaticProps } from 'next'
import { Layout } from '../components/layouts'
import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from '../interfaces/pokemon-list';
import { Card, Grid, Row, Text } from '@nextui-org/react';

interface Props{
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {

  return (
    <>
      <Layout title='Listado de Pokémons'>

        <Grid.Container gap={2} justify='flex-start'>
            {
              pokemons.map( (pokemons) => (
                <Grid xs={6} md={2} xl={1} key={pokemons.id}>
                  <Card hoverable clickable>
                    <Card.Body css={{ p: 1 }}>
                      <Card.Image
                        src={ pokemons.img }
                        width="100%"
                        height={ 140 }
                      />
                      <Card.Footer>
                        <Row justify='space-between'>
                          <Text transform='capitalize'>{ pokemons.name }</Text>
                          <Text>{ pokemons.id }</Text>
                        </Row>
                      </Card.Footer>
                    </Card.Body>
                  </Card>
                </Grid>
              ))
            }
        </Grid.Container>
        
      </Layout>
    </>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map( (poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }) )

  return {
    props: {
      pokemons
    }
  }
}


export default HomePage