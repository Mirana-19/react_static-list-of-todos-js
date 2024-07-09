import { UserInfo } from '../UserInfo/UserInfo';

// Add the required props
export const TodoInfo = ({ todo }) => {
  const completedClassname = todo.completed ? 'TodoInfo--completed' : '';

  return (
    <li className={`TodoInfo ${completedClassname}`}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={todo.user} />
    </li>
  );
};
