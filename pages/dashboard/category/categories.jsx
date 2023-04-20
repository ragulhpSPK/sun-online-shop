import {
  Collapse,
  Form,
  Modal,
  Table,
  Input,
  Button,
  notification,
  Upload,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
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

// const getBase64 = (file) =>
//   new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(console.log(reader.result));
//     reader.onerror = (error) => reject(error);
//   });

const changeHanlder = (e) => {
  console.log(e);
  var reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]);
  reader.onload = () => {
    console.log(reader.result);
  };
  reader.onerror = () => {
    console.log(reader.result);
  };
};

const Categories = () => {
  const [form] = Form.useForm();
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [updateId, setUpdateId] = React.useState("");
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = React.useState([
    {
      uid: "-4",
      name: "image.png",
      status: "done",
    },
  ]);

  const getCategory = async () => {
    try {
      const res = await getAllCatagory();
      setData(get(res, "data.data", []));
    } catch (err) {
      notification.error({
        message: "something went wrong",
      });
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
        notification.error({ message: "Somthing went wrong" });
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

  // const handleCancel = () => setPreviewOpen(false);
  // const handlePreview = async (file) => {
  //   if (!file.url && !file.preview) {
  //     file.preview = await getBase64(file.originFileObj);
  //   }
  //   setPreviewImage(file.url || file.preview);
  //   setPreviewOpen(true);
  //   setPreviewTitle(
  //     file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
  //   );
  // };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  const props = {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange: handleChange,
    multiple: true,
  };
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex flex-col gap-y-2 w-[80vw]">
          <div
            className="p-2 !bg-white  cursor-pointer self-end pt-[1px] mr-2"
            onClick={() => {
              setOpen(true);
            }}
          >
            <AddCardOutlinedIcon className="!text-green-600" />
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
              <>
                <Upload
                  fileList={fileList}
                  listType="picture-card"
                  // onPreview={handlePreview}
                  onChange={changeHanlder}
                  {...props}
                >
                  {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                <Modal
                  open={previewOpen}
                  // title={previewTitle}
                  footer={null}
                  // onCancel={handleCancel}
                >
                  <img
                    alt="example"
                    style={{
                      width: "100%",
                    }}
                    // src={previewImage}
                  />
                </Modal>
              </>
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
