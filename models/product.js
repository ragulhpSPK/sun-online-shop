import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    hightlights: {
      type: String,
      required: true,
    },
    category: {
      title: String,
      required: true,
    },
    subcategory: {
      title: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model.product ||
  mongoose.model("product", productSchema);
