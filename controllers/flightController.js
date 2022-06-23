const FlightModels = require("../models/Flight");

exports.getHome = (req, res, next) => {
  res.json({
    "Please NOTE":
      "You can find a particular flight with the index of the flight",
    Intro: "Welcome to Flight API project...",
    Note: "Use the routes below to get fully started with the app",
    "1.": "book-flight",
    "2.": "my-flight",
    "3.": "get-flight",
    "4.": "update-flight",
    "5.": "delete-flight",
  });
};

exports.postBookFlight = (req, res, next) => {
  const flightTitle = req.body.title;
  const flightTime = req.body.time;
  const flightPrice = req.body.price;
  const flightDate = new Date();
  const flightModels = new FlightModels(
    flightTitle,
    flightTime,
    flightPrice,
    flightDate
  );
  flightModels.bookFlight();

  res.json({
    Message: "You have successfully booked a flight with following feature",
    flightTitle,
    flightTime,
    flightPrice,
    flightDate,
  });
};

exports.getSingleFlight = (req, res, next) => {
  const urlParameter = req.params.flightId;
  FlightModels.getFlight(urlParameter, (flight) => {
    res.json(flight.response);
  });
};

exports.getAllFlights = (req, res, next) => {
  FlightModels.getAllFlights((flights) => {
    res.status(201).json(flights.response);
  });
};

exports.deleteFlight = (req, res, next) => {
  const param = req.params.flightId;
  FlightModels.deleteFlight(param, (deleteFlight) => {
    res.json({...deleteFlight});
  });
};

exports.postUpdateFlight = (req, res, next) => {
  const param = req.params.flightId;
  // console.log(param);
  const flightTitle = req.body.title;
  const flightTime = req.body.time;
  const flightPrice = req.body.price;
  const flightDate = new Date();
  const updatedFlight = new FlightModels(
    flightTitle,
    flightTime,
    flightPrice,
    flightDate
  );
  updatedFlight.updateFlight(param, (response) => {
    res.json({...response});
  });
};
