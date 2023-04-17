import dbconnect from "@/connection/conn";
import Product from "@/models/product";

export default async function productController(req, res) {
  dbconnect();
  switch (req.method) {
    case "GET":
      try {
        const products = await Product.find();
        res.status(200).send({ data: products });
      } catch (err) {
        res.status(500).send({ message: "failed" });
      }
      break;
    case "POST":
      try {
        console.log("BODY", req.body);
        const product = new Product({ ...req.body });
        console.log("lklj", product);
        const result = await product.save();

        res.status(200).send({ data: result });
      } catch (err) {
        res.status(400).send({ message: "failed" });
      }

    case "PUT":
      try {
        const product = await Product.findByIdAndUpdate(
          { _id: req.body.id },
          req.body.data
        );
        res.status(200).send({ data: product });
      } catch (err) {
        res.status(400).send({ message: "failed" });
      }
  }
}
