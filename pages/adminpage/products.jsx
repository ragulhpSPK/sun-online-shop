import React from 'react'
import styles from '../../styles/form.module.css'
import { PlusOutlined } from '@ant-design/icons';
import { Button, Divider, Input, Select, Space } from 'antd';
import { useRef, useState } from 'react';

function Products() {
    let index = 0;
 
        const [items, setItems] = useState(['']);
        const [name, setName] = useState('');
        const inputRef = useRef(null);
        const onNameChange = (event) => {
          setName(event.target.value);
        }

        const addItem = (e) => {
            e.preventDefault();
            setItems([...items, name || `New item ${index++}`]);
            setName('');
            setTimeout(() => {
              inputRef.current?.focus();
            }, 0);
          };

  return (
    <div className='min-h-[50vh] bg-[#ebe5e5e1] w-[60vw] m-auto  mt-5'>
        <from className='flex flex-col gap-5'>
        <section className={
					styles.section_form
				}>
					<form id={
							styles.consultation_form
						}
						className={
							styles.feed_form
						}
						action="#">
                           
						<input required="" placeholder="Name" type="text"/>
						<input name="phone" required="" placeholder="Price"/>
						<Select
      style={{
        width: 300,
      }}
      placeholder="custom dropdown render"
      dropdownRender={(menu) => (
        <>
          {menu}
          <Divider
            style={{
              margin: '8px 0',
            }}
          />
          <Space
            style={{
              padding: '0 8px 4px',
            }}
          >
            <Input
              placeholder="Please enter item"
              ref={inputRef}
              value={name}
              onChange={onNameChange}
            />
            <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
              Add item
            </Button>
          </Space>
        </>
      )}
      options={items.map((item) => ({
        label: item,
        value: item,
      }))}
    />
						
						<button className={
							styles.button_submit
						}>Insert</button>
					</form>
				</section>
        </from>
    </div>
  )
}

export default Products