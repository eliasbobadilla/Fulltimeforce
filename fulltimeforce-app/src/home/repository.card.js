import React from 'react';
import { Card, Timeline } from 'antd';

import './home.scss';

export const RepositoryCard = () => {
  return (
    <Card title="Git commit history" className="custom-card-size">
      <Timeline>
        <Timeline.Item>Primer commit</Timeline.Item>
        <Timeline.Item>Segundo commit</Timeline.Item>
        <Timeline.Item>Tercer commit</Timeline.Item>
        <Timeline.Item>Cuarto commit</Timeline.Item>
      </Timeline>
    </Card>
  );
};
