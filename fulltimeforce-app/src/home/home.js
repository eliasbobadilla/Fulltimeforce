import React from 'react';
import {
  Row,
  Col,
  Card,
  Space,
  Select,
  Input,
  Form,
  Tooltip,
  Timeline,
} from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

import './home.scss';

export const Home = () => {
  const username = 'EliasBobadilla';
  const { Option } = Select;
  const { Search } = Input;
  const [form] = Form.useForm();

  function handleOnChange(value) {
    console.log(value);
  }

  function handleOnSearch(value) {
    console.log(value);
  }

  return (
    <div className="home">
      <Row gutter={[24, 24]}>
        <Col span={6}>
          <Card title={username} className="custom-card-size">
            <Space direction="vertical" size="large">
              <img
                className="avatar"
                src="https://avatars2.githubusercontent.com/u/21095562?v=4"
                alt="username"
              />
              <Form key="form" name="form" form={form} layout="vertical">
                <Form.Item
                  label={
                    <span>
                      Nombre de usuario&nbsp;
                      <Tooltip title="el usuario en github que desea consultar, ejemplo: eliasbobadilla">
                        <InfoCircleOutlined />
                      </Tooltip>
                    </span>
                  }
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'el nombre de usuario es requerido',
                    },
                  ]}
                >
                  <Search
                    onSearch={handleOnSearch}
                    style={{ width: '100%' }}
                    enterButton
                  />
                </Form.Item>
                <Form.Item label="Repositorios" name="repos">
                  <Select
                    style={{ width: '100%' }}
                    onChange={handleOnChange}
                    showArrow
                  >
                    <Option value="repo1" key="1">
                      repo1
                    </Option>
                    <Option value="repo2" key="2">
                      repo2
                    </Option>
                    <Option value="repo3" key="3">
                      repo3
                    </Option>
                  </Select>
                </Form.Item>
              </Form>
            </Space>
          </Card>
        </Col>
        <Col span={18}>
          <Card title="Git commit history" className="custom-card-size">
            <Timeline>
              <Timeline.Item>Primer commit</Timeline.Item>
              <Timeline.Item>Segundo commit</Timeline.Item>
              <Timeline.Item>Tercer commit</Timeline.Item>
              <Timeline.Item>Cuarto commit</Timeline.Item>
            </Timeline>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
