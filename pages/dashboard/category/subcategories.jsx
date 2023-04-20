import {
  Input,
  Modal,
  Table,
  Form,
  Button,
  Select,
  notification,
  Collapse,
} from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
const { Panel } = Collapse;
import React, { useEffect, useState } from "react";
import { FileAddOutlined } from "@ant-design/icons";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
import {
  createSubCatagory,
  getAllCatagory,
  getAllSubCatagory,
  updateSubCategory,
  deleteSubCategory,
} from "@/helper/utilities/apiHelper";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { get } from "lodash";

const Subcategories = () => {
  const [open, setOpen] = React.useState(false);
  const [form] = Form.useForm();
  const { Option } = Select;
  const [categoryData, setcategoryData] = useState([]);
  const [selectedcategorieName, selectedSetcategorieName] = useState("");
  const [subCat, setSubCat] = useState([]);
  const [update, setUpdate] = useState([]);

  const fetchData = async () => {
    try {
      const result = [await getAllCatagory(), await getAllSubCatagory()];
      setcategoryData(get(result, "[0].data.data", []));
      setSubCat(get(result, "[1].data.data", []));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFinish = async (value) => {
    if (update === "") {
      try {
        const formData = {
          categoryId: value.categoryId,
          subcategoryname: value.subcategoryname,
          categoryname: categoryData.filter((category) => {
            return category._id === selectedcategorieName;
          })[0].name,
        };
        await createSubCatagory(formData);
        notification.success({ message: "Subcategory added successfully" });
        fetchData();
        setOpen(false);
        form.resetFields();
      } catch (err) {
        notification.error({ message: "something went wrong" });
      }
    } else {
      try {
        const formdata = {
          data: {
            categoryId: value.categoryId,
            subcategoryname: value.subcategoryname,
            categoryname: categoryData.filter((category) => {
              return category._id === selectedcategorieName;
            })[0].name,
          },
          id: update,
        };
        await updateSubCategory(formdata);
        form.resetFields();
        fetchData();
        setOpen(false);
        notification.success({ message: "Subcategory updated successfully" });
      } catch (err) {
        notification.error({ message: "something went wrong" });
      }
    }
  };

  const handleEdit = (value) => {
    console.log(value);
    setOpen(true);
    setUpdate(value._id);
    form.setFieldsValue(value);
  };
  const handleDelete = async (value) => {
    try {
      await deleteSubCategory(value._id);

      notification.success({ message: "Subcategory deleted successfully" });
      fetchData();
    } catch (err) {
      notification.error({ message: "something went wrong" });
    }
  };
  const columns = [
    {
      title: <h1 className="!text-md">Subcategory Name</h1>,
      dataIndex: "subcategoryname",
      key: "subcategoryname",
      align: "start",

      render: (name) => {
        return <h1 className="text-md">{name}</h1>;
      },
      width: 200,
    },
    {
      title: <h1 className="!text-md">Category Name</h1>,
      dataIndex: "categoryname",
      key: "categoryname",
      align: "start",

      render: (name) => {
        return <h1 className="text-md">{name}</h1>;
      },
      width: 200,
    },
    {
      title: <h1 className="!text-md">Update</h1>,
      align: "end",
      width: 100,
      render: (values) => {
        return (
          <EditNoteOutlinedIcon
            className="text-green-500 !cursor-pointer"
            onClick={() => handleEdit(values)}
          />
        );
      },
    },
    {
      width: 100,
      title: <h1 className="!text-md">Delete</h1>,
      align: "end",
      render: (values) => {
        return (
          <DeleteOutlineOutlinedIcon
            className="text-red-500 !cursor-pointer"
            onClick={() => handleDelete(values)}
          />
        );
      },
    },
  ];

  return (
    <Collapse
      defaultActiveKey={["1"]}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      collapsible="icon"
    >
      <Panel
        header={<h1 className="text-md">Sub Category</h1>}
        extra={
          <div
            className=" !bg-white  cursor-pointer"
            onClick={() => {
              setOpen(true);
              setUpdate("");
            }}
          >
            <FileAddOutlined className="!text-[#943074] !text-xl" />
          </div>
        }
        key="1"
        className="!w-[42vw]"
      >
        <div className="flex flex-col ">
          <div className="flex flex-col gap-y-2 ">
            <div>
              <Table dataSource={subCat} columns={columns} size="middle" />
            </div>
            <Modal footer={false} open={open} destroyOnClose>
              <Form form={form} onFinish={handleFinish}>
                <div className="flex flex-col gap-y-2 items-center">
                  <Form.Item
                    className="!w-[100%]"
                    rules={[
                      {
                        required: true,
                        message: "please Enter SubCategory",
                      },
                    ]}
                    name="subcategoryname"
                  >
                    <Input size="large" placeholder="Enter SubCategory Name" />
                  </Form.Item>
                  <Form.Item
                    className="!w-[100%]"
                    name="categoryId"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      placeholder="Select Category"
                      size="large"
                      onChange={(e) => {
                        selectedSetcategorieName(e);
                      }}
                    >
                      {categoryData.map((res) => {
                        return <Option value={res._id}>{res.name}</Option>;
                      })}
                    </Select>
                  </Form.Item>

                  <div className="flex gap-5 justify-end self-end">
                    <Button
                      type="primary"
                      onClick={() => {
                        form.resetFields();
                        setOpen(!open);
                      }}
                    >
                      Cancel
                    </Button>
                    <Button type="primary" htmlType="submit">
                      {update === "" ? "Save" : "Update"}
                    </Button>
                  </div>
                </div>
              </Form>
            </Modal>
          </div>
        </div>
      </Panel>
    </Collapse>
  );
};

export default Subcategories;
