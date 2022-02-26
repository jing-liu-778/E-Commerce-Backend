const router = require("express").Router();
const apiRoutes = require("./api");
// set api route
router.use("/api", apiRoutes);
// set wrong route
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;
