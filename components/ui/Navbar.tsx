import { Spacer, Text, useTheme } from "@nextui-org/react"
import Image from 'next/image'
import { useRouter } from 'next/router';


export const Navbar = () => {

  const { theme } = useTheme();

  const router = useRouter();

  const onClick = () => {
    router.push(`/`);
  }

  return (
    <div style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0 20px",
        backgroundColor: theme?.colors.gray900.value
    }}>
        <Image 
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="Icono de la app"
          width={70}
          height={70}
          onClick={ onClick }
        />
        <Text color='white' h2>P</Text>
        <Text>okémon</Text>

        <Spacer css={{
          flex: "1",
        }} />
        <Text color="white" margin=" 0px 20px">Favoritos</Text>
    </div>
  )
}
