import get_history from "../api/mmbuy.js";

const hisprice = async (req, res) => {
    const p_url = req.params.purl;
    console.log(p_url);
    const data = await get_history(p_url);
    res.send(data);
}

export default hisprice