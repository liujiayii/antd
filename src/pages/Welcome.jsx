import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Tabs } from 'antd';

const { TabPane } = Tabs;

const style = {
  width: '400px',
  margin: '30px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  border: '1px solid #e8e8e8',
};
export default () => (
  <PageHeaderWrapper>
    <p style={{ textAlign: 'center' }}>
      Want to add more pages? Please refer to{' '}
      <a href="https://pro.ant.design/docs/block-cn" target="_blank" rel="noopener noreferrer">
        use block
      </a>。
    </p>
    <Card style={style} actions={[<a>操作一</a>, <a>操作二</a>]}>
      <Card.Meta
        avatar={<img
          alt=""
          style={{ width: '64px', height: '64px', borderRadius: '32px' }}
          src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
        />}
        title="Alipay"
        description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。"
      />
    </Card>
    <Tabs defaultActiveKey="1">
      <TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  </PageHeaderWrapper>
);
