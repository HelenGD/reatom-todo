import { useAtom, useAction } from '@reatom/npm-react';
import './App.css';
import {
  loadTodosAction,
  addTodoAction,
  completedTodosAtom,
  incompletedTodosAtom,
} from './entities/todo/model';
import { useEffect } from 'react';
import { Todo } from './entities/todo/todo';

function App() {
  const [completedTodos] = useAtom(completedTodosAtom);
  const [incompletedTodos] = useAtom(incompletedTodosAtom);
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
      <ul>
        {incompletedTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}

        {completedTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}

export default App;
