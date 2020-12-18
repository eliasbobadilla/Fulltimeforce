import React from 'react';
import { Row, Col, Layout, PageHeader } from 'antd';
import { UserCard } from './user.card';
import { RepositoryCard } from './repository.card';
import './home.scss';

export const Home = () => {
  const { Content } = Layout;

  return (
    <Layout>
      <PageHeader
        title={<img src="/fulltimeforce-logo.png" alt="username" />}
        subTitle="Technical Evaluation"
      />
      <Content className="container">
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <UserCard />
          </Col>
          <Col span={18}>
            <RepositoryCard />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};
