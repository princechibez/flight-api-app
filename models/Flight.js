const fs = require("fs");
const path = require("path");

p = path.join(path.dirname(process.mainModule.filename), "data", "flight.json");

const flightFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Flight {
  constructor(title, time, price, date) {
    this.title = title;
    this.time = time;
    this.price = price;
    this.date = date;
  }

  bookFlight() {
    flightFile((flights) => {
      flights.push(this);
      fs.writeFile(p, JSON.stringify(flights), (err) => console.log(err));
    });
  }

  static getFlight(id, cb) {
    flightFile((flights) => {
      if (id > flights.length - 1) {
        cb({ response: "There is no such flight..." });
      } else {
        for (let flight in flights) {
          if (flight === id) {
            cb({ response: flights[flight] });
          }
        }
      }
    });
  }

  static getAllFlights(cb) {
    flightFile((flights) => {
      if (flights.length === 0) {
        cb({
          response: "You don't have any flights now, start adding flights...",
        });
      } else {
        cb({ response: flights });
      }
    });
  }

  static deleteFlight(flightIndex, cb) {
    flightFile((flights) => {
      if (flightIndex > flights.length - 1) {
        cb({ response: "This flight does not exist..." });
      } else {
        let selectedflight = flights.splice(flightIndex, 1);
        const updatedFlights = flights.filter(flight => flight !== selectedflight);
        fs.writeFile(p, JSON.stringify(updatedFlights), err => console.log(err))
        cb({ response: "Flight successfully deleted...", newData: updatedFlights });
      }
    });
  }

  updateFlight(id, cb) {
    flightFile((flights) => {
      if (id > flights.length - 1) {
        cb({ message: "There is no such flight" });
      } else {
        for (let flight in flights) {
          if (flights[id] === flights[flight]) {
            let flightToUpdate = [...flights];
            flightToUpdate[flight] = this;
            fs.writeFile(p, JSON.stringify(flightToUpdate), (err) =>
              console.log(err)
            );
            cb({ message: "Flight has been Successfully updated...", flights: flightToUpdate });
          }
        }
      }
    });
  }
};
