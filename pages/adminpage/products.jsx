import React, { useState, useRef } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { PlusOutlined } from "@ant-design/icons";
import AddCardIcon from "@mui/icons-material/AddCard";
import { Button, Divider, Input, Modal, Select, Space, Form } from "antd";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import FileUpload from "./imageupload";

function Products() {
  const [edit, setEdit] = useState(false);
  const [dlt, setDlt] = useState(false);
  const [add, setAdd] = useState(false);

  const QuillNoSSRWrapper = dynamic(import("react-quill"), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  });

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

  const onFinish = (values) => {
    console.log(values);
  };

  const changehandler = (value) => {
    // form.setFieldsValue({
    //   note: value,
    // });
    console.log(value);
  };

  const handleCancel = () => {
    setAdd(false);
    setEdit(false);
    console.log("clcked");
  };

  return (
    <div>
      <div className="w-[80vw] pt-10">
        <AddCardIcon
          className="float-right text-3xl"
          onClick={() => {
            setAdd(true);
          }}
        />
      </div>
      <div className="p-10">
        <div className="overflow-x-auto">
          <table className="table table-zebra w-[80vw] border">
            <thead>
              <tr>
                <th className="text-xl font-medium">Image</th>
                <th className="text-xl font-medium">Id</th>
                <th className="text-xl font-medium">Product</th>
                <th className="text-xl font-medium">Price</th>
                <th className="text-xl font-medium">Descrption</th>
                <th className="text-xl font-medium">Highlights</th>
                <th className="text-xl font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="h-32">
                <td>
                  <img src="/assets/blutooth_speaker.png" className="w-20" />
                </td>
                <td>79498....</td>
                <td>Boat Speaker 982</td>
                <td>Rs:300</td>
                <td>Most Quality Products and the sounds so good to hear...</td>
                <td>10mm,Dual Steroble speakers,base 3.5mm</td>
                <td className="flex justify-between items-center  h-32">
                  <label
                    htmlFor="my-modal-3"
                    className="rounded-md h-10 w-10 bg-[rgb(0,0,128)] text-white border-none text-center pt-1"
                  >
                    <EditIcon
                      onClick={() => {
                        setEdit(true);
                      }}
                    />
                  </label>
                  <a
                    href="#my-modal-2"
                    className="rounded-md h-10 w-10 bg-[rgb(0,0,128)] text-white border-none text-center pt-1"
                    onClick={() => {
                      setDlt(true);
                    }}
                  >
                    <DeleteIcon />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Modal width={600} open={edit || add} onCancel={handleCancel}>
        <Form
          className="flex flex-col gap-8 relative"
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
        >
          {edit ? (
            <h1 className="text-4xl">Update Products</h1>
          ) : (
            <h1 className="text-4xl">Add Products</h1>
          )}
          <div className="flex flex-col gap-8">
            <input
              type="text"
              className="border-2 border-[rgb(0,0,128)] h-12 rounded-md pl-2 text-2xl focus:bg-[rgb(0,0,128)] focus:text-white"
              placeholder="Product"
            />
            <input
              type="text"
              className="border-2 border-[rgb(0,0,128)] h-12 rounded-md pl-2 text-2xl focus:bg-[rgb(0,0,128)] focus:text-white"
              placeholder="Price"
            />
          </div>

          <QuillNoSSRWrapper
            modules={modules}
            formats={formats}
            theme="snow"
            onChange={changehandler}
          />

          <div>
            <FileUpload />
          </div>

          {/* <Form.Item
            name="note"
            label="Product Details"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input className="focus:bg-[rgb(0,0,128)] border-2 text-2xl focus:text-white border-[rgb(0,0,128)] hover:border-[rgb(0,0,128)]" />
          </Form.Item> */}
          {/* <Button
            type="link"
            className="text-black border border-slate-200 w-[90px] h-[35px] absolute bottom-[-45px] right-40"
            htmlType="button"
          >
            Update
          </Button> */}
        </Form>
      </Modal>
      <div>
        {dlt ? (
          <div className="modal" id="my-modal-2">
            <div className="modal-box">
              <h3 className="text-2xl">
                Are you sure want to delete this product
              </h3>
              <div className="modal-action">
                <a href="#" className="btn bg-[rgb(0,0,128)]">
                  Yay!
                </a>
                <a
                  href="#"
                  className="btn bg-[rgb(0,0,128)]"
                  onClick={() => setDlt(false)}
                >
                  no
                </a>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Products;
