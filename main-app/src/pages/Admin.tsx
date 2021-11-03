import React, { useState } from 'react';
import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Card, Typography, Alert, Divider, Select } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { useIntl, history } from 'umi';
const { Option } = Select;

export default (): React.ReactNode => {
  const intl = useIntl();
  const [state, setstate] = useState(null);

  function onChange(v: string) {
    if (v === 'token') {
      window.localStorage.setItem(
        'token',
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzU4Mzg4MDMsIm5iZiI6MTYzNTgzODgwMywianRpIjoiZjQ1NWI4ZjUtMDcyMi00YWQ1LTgzNWMtMjY3N2EyMjgyMjIyIiwiZXhwIjoxNjM1OTI1MjAzLCJpZGVudGl0eSI6MjMsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyIsInVzZXJfY2xhaW1zIjp7InVpZCI6MjMsImdyb3VwX2lkIjoxOX19.tt5xfUhIZxZXzWl1RFIu8LztgRbpW86nl5El6hBB6VY',
      );
    } else if (v === 'name') {
      window.localStorage.setItem('name', '周少博');
    } else if (v === 'to') {
      history.push('/sub-app-2?type=admin&name=ZhouShaobo');
    } else {
      window.localStorage.setItem('language', 'zh-CN');
    }
  }

  return (
    <PageHeaderWrapper
      content={intl.formatMessage({
        id: 'pages.admin.subPage.title',
        defaultMessage: 'This page can only be viewed by admin',
      })}
    >
      <Card>
        <Alert
          message={intl.formatMessage({
            id: 'pages.welcome.alertMessage',
            defaultMessage: 'Faster and stronger heavy-duty components have been released.',
          })}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 48,
          }}
        />
        <Typography.Title level={2} style={{ textAlign: 'center' }}>
          <SmileTwoTone /> Ant Design Pro <HeartTwoTone twoToneColor="#eb2f96" /> You
        </Typography.Title>
      </Card>
      <p style={{ textAlign: 'center', marginTop: 24 }}>
        Want to add more pages? Please refer to{' '}
        <a href="https://pro.ant.design/docs/block-cn" target="_blank" rel="noopener noreferrer">
          use block
        </a>
        。
      </p>
      <Divider>分割线</Divider>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={onChange}
      >
        <Option value="token">Token</Option>
        <Option value="name">Name</Option>
        <Option value="language">Language</Option>
        <Option value="to">To</Option>
      </Select>
      <Divider>分割线</Divider>
    </PageHeaderWrapper>
  );
};
