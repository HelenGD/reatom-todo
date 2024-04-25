import { atom } from '@reatom/framework';
import { todosAtom } from '../todo/model';

export const filterTodosAtom = atom<'all' | 'complited' | 'active'>('all');

export const filteredTodosAtom = atom((ctx) => {
  const todos = ctx.spy(todosAtom);
  const filterTodos = ctx.spy(filterTodosAtom);

  if (filterTodos === 'active') {
    return todos.filter((todo) => !todo.isCompleted);
  }

  if (filterTodos === 'complited') {
    return todos.filter((todo) => todo.isCompleted);
  }

  return todos;
});
