import {
  Collapse,
  Form,
  Modal,
  Table,
  Input,
  Button,
  notification,
} from "antd";
import React, { useEffect } from "react";
import Sidenavbar from "../Sidenavbar";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {
  createCatagory,
  getAllCatagory,
  updateCatagory,
  deleteCatagory,
} from "../../../helper/utilities/apiHelper";
import { get } from "lodash";

const { Panel } = Collapse;

const Categories = () => {
  const [form] = Form.useForm();
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [updateId, setUpdateId] = React.useState("");

  const getCategory = async () => {
    try {
      const res = await getAllCatagory();
      setData(get(res, "data.data", []));
    } catch (err) {
      notification.error({
        message: "something went wrong",
      });
      console.log(err);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const handleFinish = async (values) => {
    if (updateId === "") {
      try {
        await createCatagory(values);
        notification.success({ message: "Category Added successfully" });
        form.resetFields();
        setOpen(false);
        getCategory();
      } catch (err) {
        setOpen(false);
        notification.success({ message: "Somthing went wrong" });
      }
    } else {
      try {
        const formData = {
          data: values,
          id: updateId,
        };
        await updateCatagory(formData);
        notification.success({ message: "Category Updated successfully" });
        form.resetFields();
        setOpen(false);
        setUpdateId("");
        getCategory();
      } catch (err) {
        setOpen(false);
        notification.success({ message: "Somthing went wrong" });
      }
    }
  };

  const handleEdit = (value) => {
    setUpdateId(value._id);
    setOpen(true);
    form.setFieldsValue(value);
  };

  const handleDelete = async (value) => {
    try {
      await deleteCatagory(value._id);
      notification.success({ message: "Category Deleted successfully" });
      getCategory();
    } catch (err) {
      notification.error({
        message: "something went wrong",
      });
      console.log(err);
    }
  };

  const columns = [
    {
      title: "Category Name",
      dataIndex: "name",
      key: "name",
      render: (name) => {
        return <h1 className="text-lg">{name}</h1>;
      },
    },
    {
      title: "Action",
      render: (values) => {
        return (
          <div className="flex gap-x-5">
            <EditNoteOutlinedIcon
              className="!text-md text-green-500 cursor-pointer"
              onClick={() => handleEdit(values)}
            />
            <DeleteOutlineOutlinedIcon
              className="!text-md text-red-500 cursor-pointer"
              onClick={() => handleDelete(values)}
            />
          </div>
        );
      },
    },
  ];
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col gap-y-10 h-[80vh]">
          <div
            className="p-2 !bg-white !shadow-inner cursor-pointer self-end pt-[2vh]"
            onClick={() => {
              setOpen(true);
            }}
          >
            <AddOutlinedIcon className="!text-green-600" />
          </div>
          <div className="p-2">
            <Table className="w-[80vw]" dataSource={data} columns={columns} />
          </div>
        </div>
      </div>
      <Modal open={open} destroyOnClose footer={false}>
        <Form onFinish={handleFinish} form={form}>
          <div className="flex flex-col gap-y-2 items-center">
            <Form.Item
              className="w-[100%]"
              rules={[
                {
                  required: true,
                  message: "Please Enter Category Name!",
                },
              ]}
              name="name"
            >
              <Input size="large" placeholder="Category Name" />
            </Form.Item>
            <div className="flex flex-row items-end gap-x-2 self-end">
              <Button type="primary" onClick={() => setOpen(!open)}>
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                {updateId === "" ? "Save" : "Update"}
              </Button>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default Categories;
