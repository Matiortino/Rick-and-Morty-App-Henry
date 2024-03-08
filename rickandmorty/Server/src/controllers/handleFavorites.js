let myFavorites = [];
const { Favorite } = require ("../DB_connection");

const postFav = async (req, res) => {

   const { id, name, gender, species, origin, image, status} = req.body
   // console.log(req.body);
  const character = { id, name, gender, species, origin, image, status};
  try{
  if(!name || !gender || !species || !origin || !image || !status){
    return res.status(401).send("Faltan datos");
  }

  await Favorite.findOrCreate({
    where: { id, name, gender, species, origin, image, status},
  });

  const allFavorites = await Favorite.findAll();

return res.json(allFavorites);
}catch(error){
    return res.status(500).json(err.message);
}
};

const deleteFav = async (req, res) => {

  try{

  const { id } = req.params;

  await Favorite.destroy({ where: {id : id} });

  const allFavorites = await Favorite.findAll();
  
  return res.json(allFavorites);
  }catch(error){
    return res.status(500).json(err.message);
  }
};

module.exports = { postFav, deleteFav };