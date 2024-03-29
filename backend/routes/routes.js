const express = require("express");

const router = express.Router();
//Get all Method
router.get("/getTop100", (req, res) => {
  let currency =
    req.query.currency && req.query.currency !== ""
      ? req.query.currency
      : "usd";
  fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response);
    })
    .then((data) => {
      // if (data?.status?.error_code) {
      // res.statusCode = data.status.error;
      // res.send(JSON.stringify(data));
      // } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify(data));
      // }
    })
    .catch((error) => {
      res.setHeader("Content-Type", "application/json");
      if (error.response) {
        res.statusCode = error.response.status;
      } else {
        res.statusCode = 500;
      }
      console.log(error.message);
      res.send(
        JSON.stringify({
          errorMessage:
            "Rate limit Reached. Please try again after 5 minutes" +
            error.message,
        })
      );
    });
});

router.get("/convertPrice", (req, res) => {
  let id = req.query.id,
    currency = req.query.currency,
    amount = req.query.amount;

  if (id && id !== "" && currency && currency !== "" && amount) {
    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=${currency}`
    )
      .then((data) => data.json())
      .then((data) => {
        if (data?.status?.error_code) {
          res.statusCode = data.status.error;
          res.send(JSON.stringify(data));
        } else {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          let calculatedData = {
            id: id,
            currency: currency,
            amount: data[id][currency] * amount,
          };
          res.send(JSON.stringify(calculatedData));
        }
      })
      .catch((error) => {
        res.setHeader("Content-Type", "application/json");
        if (error.response) {
          res.statusCode = error.response.status;
        } else {
          res.statusCode = 500;
        }
        res.send(
          JSON.stringify({
            errorMessage:
              "Rate limit Reached. Please try again after 5 minutes",
          })
        );
      });
  } else {
    res.statusCode = 400;
    res.send(
      JSON.stringify({
        errorCode: 400,
        errorMessage: "Missing query param in the API",
      })
    );
  }
});

router.get("/search", (req, res) => {
  if (req.query.query && req.query.query !== "") {
    fetch(`https://api.coingecko.com/api/v3/search?query=${req.query.query}`)
      .then((data) => data.json())
      .then((data) => {
        if (data?.status?.error_code) {
          res.statusCode = data.status.error;
          res.send(JSON.stringify(data));
        } else {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.send(JSON.stringify(data));
        }
      })
      .catch((error) => {
        res.setHeader("Content-Type", "application/json");
        if (error.response) {
          res.statusCode = error.response.status;
        } else {
          res.statusCode = 500;
        }
        res.send(
          JSON.stringify({
            errorMessage:
              "Rate limit Reached. Please try again after 5 minutes",
          })
        );
      });
  } else {
    res.statusCode = 400;
    res.send(
      JSON.stringify({
        errorCode: 400,
        errorMessage: "Missing query param in the API",
      })
    );
  }
});

module.exports = router;
