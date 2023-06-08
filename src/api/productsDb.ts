import axios from "axios";

const productsDb=axios.create({
    baseURL:'https://fakestoreapi.com',

});

export default productsDb;