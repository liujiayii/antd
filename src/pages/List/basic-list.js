import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'dva';

const namespace = 'basic-list';
const mapState = state => {
  const { cardList } = state[namespace];
  return { cardList };
};
const mapDispatch = dispatch => ({
  onClickAdd: newCard => {
    const action = {
      type: `${namespace}/addNewCard`,
      payload: newCard,
    };
    dispatch(action);
  },
  onDidMount: () => {
    dispatch({ type: `${namespace}/queryInitCards` });
  },
});
@connect(mapState, mapDispatch)
export default class BasicList extends Component {
  componentDidMount() {
    this.props.onDidMount();
  }

  render() {
    const { cardList, onClickAdd } = this.props;
    return (
      <div>
        {cardList.map(card => (
          <Card key={card.id}>
            <div>Q: {card.setup}</div>
            <div>
              <strong>A: {card.punchline}</strong>
            </div>
          </Card>
        ))}
        {/*<div>
          <Button onClick={() => onClickAdd({
            setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            punchline: 'here we use dva',
          })}> 添加卡片 </Button>
        </div>*/}
      </div>
    );
  }
}
