import mongoose from "mongoose";

const cartSchema =
  ({
    image: {
      type: string,
      required: true,
    },

    name: {
      type: string,
      required: true,
    },
    total: {
      type: number,
      required: true,
    },
    quantity: {
      type: number,
      required: true,
    },
  },
  { timestamps: true });

export default mongoose.model.cart || mongoose.model("cart", cartSchema);
