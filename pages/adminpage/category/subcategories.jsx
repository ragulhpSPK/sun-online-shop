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

  const fetchData = async () => {
    try {
      const result = [await getAllCatagory(), await getAllSubCatagory()];
      setcategoryData(get(result, "[0].data.data", []));
      setSubCat(get(result, "[1].data.data", []));
      form.resetFields();
    } catch (err) {
      console.log(err);
    }
  };

  const handleFinish = async (value) => {
    if (update === "") {
      try {
        await createSubCatagory(value);
        fetchData();
        notification.success({ message: "subcategories added successfully" });
        form.resetFields();
      } catch (err) {
        notification.error({ message: "something went wrong" });
      }
    } else {
      try {
        const formData = {
          data: value,
          id: update,
        };

        await updateSubCategory(formData);
        notification.success({ message: " successfully updated" });
        form.resetFields();
        setOpen(false);
        fetchData();
      } catch (err) {
        notification.error({ message: "Something went wrong" });
        setOpen(false);
      }
    }
  };

  const handleDelete = async (value) => {
    try {
      await deleteSubCategory(value._id);
      fetchData();
      notification.success({ message: "Subcategory deleted" });
    } catch (err) {
      notification.error({
        message: "something went wrong",
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (value) => {
    console.log(value);
    setOpen(true);
    setUpdate(value._id);
    form.setFieldsValue(value);
  };

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
          <Form onFinish={handleFinish} form={form}>
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
