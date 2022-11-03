import get_history from "../api/mmbuy.js";

const price = async (req, res) => {
    const p_url = req.body.p_url;
    const data = await get_history(p_url);
    // console.log(req.body);
    res.send(data);

}

export default price