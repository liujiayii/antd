import React from 'react';
import {Result, Button} from 'antd';
import {PageHeaderWrapper} from '@ant-design/pro-layout';

const workplace = () => (
  <PageHeaderWrapper>
    <Result
      status="success"
      title="Successfully Purchased Cloud Server ECS!"
      subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={[
        <Button type="primary" key="console">
          Go Console
        </Button>,
        <Button key="buy">Buy Again</Button>,
      ]}
    />
  </PageHeaderWrapper>
);

export default workplace
