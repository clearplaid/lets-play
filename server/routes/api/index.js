const router = require("express").Router();
const gameRoutes = require("./games");
const guildRoutes = require("./guilds");
const userRoutes = require("./users");
const friendMessageRoutes = require("./friendMessages");
const guildMessageRoutes = require("./guildMessages");
const profileRoutes = require("./profile")


// Game routes
router.use("/games", gameRoutes);
// Guild routes
router.use("/guilds", guildRoutes);
// User routes
router.use("/users", userRoutes);
// Friend Message routes
router.use("/friendmessages", friendMessageRoutes);
// Guild Message routes
router.use("/guildmessages", guildMessageRoutes);
// Profile routes
router.use("/profile", profileRoutes);


module.exports = router;