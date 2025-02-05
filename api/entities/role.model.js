import { mongoose, Schema } from 'mongoose';

const roleSchema = new Schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    name: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Roles', roleSchema);
