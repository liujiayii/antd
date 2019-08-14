import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

class Dashboard extends React.PureComponent {
  render() {
    return (
      <PageHeaderWrapper>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
      </PageHeaderWrapper>
    );
  }
}

export default connect()(Dashboard);
