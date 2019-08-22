import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Table, Divider, Tag, Modal, Button, Form, Input } from 'antd';
import { connect } from 'dva';

const { Column, ColumnGroup } = Table;
const FormItem = Form.Item;
const namespace = 'monitor';
const mapState = state => ({
  tableData: state[namespace].tableData,
  cardsLoading: state.loading.effects['monitor/queryList'],
});
const mapDispatch = dispatch => ({
  getData() {
    dispatch({ type: 'monitor/queryList' });
  },
});

class BasicList extends Component {
  state = {
    visible: false,
  };

  componentDidMount() {
    this.props.getData();
  }

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  handleOk = () => {
    const { dispatch, form: { validateFields } } = this.props;
    validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: 'cards/addOne',
          payload: values,
        });
        // 重置 `visible` 属性为 false 以关闭对话框
        this.setState({ visible: false });
      }
    });
  };

  render() {
    const { tableData, cardsLoading } = this.props;
    const columns = [{
      title: '名称',
      dataIndex: 'firstName',
    },
      {
        title: '描述',
        dataIndex: 'lastName',
      },
      {
        title: '链接',
        dataIndex: 'address',
      }];
    const { visible } = this.state;
    const { form: { getFieldDecorator } } = this.props;
    return (
      <PageHeaderWrapper>
        <Table columns={columns} dataSource={tableData} loading={cardsLoading}></Table>
        <Button onClick={this.showModal}>新建</Button>
        <Modal title="新建记录" visible={visible} onOk={this.handleOk} onCancel={this.handleCancel}>
          <Form>
            <FormItem label="名称">
              {getFieldDecorator('name', {
                rules: [{ required: true }],
              })(
                <Input/>,
              )}
            </FormItem>
            <FormItem label="描述">
              {getFieldDecorator('desc')(
                <Input/>,
              )}
            </FormItem>
            <FormItem label="链接">
              {getFieldDecorator('url', {
                rules: [{ type: 'url' }],
              })(
                <Input/>,
              )}
            </FormItem>
          </Form>
        </Modal>
      </PageHeaderWrapper>
    );
  }
}

export default connect(mapState, mapDispatch)(Form.create()(BasicList));
