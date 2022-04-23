import {store} from "../index";
import onPokemonMouseLeave from "./addFunctions/onPokemonMouseLeave";


const renderedPokemons = (pokedata) =>{
    const onPokemonMouseEnter = (e) => {
        //getting custom value from hovered element to get name of pokemon then looking in state for corrent pokemon and fill html with data
        const enteredPokemonName =  e.target.parentNode.getAttribute("customname");
        const foundEnteredPokemonData   = pokedata.find( pokemon => pokemon.name === enteredPokemonName)
        const elementForPokemonName = document.querySelector(".poke-name");
        const elementForPokemonId = document.querySelector(".poke-id");
        const elementForPokemonHeight = document.querySelector(".poke-height");
        const elementForPokemonWeight = document.querySelector(".poke-weight");
        const elementForPokemonBaseExp = document.querySelector(".base-experience");
        const elementForPokemonDefaultImage = document.querySelector(".pokemon-image-default-front");
        const elementForPokemonBackImage = document.querySelector(".pokemon-image-default-back");
        const singlePokemonData = document.querySelector(".single-pokemon-data");
        elementForPokemonName.innerHTML = foundEnteredPokemonData.name;
        elementForPokemonId.innerHTML = `Id ${foundEnteredPokemonData.id}`;
        elementForPokemonHeight.innerHTML = `Height: ${foundEnteredPokemonData.height}`;
        elementForPokemonWeight.innerHTML = `Weight: ${foundEnteredPokemonData.weight}`;
        elementForPokemonBaseExp.innerHTML = `Base-experience: ${foundEnteredPokemonData['base_experience']}`;
        elementForPokemonDefaultImage.src = foundEnteredPokemonData.sprites['front_default'];
        elementForPokemonBackImage.src =   foundEnteredPokemonData.sprites['back_default'];
        singlePokemonData.style.display ="block"
    }

    //taking state from redux store each name is a link on hover shows detailed info on pokemon and on leave hides
    return  store.getState().pokenamesReducer.results.map(poke  => ( 
        <div 
        key={poke.name}
        className="item"
        customname={poke.name}
        >
            <a 
            onMouseEnter={onPokemonMouseEnter}
            onMouseLeave={onPokemonMouseLeave}
            >
                {poke.name}
            </a>
            - {poke.url}
        </div>
    ))
}
export default renderedPokemons;