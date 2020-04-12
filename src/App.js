// 실습코드
import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';

class App extends Component {

  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: '',
    todos: [
      { id: 0, text: ' 리액트 소개', color: null, checked: false },
      { id: 1, text: ' 리액트 소개', color: null, checked: false },
      { id: 2, text: ' 리액트 소개', color: null, checked: false }
    ],
    colors: [
      { id: 'c-1', color: '#343a40', selected: false},
      { id: 'c-2', color: '#f03e3e', selected: true},
      { id: 'c-3', color: '#12b886', selected: false},
      { id: 'c-4', color: '#228ae6', selected: false},
    ]
  }

  handleChange = (e) => {
    this.setState({
input: e.target.value // input 의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, todos, colors } = this.state;
    const color_selected = colors[colors.findIndex(elem => elem.selected)].color;
    this.setState({
      input: '', // 인풋 초기화
      // concat으로 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        color: color_selected,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id -> 몇번째 아이템인지 찾음
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택된 개체

    const nextTodos = [...todos]; // 배열 복사

    // 기존의 값들을 복사하고, checked 값 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    }

    this.setState({
      todos: nextTodos
    })
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  handleColorChange = (color) => {
    const { colors } = this.state;

    const index = colors.findIndex(elem => elem.color === color);
    const selected = colors[index];

    const newColors = [...colors]; // 배열 복사

    newColors.map(elem => elem.selected = false);
    newColors[index] = {
      ...selected,
      selected: !selected.selected
    }

    this.setState({
      colors: newColors
    })
    // console.log(newColors);
  }

  render() {
    const { input, todos, colors } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleColorChange
    } = this;
    return (
      <TodoListTemplate 
        palette={(
        <Palette 
          colors={colors}
          onChange={handleColorChange}
        />
        )} 
        form={(
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
          colors={colors}
        />
      )}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    );
  }
}

export default App;
