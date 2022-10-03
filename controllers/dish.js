
const dishesPut =  (req, res)=>{
    const id= req.params.id;
   
    res.json({
        "msg":'put API - controller',
         id});
}

const dishesGet = (req, res)=>{
    const query = req.query;
    const { q, nombre = 'No name'}=req.query;
    res.json({
        "msg":'get API',
    q,
    nombre});
}

const dishesPost = (req, res)=>{
    //const body = req.body;
    const { id } = req.body;
    res.json({
        "msg":'post API',
        id});
}

const dishesDelete = (req, res)=>{
    res.json({
        "msg":'delete API'});
}

module.exports = {
    dishesPut,
    dishesGet,
    dishesPost,
    dishesDelete 
}