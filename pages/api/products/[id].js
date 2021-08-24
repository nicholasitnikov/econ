import axios from "axios";

export default async function handler(req, res) {

    const { id } = req.query
    const baseUrl = process.env.NODE_ENV === 'production' ? 'https://econ.store' : 'http://localhost:3000';
    let productsResponse = await axios.get(`${baseURl}/db.json`);
    res.status(200).json(productsResponse.data.filter((el) => el.id === parseInt(id))[0] || null);

}