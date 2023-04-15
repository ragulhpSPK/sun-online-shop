import dbconnect from "@/connection/conn";
import product from "@/models/product";

export default async function productController(req, res) {
  dbconnect();
  switch (req.method) {
    case "GET":
      try {
      } catch (err) {}
      break;
    case "POST":
      try {
        const product = new product(...req.body);
        const result = await product.save();
        res.status(200).send({ message: "success" });
      } catch (err) {
        res.status(400).send({ message: "failed" });
      }
  }
}
