import React from 'react';
import {PageHeaderWrapper} from '@ant-design/pro-layout';
import {Table, Divider, Tag, Button} from 'antd';

const {Column, ColumnGroup} = Table;
const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default () => (
  <PageHeaderWrapper>
    <Table dataSource={data}>
      <ColumnGroup title="Name">
        <Column title="First Name" dataIndex="firstName" key="firstName"/>
        <Column title="Last Name" dataIndex="lastName" key="lastName"/>
      </ColumnGroup>
      <Column title="Age" dataIndex="age" key="age"/>
      <Column title="Address" dataIndex="address" key="address"/>
      <Column
        title="Tags"
        dataIndex="tags"
        key="tags"
        render={tags => (
          <span>
          {tags.map(tag => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </span>
        )}
      />
      <Column
        title="Action"
        key="action"
        render={(text, record) => (
          <div>
            <Button type="link">Invite {record.lastName}</Button>
            <Divider type="vertical"/>
            <Button type="link">Delete</Button>
          </div>
        )}
      />
    </Table>
  </PageHeaderWrapper>
);
