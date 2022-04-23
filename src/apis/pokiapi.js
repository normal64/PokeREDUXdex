import axios from "axios";
//initial API url
export default axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon"
});