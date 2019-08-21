const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const axios = require("axios");
require("dotenv").config();
const KEY = process.env.REACT_APP_BGA_API_KEY;

// API Routes
router.use("/api", apiRoutes);

// BGA Routes
router.use("/search/popular", (req, res) => {
  let query = "https://www.boardgameatlas.com/api/search?order_by=popularity&client_id=" + KEY
  // console.log(req)
  axios.get(query
  ).then(
    (response) => {
      // console.log("response " + JSON.stringify(response.data.games));
      res.json(response.data.games)
    }
  ).catch(
    (err) => {
      res.json({ error: error })
    });
});

router.use("/search", (req, res) => {
  let gameTitle = req.body.title;
  axios.get("https://www.boardgameatlas.com/api/search?name=" + gameTitle + "&client_id=" + KEY
  ).then(
    (response) => {
      // console.log("response " + JSON.stringify(response.data.games));
      res.json(response.data.games)
    }
  ).catch(
    (err) => {
      res.json({ error: error })
    });
});


// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../../client/build/index.html"));
// });

module.exports = router;