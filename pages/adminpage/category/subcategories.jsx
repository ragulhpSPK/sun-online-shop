import { Input, Modal, Table, Form, Button, Select, notification } from "antd";
import React, { useEffect, useState } from "react";
import AddOutlinedIcon from "@mui/icons-material/Add";
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
  const [subCat, setSubCat] = useState([]);
  const [update, setUpdate] = useState([]);

  // const dataSource = [
  //   {
  //     key: "1",
  //     name: "Mike",
  //     age: 32,
  //     address: "10 Downing Street",
  //   },
  //   {
  //     key: "2",
  //     name: "John",
  //     age: 42,
  //     address: "10 Downing Street",
  //   },
  // ];

  const fetchData = async () => {
    try {
      const result = [await getAllCatagory(), await getAllSubCatagory()];
      setcategoryData(get(result, "[0].data.data", []));
      setSubCat(get(result, "[1].data.data", []));
      fetchData();
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
        await createSubCatagory(value);
        notification.success({ message: "Subcategory added successfully" });
        fetchData();
      } catch (err) {
        notification.error({ message: "something went wrong" });
      }
    } else {
      try {
        const formdata = {
          data: value,
          id: update,
        };
        await updateSubCategory(formdata);
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
      title: "Subcategory Name",
      dataIndex: "subcategoryname",
      key: "subcategoryname",
    },
    {
      title: "Category Name",
      dataIndex: "categoryname",
      key: "categoryname",
    },
    {
      title: "Action",
      render: (value) => {
        return (
          <div className="flex gap-x-5">
            <EditNoteOutlinedIcon
              className="text-green-500 !cursor-pointer"
              onClick={() => handleEdit(value)}
            />
            <DeleteOutlineOutlinedIcon
              className="text-red-500 !cursor-pointer"
              onClick={() => handleDelete(value)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="flex flex-col w-[80vw]">
      <div className="flex flex-col gap-y-5 pl-0">
        <div
          className="p-2 !bg-white !shadow-inner cursor-pointer self-end  pt-[2vh]"
          onClick={() => {
            setOpen(true);
            setUpdate("");
          }}
        >
          <AddOutlinedIcon className="!text-green-600 " />
        </div>
        <div>
          <Table dataSource={subCat} columns={columns} className="w-[100vw]" />
        </div>
        <Modal footer={false} open={open} destroyOnClose>
          <Form form={form} onFinish={handleFinish}>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "please Enter SubCategory",
                },
              ]}
              name="subcategoryname"
              className="flex flex-col"
            >
              <Input size="large" placeholder="Enter SubCategory Name" />
            </Form.Item>
            <Form.Item
              name="categoryname"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select placeholder="Select Category">
                {categoryData.map((res) => {
                  return <Option value={res.name}>{res.name}</Option>;
                })}
              </Select>
            </Form.Item>

            <div className="flex gap-5 justify-end ">
              <Button
                type="Primary"
                className="bg-white shadow-xl hover:bg-blue-500 !text-black"
                onClick={() => setOpen(!open)}
              >
                Cancel
              </Button>
              <Button
                type="Primary"
                className="bg-white shadow-xl hover:bg-blue-500 !text-black"
                htmlType="submit"
              >
                {update === "" ? "Save" : "Update"}
              </Button>
            </div>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default Subcategories;
