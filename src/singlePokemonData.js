const singlePokemonData = () => {
    return(
        <div class="ui horizontal segment single-pokemon-data">
        <div className="ui segment single-pokemon-data-images">
            <img
                className=" pokemon-image-default-front"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png">
            </img>
            <img
                className="pokemon-image-default-back"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png">
            </img>
        </div>
        <div className="ui horizontal segments">
            <div className="ui segment">
                <h3 className="poke-name">Name</h3>
            </div>
            <div className="ui segment">
                <h4 className="poke-id">Id</h4>
            </div>
            <div className="ui segment">
                <p className="poke-height">Height</p>
            </div>
            <div className="ui segment">
                <p className="poke-weight">Weight</p>
            </div>
            <div className="ui segment">
                <p className="base-experience">base_expirience</p>
            </div>
        </div>
    </div>
    )
}

export default singlePokemonData;