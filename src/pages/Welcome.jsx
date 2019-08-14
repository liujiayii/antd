import React from 'react';
import { Button } from 'antd';
import Link from 'umi/link';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

export default () => (
  <PageHeaderWrapper>
    <p style={{
      textAlign: 'center',
    }}>
      Want to add more pages? Please refer to{' '}
      <a href="https://pro.ant.design/docs/block-cn" target="_blank" rel="noopener noreferrer">
        use block
      </a>
      。
    </p>
    <Link to=""><Button type="primary">去登录页</Button></Link>
  </PageHeaderWrapper>
);
