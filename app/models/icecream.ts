import mongoose from "mongoose";
import { models, model } from "mongoose";
const IceCreamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide IceCream name"],
    },
    desc: {
      type: String,
      unique: true,
      required: [true, "Please provide an description"],
    },
    price: {
      type: Number,
      require: [true, "Price needed"],
    },
    images: [
      {
        id: {
          type: String,
          required: [true, "Please provide images for your Recipe image id"],
        },
        url: {
          type: String,
          required: [true, "Please provide images for your Recipe image path"],
        },
      },
    ],
    averageRatings: {
      type: Number,
      default: 0,
    },
    ingredients: [String],
    flavors: [String],
  },
  { timestamps: true }
);

const IceCream = models?.IceCream || model("IceCream", IceCreamSchema);
export default IceCream;
