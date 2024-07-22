const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uuid = require("uuid")

const campaignStatusSchema = new Schema(
  {
    id: {
      type: String,
      default: uuid.v4(),
      unique: true,
    },
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
