import { connect } from "react-redux";
import React from 'react';
import { fetchPokeData } from "./actions"
import { useEffect, useState } from "react";
import axios from "axios"
import "./css/pokelist.css";
import pokedataDetailed from "./helpers/pokedataDetailed";
import renderedPokemons from "./helpers/renderedPokemons"
import singlePokemonData   from "./singlePokemonData"

function PokeList(props) {
    const [pokedata, setPokedata] = useState([]);
    console.log("pokelist props", props);
    //then props change(means state in redux changes) taking each url from API rensponse and do a request to each then saving data into local state
    useEffect(() => {
        const requestListArr = props.pokeDataResponse.results.map(poke => axios.get(poke.url));
        console.log(`requestListArr`, requestListArr);
        const search = async () => {
            const data = await
                axios.all(requestListArr).then(axios.spread((...responses) => {
                    //saving data for each pokemon
                    const pokedataList = responses.map(response => response.data);
                    setPokedata(pokedataList)
                    // use/access the results
                })
                )
                    .catch(errors => {
                        // react on errors.
                        console.error(errors);
                    });
            //add pokemons with new offset to existing ones
        }
        search();
        return () => {
        }
    }, [props])

    console.log("pokedata", pokedata);
    return (
        <div className="ui relaxed divided list detailed-pokemon">
            {/* component that return jsx to show detailed info on choosen pokemon */}
            {singlePokemonData()}
            <div className="list">
                <h2>{props ? "Count:" + props.pokeDataResponse.count : "no data"}</h2>
                <h3>{props ? "Next:" + props.pokeDataResponse.next : "no data"}</h3>
                <p>{props ? "Previous:" + props.pokeDataResponse.previous : "no data"}</p>
                <div className="ui celled grid">
                    <div className="nine wide column">
                        {/* rendering left column with pokemon data from intial request(name and url) */}
                        <div className="ui list">{props ? renderedPokemons(pokedata) : "no data"}</div>
                    </div>
                    <div className="seven wide column">
                        {/* rendering rigth column with pokemon data from second(detailed) request(weight,height,pic) */}
                        <div className="ui list">{pokedataDetailed(pokedata)}   </div>
                    </div>
                </div>
            </div>
            <button className="massive ui button add-pokemons" onClick={props.fetchPokeData}>Add more pokemons</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        pokeDataResponse: state.pokenamesReducer,

    }
}

export default connect(mapStateToProps, { fetchPokeData: fetchPokeData })(PokeList);