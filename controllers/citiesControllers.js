const City = require("../models/City");

const CityControllers = {
  getCities: async (req, res) => {
    let cities;
    let query = {}

    if (req.query.city) {
      query.city = req.query.city;
      let regExp = new RegExp(`^${req.query.city}`, "i")
      query.city = regExp
    }
    if (req.query.country) {
      query.country = req.query.country;
      let regExp = new RegExp(`^${req.query.country}`, "i")
      query.country = regExp
    }
    try {
      console.log("query");
      cities = await City.find(query);

      res.status(200).json(cities);
    } catch (error) {
      console.log(error);
      res.status(500).json();
    }
  },
  getOneCity: async (req, res) => {
    const id = req.params.id;
   
    try {
      cities = await City.findOne({ _id: id });

      if (cities) {
        res.status(200).json({
          message: "you get one city",
          response: cities,
          success: true,
        });
      } else {
        res.status(404).json({
          message: "could't find city",
          success: false,
        });
      }
    } catch (err) {
      res.status(404).json({
        message: "error",
        success: false,
      });
    }
    },
  addCity: async (req, res) => {
    try {
      cities = await new City(req.body).save();
      res.status(201).json({
        message: "City created succesfully ♥",
        success: true,
      });
    } catch (error) {
      res.status(400).json({
        message: "could't create the city ☹",
        success: false,
      });
    }
  },
  modifyCity: async (req, res) => {
    const id = req.params.id;
    const cities = req.body;
    let citydb;
    try {
      citydb = await City.findOneAndUpdate({ _id: id }, cities, { new: true });
      res.status(201).json({
        message: "♥",
        response: citydb,
        success: true,
      });
    } catch (error) {
      res.status(400).json({
        message: "could't edit yout city ☹",
        success: false,
      });
    }
  },
  removeCity: async (req, res) => {
    const id = req.params.id;
    let cities;
    try {
      cities = await City.findOneAndDelete({ _id: id });

      res.status(200).json({
        message: "Deleted ^^ ",
        success: True,
      });
    } catch (error) {
      res.status(400).json({
        message: "404 could't delete the city ☹",
        success: false,
      });
    }
  },
};
module.exports = CityControllers;
