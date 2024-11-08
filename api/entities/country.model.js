const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const countrySchema = new Schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    country_name: {
      type: String,
      unique: true,
    },
    country_initial: {
      type: String,
      unique: true,
    },
    country_currency: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Country", countrySchema);
