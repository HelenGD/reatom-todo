import { useAtom, useAction } from '@reatom/npm-react';
import './App.css';
import { loadTodosAction, addTodoAction } from './entities/todo/model';
import { useEffect } from 'react';
import { Todo } from './entities/todo/todo';
import { FilterTodos } from './entities/filter-todos/filter-todos';
import { filteredTodosAtom } from './entities/filter-todos/model';

function App() {
  const [filteredTodosTodos] = useAtom(filteredTodosAtom);
  const loadTodos = useAction(loadTodosAction);
  const addTodo = useAction(addTodoAction);

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  return (
    <>
      <button type="button" onClick={addTodo}>
        ➕ add todo
      </button>
      <hr />
      <FilterTodos />
      <ul>
        {filteredTodosTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}

export default App;
