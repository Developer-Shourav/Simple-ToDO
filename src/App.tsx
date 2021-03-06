import React, { ChangeEvent, FC, useState } from 'react';
import "./App.css"
import ToDoTask from './components/ToDoTask';
import { ITask } from './interfaces';

const App: FC =() =>  {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]) ;

  const handleChange = (event: ChangeEvent<HTMLInputElement> ): void => {
    if(event.target.name === "task"){
      setTask(event.target.value);
    }
    else{
      setDeadline(Number(event.target.value));
    }
   
  };

  const addTask = (): void => {
    const newTask = {taskName:task, deadline: deadline};
     setTodoList([...todoList, newTask]);
     setTask("")
     setDeadline(0);
     
  };

  const compliteTask = (taskNameToDelete: string): void => {
        setTodoList(todoList.filter((task) => {
            return task.taskName !== taskNameToDelete ;
        }))
  };


  return (
    <div className='App'>
      <div className="header">
        <div className="inputContainer"> 
          <input type="text" name="task" id="" value={task} placeholder='Task..' onChange={handleChange} />
          <input type="number" name="deadline"  id="" placeholder='Deadline (in Days)' onChange={handleChange} />
        </div>
        <button className='taskAddingBtn' onClick={addTask} >ADD TASK</button>
      </div>
      <div className="todoList">
        {
          todoList.map( (task: ITask, key: number) => {
            return <ToDoTask key={key} task={task} compliteTask={compliteTask} /> ;
          })
        }
      </div>

     
    </div>
  );
}

export default App;

