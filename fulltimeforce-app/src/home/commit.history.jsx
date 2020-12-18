import React from 'react';
import { Card, Timeline, Tag } from 'antd';
import { useSelector } from 'react-redux';

export const CommitHistory = () => {
  const { home } = useSelector((state) => state);

  /**
   * @function getTitle
   * @param {string} value message from github api
   * @returns {string} commits' title only
   */
  function getTitle(value) {
    const data = value.split(/\n/);
    return data[0];
  }

  return (
    <Card
      title="Git commit history"
      className="custom-card-size commit-history-card"
    >
      <Timeline>
        {home.commits.map((x, i) => (
          <Timeline.Item key={i}>
            <span className="commit-title">{getTitle(x.commit?.message)}</span>
            <Tag color="#495266">{x.commit?.committer.date}</Tag>
            <Tag color="#299bf4">{x.commit?.committer.name}</Tag>
          </Timeline.Item>
        ))}
      </Timeline>
    </Card>
  );
};
