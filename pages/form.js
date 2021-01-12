import React, { useState } from 'react';
import { Form, Input, Button, Tooltip, Select, Cascader, DatePicker } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const FormLayoutDemo = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const { Option } = Select;
  const options = [];

  const selectBefore = (
    <Select defaultValue="http://" className="select-before">
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  );

  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
  return (
    <>
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onValuesChange={onFormLayoutChange}
      >
        
        <Form.Item label="Field A">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Field B">
        <Input.Group compact>
         <Input style={{ width: '50%' }} defaultValue="input content" />
        <DatePicker style={{ width: '50%' }} />
        </Input.Group>
        </Form.Item>
        <Form.Item label="Field C">
        <Input.Group compact>
        <Select style={{ width: '30%' }} defaultValue="Home">
        <Option value="Home">Home</Option>
        <Option value="Company">Company</Option>
       </Select>
      <Cascader style={{ width: '70%' }} options={options} placeholder="Select Address" />
    </Input.Group>
        </Form.Item>
        <Form.Item label="Field D">
          <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
        </Form.Item>
        <Form.Item label="Field E">
        <Input
             placeholder="Enter your username"
             prefix={<UserOutlined className="site-form-item-icon" />}
             suffix={
        <Tooltip title="Extra information">
          <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
        </Tooltip>
      }
    />
        </Form.Item>
        <Form.Item label="Field F">
        <Input prefix="￥" suffix="RMB" />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormLayoutDemo