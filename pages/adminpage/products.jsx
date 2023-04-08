import React, { useState, useRef } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "../../styles/Home.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Input, Select, Space } from "antd";
// import { useEditor, EditorContent } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";

let index = 0;

function Products() {
  const [edit, setEdit] = useState(false);
  const [dlt, setDlt] = useState(false);
  const [items, setItems] = useState([]);
  const [name, setName] = useState();
  const inputRef = useRef(null);

  // const editor = useEditor({
  //   extensions: [StarterKit],
  //   content: "<p>Hello World! 🌎️</p>",
  // });

  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, name || `New item ${index++}`]);
    setName();
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  return (
    <div>
      <div className="p-10">
        <div className="overflow-x-auto">
          <table className="table table-zebra w-[80vw] border">
            {/* head */}
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
                <td>7949827332798</td>
                <td>Boat Speaker 982</td>
                <td>Rs:300</td>
                <td>Most Quality Products and the sounds so good to hear...</td>
                <td>10mm,Dual Steroble speakers,base 3.5mm</td>
                <td className="flex justify-between items-center  h-32">
                  <label
                    htmlFor="my-modal-3"
                    className="rounded-md h-10 w-10 bg-[#82237c] border-none text-center pt-1"
                  >
                    <EditIcon
                      onClick={() => {
                        setEdit(true);
                      }}
                    />
                  </label>
                  <a
                    href="#my-modal-2"
                    className="rounded-md h-10 w-10 bg-[#82237c] border-none text-center pt-1"
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

      {edit ? (
        <div>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal ">
            <form id={styles.form} className="h-[450px] w-[25vw] relative">
              Sign Up
              <input type="text" class="input" placeholder="Product" />
              <input type="text" class="input" placeholder="Price" />
              <input type="text" class="input" placeholder="Description" />
              <Select
                className="bg-black"
                onChange={(e) => {
                  console.log(e);
                }}
                mode="multiple"
                dropdownRender={(menu) => (
                  <>
                    {" "}
                    {menu}
                    <Divider
                      style={{
                        margin: "8px 0",
                      }}
                    />
                    <Space
                      style={{
                        padding: "0 8px 4px",
                      }}
                    >
                      <Input
                        ref={inputRef}
                        value={name}
                        onChange={onNameChange}
                      />
                      <Button
                        type="text"
                        icon={<PlusOutlined />}
                        onClick={addItem}
                      >
                        Add item
                      </Button>
                    </Space>
                  </>
                )}
                options={items.map((item) => ({
                  label: item,
                  value: item,
                }))}
              ></Select>
              <button>Update</button>
              <CloseIcon
                className="text-black  absolute top-0 right-0 m-2 w-10"
                onClick={() => setEdit(false)}
              />
            </form>
          </div>
        </div>
      ) : (
        ""
      )}

      <div>
        {" "}
        {dlt ? (
          <div className="modal" id="my-modal-2">
            <div className="modal-box">
              <h3 className="text-2xl">
                Are you sure want to delete this Category
              </h3>
              <div className="modal-action">
                <a href="#" className="btn">
                  Yay!
                </a>
                <a href="#" className="btn" onClick={() => setDlt(false)}>
                  no
                </a>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}{" "}
      </div>
      {/* <EditorContent editor={editor} /> */}
    </div>
  );
}

export default Products;
