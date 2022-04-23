
const pokedataDetailed = (pokedata) =>{
    return  pokedata.map(poke => (
        <div 
        className="item"
        key={poke.name}
        >
            Height:{poke.height}&nbsp;
            Weigth: {poke.weight} 
            <img src={poke.sprites["front_default"]}></img>
        </div>
    ))
}
export default pokedataDetailed;