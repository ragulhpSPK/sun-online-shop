import axios from "axios";

// Categories starting
export const createCatagory = (formData) => {
  return axios.post("/api/catagory", formData);
};

export const getAllCatagory = () => {
  return axios.get("/api/catagory");
};

export const updateCatagory = (formData) => {
  return axios.put("/api/catagory", formData);
};

export const deleteCatagory = (formData) => {
  return axios.delete(`/api/catagory/${formData}`);
};
// categories ended...

//SubCategory Starting
export const createSubCatagory = (formData) => {
  console.log(formData);
  return axios.post("/api/subcategory", formData);
};
export const getAllSubCatagory = () => {
  return axios.get("/api/subcategory");
};

export const updateSubCategory = (formData) => {
  return axios.put("/api/subcategory", formData);
};

export const deleteSubCategory = (formData) => {
  return axios.delete(`/api/subcategory/${formData}`);
};
//SubCategory ended...

//products Starting...
export const createProducts = (formData) => {
  console.log("sdjsif", formData);
  return axios.post("/api/products", formData);
};

export const getAllproducts = () => {
  return axios.get("/api/products");
};

export const updateProducts = (formData) => {
  return axios.put("/api/products", formData);
};

export const deleteProducts = (formData) => {
  return axios.delete(`/api/products/${formData}`);
};
//product Ended...
