import { FC } from "react";
import { Grid, Card, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Props{
    pokemonId: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {

  const router = useRouter();

  const onFavoriteClick = () => {

    router.push(`/pokemon/${ pokemonId }`)

  }

  return (
    <Grid xs={6} sm={2} xl={1} key={pokemonId}>
      <Card hoverable clickable css={{ padding: "10px" }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width="100%"
          height={140}
          onClick={ onFavoriteClick }
        />
      </Card>
    </Grid>
  );
};
