const Cities = require("../models/Cities");

const citiesControllers = {
  getCities: async (req, res) => {
    let cities;
        let query = {}

    if (req.query.city){
      query.city = req.query.city
    }
    if (req.query.country){
      query.country = req.query.country
    }
    try {
      cities = await Cities.find(query)

      res.json(cities)
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
        city = await Cities.findOne({_id:id})
       
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
        city = await new Cities(req.body).save()
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
        citydb = await Cities.findOneAndUpdate({_id: id}, city, {new: true})
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
        city = await Cities.findOneAndDelete({_id: id})
    }catch (err) {error = err}
    res.json({
        response: error ? "ERROR" : city,
      success: error ? false : true,
      error: error,
    })
  },
};
module.exports = citiesControllers;
