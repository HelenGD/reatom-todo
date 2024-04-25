import { atom, action } from '@reatom/framework';
import { Todo } from './type';
import { fetchTodos, saveTodos } from './api';

export const todosAtom = atom<Todo[]>([], 'todos');

export const loadTodosAction = action((ctx) => {
  fetchTodos().then((todos) => {
    todosAtom(ctx, todos);
  });
});

export const saveTodosAction = action((ctx) => {
  const todos = ctx.get(todosAtom);
  return saveTodos(todos);
});

export const addTodoAction = action((ctx) => {
  const text = prompt('Enter todo');

  if (!text) {
    return;
  }

  const newTodo: Todo = {
    id: crypto.randomUUID(),
    text,
    isCompleted: false,
  };

  const currentTodos = ctx.get(todosAtom);
  const newTodos = [newTodo, ...currentTodos];
  todosAtom(ctx, newTodos);
  saveTodosAction(ctx);
});

export const toggleTodoAction = action((ctx, targetTodo: Todo) => {
  const todos = ctx.get(todosAtom);

  const newTodos = todos.map((todo) => {
    if (todo.id === targetTodo.id) {
      return {
        ...todo,
        isCompleted: !todo.isCompleted,
      };
    }

    return todo;
  });

  todosAtom(ctx, newTodos);
  saveTodosAction(ctx);
});

export const editTodoAction = action((ctx, targetTodo: Todo) => {
  const newText = prompt('Enter todo', targetTodo.text);

  if (!newText) {
    return;
  }

  const todos = ctx.get(todosAtom);

  const newTodos = todos.map((todo) => {
    if (todo.id === targetTodo.id) {
      return {
        ...todo,
        text: newText,
      };
    }

    return todo;
  });

  todosAtom(ctx, newTodos);
  saveTodosAction(ctx);
});

export const removeTodoAction = action((ctx, targetTodo: Todo) => {
  if (!confirm('Are you sure?')) {
    return;
  }

  const todos = ctx.get(todosAtom);

  const newTodos = todos.filter((todo) => {
    return todo.id !== targetTodo.id;
  });

  todosAtom(ctx, newTodos);
  saveTodosAction(ctx);
});
