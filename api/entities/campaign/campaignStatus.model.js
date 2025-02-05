import { mongoose, Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';

const campaignStatusSchema = new Schema(
  {
    id: {
      type: String,
      default: uuid(),
      unique: true,
    },
    statusName: {
      type: String,
      unique: true,
      lowercase: true,
      required: [true, 'Campaign status name not provided!'],
    },
  },
  { timestamps: true }
);

export default mongoose.model('CampaignStatus', campaignStatusSchema);
