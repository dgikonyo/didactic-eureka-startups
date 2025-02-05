import { mongoose, Schema } from 'mongoose';

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

export default mongoose.model('Country', countrySchema);
