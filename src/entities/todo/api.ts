import { Todo } from './type';

export const fetchTodos = async (): Promise<Todo[]> => {
  return JSON.parse(sessionStorage.getItem('todos') || '[]');
};

export const saveTodos = async (todos: Todo[]) => {
  return sessionStorage.setItem('todos', JSON.stringify(todos));
};
