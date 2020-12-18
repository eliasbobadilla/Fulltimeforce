import React from 'react';
import { Row, Col, Layout, PageHeader } from 'antd';
import { UserInfo } from './user.info';
import { CommitHistory } from './commit.history';
import './home.scss';

export const Home = () => {
  const { Content } = Layout;
  return (
    <Layout>
      <PageHeader
        title={<img src="/fulltimeforce-logo.png" alt="username" />}
        subTitle="Technical Evaluation"
      />
      <Content>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <UserInfo />
          </Col>
          <Col span={18}>
            <CommitHistory />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};
