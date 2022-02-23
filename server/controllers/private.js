// const { getPrivateData } = require("../controllers/private");
// const { protect } = require("../middleware/auth");

// const private = (app) => {
//   app.get("/api/profile/private", (protect, getPrivateData), (_, res) => {
//     res.status(500);
//   });
// };
// module.exports = private;

exports.getPrivateData = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "You got access to the private data in this route",
  });
}