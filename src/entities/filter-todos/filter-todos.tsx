import { useAtom } from '@reatom/npm-react';
import { filterTodosAtom } from './model';

export const FilterTodos = () => {
  const [filterTodos, setFilterTodos] = useAtom(filterTodosAtom);

  return (
    <div>
      <label>
        <input
          type="radio"
          name="filter"
          checked={filterTodos === 'all'}
          onChange={() => setFilterTodos('all')}
        />
        All
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          checked={filterTodos === 'active'}
          onChange={() => setFilterTodos('active')}
        />
        Active
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          checked={filterTodos === 'complited'}
          onChange={() => setFilterTodos('complited')}
        />
        Complited
      </label>
    </div>
  );
};
