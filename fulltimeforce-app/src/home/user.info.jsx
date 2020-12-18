import React, { useEffect } from 'react';
import { Card, Form, Input, Select, Space, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setCommits } from './home.slice';

export const UserInfo = () => {
  const { Option } = Select;
  const { Search } = Input;
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { home } = useSelector((state) => state);

  useEffect(() => {
    const demo = { username: 'EliasBobadilla', repo: 'Fulltimeforce' };
    dispatch(setUser(demo.username));
    dispatch(setCommits(demo.username, demo.repo));
    form.setFieldsValue(demo);
  }, [dispatch, form]);

  /**
   * @function handleOnChange
   * @param {string} value selected github repository
   */
  function handleOnChange(value) {
    dispatch(setCommits(home.user?.login, value));
  }

  /**
   * @function handleOnSearch
   * @param {string} value github username
   */
  function handleOnSearch(value) {
    dispatch(setUser(value));
  }

  return (
    <Card title={home.user?.login} className="custom-card-size">
      <Space direction="vertical" size="large">
        <img className="avatar" src={home.user?.avatar_url} alt="username" />
        <Form key="form" name="form" form={form} layout="vertical">
          <Form.Item
            label={
              <span>
                Nombre de usuario&nbsp;
                <Tooltip title="Ingresa el usuario de github que deseas consultar, ejemplo: eliasbobadilla">
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
            name="repo"
          >
            <Select
              style={{ width: '100%' }}
              onChange={handleOnChange}
              showArrow
            >
              {home.repositories.map((x, i) => (
                <Option value={x.name} key={i}>
                  {x.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Space>
    </Card>
  );
};
