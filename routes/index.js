const path = require("path");
const router = require("express").Router();
const axios = require("axios");
const apiRoutes = require("./api");
require("dotenv").config();
const KEY = process.env.REACT_APP_BGA_API_KEY;

// API Routes
router.use("/api", apiRoutes);

router.use(function searchGames(req, res) {
    let gameTitle = req.body.title;
      axios.get("https://www.boardgameatlas.com/api/search?name=" + gameTitle + "&client_id=" + KEY
      ).then(
        (response) => {
          // console.log("response " + JSON.stringify(response.data.games));
            res.json(response.data.games)
        }
      ).catch(
        (err) => {
            res.json({error: error})
        });
    })

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;