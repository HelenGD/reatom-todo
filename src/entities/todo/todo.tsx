import { useAction } from '@reatom/npm-react';
import { Todo as ITodo } from './type';
import { editTodoAction, removeTodoAction, toggleTodoAction } from './model';

type Props = {
  todo: ITodo;
};

export const Todo = ({ todo }: Props) => {
  const toggleTodo = useAction(toggleTodoAction);
  const editTodo = useAction(editTodoAction);
  const removeTodo = useAction(removeTodoAction);

  return (
    <li key={todo.id}>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => toggleTodo(todo)}
      />{' '}
      {todo.isCompleted ? <del>{todo.text}</del> : todo.text}
      <button type="button" onClick={() => editTodo(todo)}>
        ✏️
      </button>
      <button type="button" onClick={() => removeTodo(todo)}>
        ❌
      </button>
    </li>
  );
};
