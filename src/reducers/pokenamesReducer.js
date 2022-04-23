//initializing state
export  const initialState = {
    count: "",
    next: "",
    previous: "",
    results: [],
}

//setting  reducer  for fetch action mainly
export default (state   = initialState, action)   =>{
    switch(action.type){
        case "FETCH_POKENAMES":
            console.log("RESULTS",  action.payload.results)

            return {
                count : action.payload.count,
                next  : action.payload.next,
                previous  : action.payload.previous,
                results: state.results.concat(action.payload.results)

            };
        default:
            return state;
    }
};