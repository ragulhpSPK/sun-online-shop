import React, { useState, useEffect, useMemo } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { InboxOutlined, PlusOutlined, RedoOutlined } from "@ant-design/icons";
import FileAddOutlined from "@mui/icons-material/NoteAdd";
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
  Image,
  Upload,
  Tooltip,
} from "antd";

import "react-quill/dist/quill.snow.css";
import SearchIcon from "@mui/icons-material/Search";

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
  const [values, setValue] = useState("");
  const [imagename, setImageName] = useState([]);
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  // const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  //   ssr: false,
  //   loading: () => <p>Loading ...</p>,
  // });

  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  const { Dragger } = Upload;

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
    setImageName(value.image);
    form.setFieldsValue(value);
  };

  const handleCancel = () => {
    setAdd(false);
    setEdit(false);
    setOpen(!open);
    setUpdateId("");
    setImageName("");
    form.resetFields();
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = [
        await getAllCatagory(),
        await getAllSubCatagory(),
        await getAllproducts(),
      ];

      setCategory(get(result, "[0].data.data", []));
      setSubCategory(get(result, "[1].data.data", []));
      setProducts(get(result, "[2].data.data", []));
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
    setValue(values.toString().replace(/<[^>]+>/g, ""));
  }, [data]);

  let result = products.filter((res) => {
    console.log(res);
    return (
      res.title.toLowerCase().includes(data.toString().toLowerCase()) ||
      res.categoryname.toLowerCase().includes(data) ||
      res.subcategoryname.toLowerCase().includes(data)
    );
  });

  const handleFinish = async (value) => {
    if (updateId == "") {
      setLoading(true);
      try {
        const formdata = {
          title: value.title,
          categoryname: value.categoryname,
          subcategoryname: value.subcategoryname,
          price: value.price,
          image: imagename,
          highlight: values,
        };

        await createProducts(formdata);
        notification.success({ message: "products added successfully" });
        form.resetFields();
        fetchData();
        setLoading(false);
      } catch (err) {
        notification.success({ message: "Something went wrong" });
      }
    } else {
      try {
        const formData = {
          data: value,
          id: updateId,
          image: imagename,
        };
        await updateProducts(formData);
        notification.success({ message: "products updated successfully" });
        setOpen(false);
        setUpdateId("");
        fetchData();
        setImageName("");
        form.resetFields();
      } catch (err) {
        notification.error({ message: "Something went wrong" });
      }
    }
  };

  const deleteHandler = async (value) => {
    setLoading(true);
    try {
      await deleteProducts(value._id);
      notification.success({ message: "products deleted successfully" });
      fetchData();
      setLoading(false);
    } catch (err) {
      notification.error({ message: "Something went wrong" });
    }
  };

  const props = {
    name: "file",
    multiple: true,
    onChange(info) {
      const reader = new FileReader();
      reader.readAsDataURL(info.file.originFileObj);
      reader.onload = () => {
        setImageName(reader.result);
        // console.log(reader.result);
      };
    },
    showUploadList: true,

    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  // let encoded_image;

  // const props = {
  //   name: "file",
  //   onChange(info) {
  //     var reader = new FileReader();
  //     reader.readAsDataURL(info.file.originFileObj);
  //     reader.onload = function () {
  //       console.log(reader.result);
  //       setImageName({ ...reader.result });
  //       encoded_image = reader.result;
  //     };
  //     reader.onerror = function (error) {
  //       console.log("Error: ", error);
  //     };
  //   },
  // };

  const columns = [
    {
      title: <h1 className="!text-md">Image</h1>,
      dataIndex: "image",
      key: "image",
      render: (name) => {
        return (
          <Image src={name} className="!w-[50px] !h-[50px] rounded-box"></Image>
        );
      },
    },
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
      title: "subCategory Name",
      dataIndex: "subcategoryname",
      key: "subcategoryname",
      render: (name) => {
        return <p>{name}</p>;
      },
    },

    {
      title: "Highlights",
      dataIndex: "highlight",
      key: "highlight",
      render: (name) => {
        return <p className="w-[20vw]">{name}</p>;
      },
    },
    {
      title: "update",
      render: (value) => {
        return (
          <div className="flex gap-x-5">
            <EditNoteOutlinedIcon
              className="text-green-500 !cursor-pointer "
              onClick={() => {
                editProducts(value);
              }}
            />
          </div>
        );
      },
    },
    {
      title: "Delete",
      render: (value) => {
        return (
          <div>
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
      <div className="flex flex-col">
        <div className="relative w-[60vw] h-[10vh] pl-[20vw] mt-[10vh]">
          <input
            type="search"
            placeholder="Type here"
            className="input input-bordered  !w-[100%] "
            onChange={(e) => setData(e.target.value)}
          />
          <SearchIcon className="absolute top-[8px] right-1 text-3xl" />
        </div>
        <div className="relative flex flex-col gap-[8px]">
          <div className="w-[82vw] !bg-white" onClick={() => setOpen(!open)}>
            <FileAddOutlined className="!text-[#943074] !bg-white !text-2xl float-right mr-[1vw]" />
          </div>
          <div className="pl-10">
            <div className="overflow-x-auto ">
              <Table
                className="w-[80vw] "
                columns={columns}
                dataSource={result}
                loading={loading}
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

              <Form.Item name="highlight">
                <ReactQuill
                  theme="snow"
                  value={values}
                  onChange={(e) => setValue(e)}
                  bounds={true}
                />
              </Form.Item>

              <Form.Item>
                <Tooltip>
                  {imagename ? (
                    <div className="flex flex-row-reverse justify-start gap-x-10">
                      <Tooltip
                        onClick={() => setImageName("")}
                        title="change image"
                        className="!cursor-pointer !text-red-500"
                      >
                        <RedoOutlined />
                      </Tooltip>
                      <Image src={imagename} className=" w-[100%]" />
                    </div>
                  ) : (
                    <Dragger {...props} multiple={true}>
                      <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                      </p>
                      <p className="ant-upload-text">
                        Click or drag category image to this area to upload
                      </p>
                      <p className="ant-upload-hint">
                        Support for a multiple upload.
                      </p>
                    </Dragger>
                  )}
                </Tooltip>
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
    </div>
  );
}

export default Products;
