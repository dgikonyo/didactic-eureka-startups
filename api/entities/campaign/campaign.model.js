import { mongoose, Schema } from 'mongoose';
import validator from 'validator';
import { v4 as uuid } from 'uuid';

const campaignSchema = new Schema(
  {
    id: {
      type: String,
      default: uuid(),
      unique: true,
    },
    title: {
      type: String,
      trim: true,
      required: [true, 'Campaign title must be provided'],
      minlength: 3,
    },
    tagLine: {
      type: String,
      trim: true,
      minlength: 3,
    },
    startDate: {
      type: Date,
      required: [true, 'Campaign start date must be provided'],
    },
    endDate: {
      type: Date,
      required: [true, 'Campaign end date must be provided'],
    },
    duration: {
      type: Number,
      required: [true, 'Campaign duration must be provided'],
    },
    targetAmount: {
      type: Number,
      required: [true, 'Campaign target amount must be provided'],
    },
    videoUrl: {
      type: String,
      minlength: 3,
    },
    videoOverlayUrl: {
      type: String,
      minlength: 3,
    },
    story: {
      type: String,
      required: [true, 'Campaign story must be provided'],
      minlength: 3,
    },
    supportEmail: {
      type: String,
      lowercase: true,
      trim: true,
      validate: [validator.isEmail, 'Please provide a valid email.'],
    },
    fundingModel: {
      type: String,
      required: [true, 'Funding model must be provided'],
    },
    user_id: {
      type: String,
      required: true,
    },
    campaignStatus: {
      type: String,
      required: true,
    },
    countryId: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Campaign', campaignSchema);
