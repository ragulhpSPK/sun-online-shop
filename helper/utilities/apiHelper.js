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
// categories ending

//SubCategory Starting
export const createSubCatagory = (formData) => {
  return axios.post("/api/subcategory", formData);
};
export const getAllSubCatagory = () => {
  return axios.get("/api/subcategory");
};

export const updateSubCategory = (formData) => {
  return axios.put("/api/subcategory", formData);
};


export const deleteSubCategory = (formData) => {
  return axios.delete(`/api/subCategory${formData}`)
}