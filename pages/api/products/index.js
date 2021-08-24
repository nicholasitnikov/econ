import axios from "axios";

export default async function handler(req, res) {

    const baseUrl = process.env.NODE_ENV === 'production' ? 'https://econ.store' : 'http://localhost:3000';
    let productsResponse = await axios.get(`${baseUrl}/db.json`);
    res.status(200).json(productsResponse.data);

}