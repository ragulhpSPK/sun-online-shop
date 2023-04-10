import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: string,
      required: true,
    },
    image: {
      type: string,
      required: true,
    },
    price: {
      type: number,
      required: true,
    },
    description: {
      type: string,
      required: true,
    },
    hightlights: {
      type: string,
      required: true,
    },
    category: {
      title: string,
      required: true,
    },
    subcategory: {
      title: string,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model.product ||
  mongoose.model("product", productSchema);
