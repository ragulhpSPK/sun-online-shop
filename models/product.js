import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    price: {
      type: Number,
    },

    categoryname: {
      title: String,
    },
    subcategoryname: {
      title: String,
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose?.models?.product || mongoose.model("product", productSchema);
