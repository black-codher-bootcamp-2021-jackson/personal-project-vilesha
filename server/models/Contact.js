const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactSchema = new Schema({
  first_name: String,
  last_name: String,
  address: String,
  date_of_birth: Date,
  how_we_met: String,
  gift_ideas: [String],
  notes: String,
});

mongoose.model("contacts", contactSchema);

module.exports = contactSchema
