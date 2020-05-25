import axios from "axios";

export default axios.create ({
    baseURL: "https://pokeapi.co/api/v2/ability/?limit=20&offset=20",
    responseType: "json"
});