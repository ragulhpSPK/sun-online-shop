import React, { useState } from "react";
import Sidenavbar from "../Sidenavbar";
import { Modal, Table, Upload, Form, Input, Select, Option } from "antd";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
import { PlusOutlined } from "@ant-design/icons";

function Banner() {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([
    {
      uid: "-5",
      name: "image.png",
      status: "done",
    },
  ]);

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

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

    multiple: true,
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "IMAGE",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Action",
      render: (value) => {
        return (
          <div className="flex gap-x-5">
            <EditNoteOutlinedIcon className="text-green-500 !cursor-pointer" />
            <DeleteOutlineOutlinedIcon className="text-red-500 !cursor-pointer" />
          </div>
        );
      },
    },
  ];
  return (
    <div className="flex pt-5">
      <div>
        <Sidenavbar />
      </div>
      <div className="w-[80vw] pl-5 relative left-48 ">
        <div onClick={() => setOpen(!open)}>
          <AddCardOutlinedIcon className="float-right text-green-600 mr-3 cursor-pointer" />
        </div>

        <Table className="pt-4" columns={columns} />
      </div>

      <Modal open={open} onCancel={() => setOpen(!open)}>
        <Form>
          <Form.Item name="image" rules={[{ required: true }]}>
            <Select size="large" placeholder="Select Image here">
              <Option>hi</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              {...props}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Banner;
