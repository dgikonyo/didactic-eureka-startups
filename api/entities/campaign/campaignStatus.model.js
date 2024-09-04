const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uuid = require("uuid")

const campaignStatusSchema = new Schema(
  {
    statusName: {
      type: String,
      unique: true,
      lowercase: true,
      required: [true, "Campaign status name not provided!"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CampaignStatus", campaignStatusSchema);
