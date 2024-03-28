import logo from './logo.svg';
import './App.css';
import { useCallback, useState } from 'react';

const TodoItem = ({content, isDone}) => {
  function handleClickDone() {
    console.log('완료했어요');
  }

  return (
    <div class="todo-item">
      <div>{content}</div>
      <button onClick={handleClickDone}>완료</button>
    </div>
  );
}

function App() {
  const [newContent, setNewContent] = useState('');
  const [todoData, setTodoData] = useState([
    {
      "content": "독서하기",
      "isDone": false,
    },
  ]);

  function handleChangeInput(e) {
    setNewContent(e.target.value);
  }

  function handleAddClick() {
    if (newContent === '') {
      alert('내용을 입력해 주세요.');
    }
    else {
      setTodoData([...todoData, {
        "content": newContent,
        "isDone": false,
      }])
      setNewContent(''); // 입력 창 비우기
    }
  }

  return (
    <div className="App">
      <h1>~ 오늘의 할 일 ~</h1>
      <div className="flex center">
          <div className="todo-list">
              {todoData.map((ele, index) => <TodoItem content={ele.content} isDone={ele.isDone} />)}
          </div>

          <div className="add-todo">
              <input id="todoInput" type="text" onChange={handleChangeInput} />
              <button onClick={handleAddClick}>추가</button>
          </div>
      </div>
    </div>
  );
}

export default App;
