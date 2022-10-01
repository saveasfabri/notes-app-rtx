import { useSelector } from "react-redux";

const TaskList = () => {
  const state = useSelector(state => state);
  const tasks = useSelector(state => state.tasks);

  console.log('state', state)
  console.log('task', tasks)

  return (
      <h2>Task List</h2>
  );
};

export default TaskList;