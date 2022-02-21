const { getPrivateData } = require("../controllers/private");
const { protect } = require("../middleware/protect");

const private = (app) => {
  app.get("/api/profile/private", (protect, getPrivateData), (_, res) => {
    res.status(500);
  });
};
module.exports = private;