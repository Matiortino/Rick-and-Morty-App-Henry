const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";


async function getCharById(req, res) {
  const { id } = req.params;

  console.log('id', id);

  try {
    const response = await axios (`${URL}${id}`);
    
  if(response.data.id){
    const {
      id, name, gender, species, origin, image,status
    } = response.data;
    
    const obj = {id: id, name: name, gender: gender, species: species, origin: origin.name, image: image, status: status
    }
    res.status(200).json(obj);
    }else res.status(404).json({massage: "Not found"});
 
  } catch (error) {
    res.status(500).json({message:error.massage})
  }
}
  
//   axios.get(`${URL}${id}`)
//     .then((response ) => {
//       if (response.data.id) {

//         const { id, name, gender, species, origin, image, status } = response.data

//         const obj = {id: id, name: name, gender: gender, species: species, origin: origin, image: image, status: status}
//         res.status(200).json(obj)
//       }
//       else res.status(404).json({ message: 'Not found' });

//     })
//     .catch(error => {
//       res.status(500).json({ message: error.message })
//     })
// } 




    
    // const character = {
    //   id,
    //   name,
    //   status,
    //   species,
    //   origin,
    //   image,
    //   gender,
    // };
  
//     console.log(character);
  
//     res.writeHeader(200, { "Content-Type": "application/json" });
//     // cadena de texto es decir string
//     res.end(JSON.stringify(character));
    
//   } catch (error) {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//     return res.end(error.message);
//   }
  
//   // con promesas
//   // axios(`${URL}${id}`)
//   //   .then(({data}) => {
//   //     const { id, name, status, species, origin, gender, image } = data;
//   //     console.log(data);

//   //     const character ={
//   //       id,
//   //       name,
//   //       status,
//   //       species,
//   //       origin,
//   //       image,
//   //       gender       
//   //     };

//   //     res.writeHeader(200, {'Content-Type': 'application/json'});
//   //     // cadena de texto es decir string
//   //     res.end(JSON.stringify(character));
//   //   })

//   //   .catch((err) => {
      
//   //     res.writeHead(500, { 'Content-Type': 'text/plain' });
//   //     return res.end(err.message);
      
//   //   });
// };

module.exports = getCharById;