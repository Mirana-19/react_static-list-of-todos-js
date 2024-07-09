import { TodoInfo } from '../TodoInfo/TodoInfo';
import { todos } from '../../App';
// Add the required props
export const TodoList = () => {
  return (
    todos && (
      <ul className="TodoList">
        {todos.map(todo => {
          return <TodoInfo key={todo.id} todo={todo} />;
        })}
      </ul>
    )
  );
};
