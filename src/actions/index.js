import pokeapi from "../apis/pokiapi";
import {connect} from "react-redux";
import {store} from "../index";
//action creator making api request dispatching action to reducer with actiob type and payload
export const fetchPokeData = (props)  =>{
    return async (dispatch) => {
        let q =  store.getState().pokenamesReducer.next;
        const response = await pokeapi.get(q ? q : null);
        console.log( "response data action",response.data);
        dispatch({ type: "FETCH_POKENAMES", payload: response.data })
    }
}; 
const mapStateToProps = (state ) => {
    return {
        pokeDataResponse: state.pokenamesReducer,
    }
}

export default connect(mapStateToProps,)(fetchPokeData);