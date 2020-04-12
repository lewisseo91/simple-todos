import React, { Component } from 'react';
import './TodoItemList.css';
import TodoItem from './TodoItem.js';

class TodoItemList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
      return this.props.todos !== nextProps.todos;
    }

    render() {
        const { todos, onToggle, onRemove } = this.props;

        const todoList = todos.map(
            ({id, text, color, checked}) => (
              <TodoItem
                id={id}
                text={text}
                checked={checked}
                onToggle={onToggle}
                onRemove={onRemove}
                color={color}
                key={id} // 키값 필수
              />
            )
          );

        return (
            <div>
                {todoList}
            </div>
        )
    }
}

export default TodoItemList;