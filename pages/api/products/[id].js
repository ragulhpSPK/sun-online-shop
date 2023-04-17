import dbconnect from "@/connection/conn";
import Product from "../../../models/product";

export default async function productsController(req, res) {
  dbconnect();
  switch (req.method) {
    case "GET":
      try {
      } catch (err) {}
    case "Delete":
      try {
        await Product.findByIdAndDelete({ _id: req.query.id });
        res.status(200).json({ message: "Product Deleted" });
      } catch (err) {
        res.status(500).json({ message: "failed" });
      }
  }
}
