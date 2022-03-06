
const toggleFavorite = ( id: number ) => {
    console.log('toggleFavorite Call')

    let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]' )

    if( favorites.includes(id) ){
        favorites.filter( pokeId => pokeId !== id );
    }else {
        favorites.push( id );
    }

    localStorage.setItem('favorites', JSON.stringify( favorites ));

}

export default{
    toggleFavorite,
}