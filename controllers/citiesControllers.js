const City = require("../models/City");

const CityControllers = {
  getCities: async (req, res) => {
    let City;
        let query = {}

    if (req.query.city){
      query.city = req.query.city
    }
    if (req.query.country){
      query.country = req.query.country
    }
    try {
      City = await City.find(query)

      res.json(City)
  } catch (err) {
      console.log(err)
      res.status(500).json()
  }
  },
  getOneCity: async (req,res) => {
    const id = req.params.id
    let city
    let error = null
    try{
        city = await City.findOne({_id:id})
       
        if (city) {
          res.status(200).json({
              message: "you get one city",
              response: city,
              success: true
          })
      } else {
          res.status(404).json({
              message: "could't find city",
              success: false
          })}
    }catch(error){
        console.log(error)
    }
    res.status(400).json({
      message: "error",
      success: false
  })
  },
  addCity: async (req,res) => {
    const {name,image,country,description}=req.body.data
    let city 
    let error = null
    try{
        city = await new City(req.body).save()
        res.status(201).json({
          message: 'City created succesfully ♥',
          success: true
      })
    }catch(err){error = err}
    res.status(400).json({
      message: "could't create the city ☹",
      success: false
    })
  },
  modifyCity: async (req, res) => {
    const id = req.params.id
    const city = req.body.data
    let citydb
    let error = null
    try{
        citydb = await City.findOneAndUpdate({_id: id}, city, {new: true})
    } catch (err) {error = err}
    res.json({
        response: error ? "ERROR" : citydb,
      success: error ? false : true,
      error: error,
    })

  },
  removeCity: async (req,res) => {
    const id = req.params.id
    let city
    let error = null
    try {
        city = await City.findOneAndDelete({_id: id})
    }catch (err) {error = err}
    res.json({
        response: error ? "ERROR" : city,
      success: error ? false : true,
      error: error,
    })
  },
};
module.exports = CityControllers;
