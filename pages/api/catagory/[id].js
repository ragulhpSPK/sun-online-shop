import dbconnect from "../../../connection/conn";
import Catagory from "../../../models/catagories";

export default async function catagoryController(req, res) {
  dbconnect();
  switch (req.method) {
    case "GET":
      break;
    case "DELETE":
      try {
        await Catagory.findByIdAndDelete({ _id: req.query.id });
        return res.status(200).send({ message: "deleted" });
      } catch (err) {
        return res.status(500).send({ message: "failed" });
      }
      break;
  }
}