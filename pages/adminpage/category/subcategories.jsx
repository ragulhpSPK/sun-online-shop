import { Input, Modal, Table, Form, Button } from "antd";
import React from "react";
import AddOutlinedIcon from "@mui/icons-material/Add";

const Subcategories = () => {
  const [open, setOpen] = React.useState(false);
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  const cancelHandler = () => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-col w-[80vw]">
      <div className="flex flex-col gap-y-5 pl-10">
        <div
          className="p-2 !bg-white !shadow-inner cursor-pointer self-end  pt-[2vh]"
          onClick={() => {
            setOpen(true);
          }}
        >
          <AddOutlinedIcon className="!text-green-600 " />
        </div>
        <div>
          <Table
            dataSource={dataSource}
            columns={columns}
            className="w-[100vw]"
          />
        </div>
        <Modal footer={false} open={open} onCancel={cancelHandler}>
          <Form>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "please Enter SubCategory",
                },
              ]}
            >
              <Input size="large" placeholder="Enter SubCategory" />
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
                className="bg-white shadow-xl"
                htmlType="submit"
              >
                Save
              </Button>
            </div>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default Subcategories;
