import React, { useState, useEffect } from 'react';
import { Card, Form, Input, Select, Space, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

export const UserCard = () => {
  const { Option } = Select;
  const { Search } = Input;
  const [form] = Form.useForm();
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername('EliasBobadilla');
  }, []);
  /**
   * Método para mostrar los datos del repositorio en la página
   *
   * @function handleOnChange
   * @param {string} value nombre del repositorio
   */
  function handleOnChange(value) {
    console.log(value);
  }

  /**
   * Método para mostrar los datos de un usuario en la página
   *
   * @function handleOnSearch
   * @param {string} value nombre del usuario
   */
  function handleOnSearch(value) {
    console.log(value);
  }

  return (
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
                <Tooltip title="Ingresar el usuario en github que deseas consultar, ejemplo: eliasbobadilla">
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
          <Form.Item
            label={
              <span>
                Repositorios&nbsp;
                <Tooltip title="Selecciona un repositorio para visualizar los commits, ejemplo: Fulltimeforce">
                  <InfoCircleOutlined />
                </Tooltip>
              </span>
            }
            name="repos"
          >
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
  );
};
