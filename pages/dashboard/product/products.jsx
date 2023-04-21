import React, { useState, useEffect, useMemo } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { PlusOutlined } from "@ant-design/icons";
import AddOutlinedIcon from "@mui/icons-material/AddCard";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {
  Button,
  Divider,
  Input,
  Modal,
  Select,
  Space,
  Form,
  Table,
  notification,
  message,
} from "antd";

import "react-quill/dist/quill.snow.css";
import FileUpload from "../imageupload";
import Sidenavbar from "../shared/Sidenavbar";
import {
  createProducts,
  getAllCatagory,
  getAllSubCatagory,
  getAllproducts,
  updateProducts,
  deleteProducts,
} from "../../../helper/utilities/apiHelper";
import { get } from "lodash";
import dynamic from "next/dynamic";

function Products() {
  const [edit, setEdit] = useState(false);
  const [dlt, setDlt] = useState(false);
  const [add, setAdd] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const { Option } = Select;
  const [updateId, setUpdateId] = useState([]);
  const [value, setValue] = useState("");

  // const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  //   ssr: false,
  //   loading: () => <p>Loading ...</p>,
  // });

  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  const [form] = Form.useForm();

  const editProducts = (value) => {
    setUpdateId(value._id);
    setOpen(!open);
    form.setFieldsValue(value);
  };

  const handleCancel = () => {
    setAdd(false);
    setEdit(false);
    setOpen(!open);
    setUpdateId("");
  };

  const fetchData = async () => {
    try {
      const result = [
        await getAllCatagory(),
        await getAllSubCatagory(),
        await getAllproducts(),
      ];

      setCategory(get(result, "[0].data.data", []));
      setSubCategory(get(result, "[1].data.data", []));
      setProducts(get(result, "[2].data.data", []));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFinish = async (value) => {
    console.log("sighhhhhhhhhh", value);

    if (updateId == "") {
      try {
        const formdata = {
          data: value,
        };
        await createProducts(formdata);
        notification.success({ message: "products added successfully" });
        fetchData();
        form.resetFields();
      } catch (err) {
        notification.success({ message: "Something went wrong" });
      }
    } else {
      try {
        const formData = {
          data: value,
          id: updateId,
        };
        await updateProducts(formData);
        notification.success({ message: "products updated successfully" });
        setOpen(false);
        setUpdateId("");
        fetchData();
        form.resetFields();
      } catch (err) {
        notification.error({ message: "Something went wrong" });
      }
    }
  };

  const deleteHandler = async (value) => {
    try {
      await deleteProducts(value._id);
      notification.success({ message: "products deleted successfully" });
      fetchData();
    } catch (err) {
      notification.error({ message: "Something went wrong" });
    }
  };

  console.log(value);

  const columns = [
    {
      title: "title",
      dataIndex: "title",
      key: "title",
      render: (name) => {
        return <h1>{name}</h1>;
      },
    },
    {
      title: "price",
      dataIndex: "price",
      key: "price",
      render: (name) => {
        return <p>{name}</p>;
      },
    },
    {
      title: "Category Name",
      dataIndex: "categoryname",
      key: "categoryname",
      render: (name) => {
        return <p>{name}</p>;
      },
    },

    {
      title: "Highlights",
      dataIndex: "highlight",
      key: "highlight",
      render: (name) => {
        return <p>{name}</p>;
      },
    },
    {
      title: "Action",
      render: (value) => {
        return (
          <div className="flex gap-x-5">
            <EditNoteOutlinedIcon
              className="text-green-500 !cursor-pointer "
              onClick={() => {
                editProducts(value);
              }}
            />
            <DeleteOutlineOutlinedIcon
              className="text-red-500 !cursor-pointer"
              onClick={() => deleteHandler(value)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="flex">
      <div>
        <Sidenavbar />
      </div>
      <div className="relative  ">
        <div className="w-[82vw] pt-10" onClick={() => setOpen(!open)}>
          <AddOutlinedIcon className="!text-green-600 float-right mr-2" />
        </div>
        <div className="p-10">
          <div className="overflow-x-auto ">
            <Table
              className="w-[80vw]"
              columns={columns}
              dataSource={products}
            />
          </div>
        </div>
        <Modal
          width={600}
          open={open}
          destroyOnClose
          okButtonProps={{
            style: {
              display: "none",
            },
          }}
          cancelButtonProps={{
            style: {
              display: "none",
            },
          }}
        >
          <Form
            className="flex flex-col gap-8 relative"
            form={form}
            onFinish={handleFinish}
            style={{
              maxWidth: 600,
            }}
          >
            <Form.Item
              name="title"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input size="large" placeholder="Enter product Name" />
            </Form.Item>
            <Form.Item
              name="price"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input size="large" placeholder="Enter product Price" />
            </Form.Item>
            <Form.Item
              name="categoryname"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select placeholder="Select Category" size="large">
                {category.map((res) => {
                  return (
                    <Option value={res.name} key={res.id}>
                      {res.name}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item
              name="subcategoryname"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select placeholder="Select SubCategory" size="large">
                {subCategory.map((res) => {
                  return (
                    <Option value={res.subcategoryname} key={res.id}>
                      {res.subcategoryname}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>

            <Form.Item name="highlights">
              <ReactQuill theme="snow" value={value} onChange={setValue} />;
            </Form.Item>

            <div className="flex gap-5 justify-end ">
              <Button
                type="Primary"
                className="bg-[--third-color] shadow-xl  !text-black"
                onClick={handleCancel}
              >
                Cancel
              </Button>
              <Button
                type="Primary"
                className="bg-[--third-color] shadow-xl !text-black"
                htmlType="submit"
              >
                {updateId == "" ? "Save" : "Update"}
              </Button>
            </div>
          </Form>
        </Modal>
      </div>
    </div>
  );
}

export default Products;
