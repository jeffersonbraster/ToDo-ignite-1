import { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { PlusCircle, Trash } from "phosphor-react";
import styles from "./Tasks.module.css";

interface Task {
  id: string;
  text: string;
  asCompleted: boolean;
}

const Tasks = () => {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    setTasks([...tasks, { id: uuidV4(), text, asCompleted: false }]);
    setText("");
  };

  const handleRemoveTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleTaskCompleted = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, asCompleted: !task.asCompleted } : task
      )
    );
  };

  const taskCompleted = tasks.filter((task) => task.asCompleted).length;

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.inputGroup}>
          <input
            className={styles.input}
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button
            onClick={handleCreateTask}
            className={styles.button}
            type="submit"
          >
            Criar <PlusCircle size={22} />
          </button>
        </div>

        <div className={styles.contador}>
          <p className={styles.taskCreate}>
            Tarefas criadas{" "}
            <span className={styles.numeracao}>{tasks.length}</span>
          </p>

          <p className={styles.taskDone}>
            Concluidas <span className={styles.numeracao}>{taskCompleted}</span>
          </p>

          <div className={styles.line}></div>
        </div>

        <div className={styles.line}></div>

        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <div className={styles.listTask}>
                <label className={styles.checkboxContainer}>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    readOnly
                    onClick={() => handleToggleTaskCompleted(task.id)}
                  />
                  <span className={styles.checkMark}></span>
                </label>
                <p className={task.asCompleted ? styles.completed : ""}>
                  {task.text}
                </p>
              </div>

              <button
                className={styles.trash}
                type="button"
                onClick={() => handleRemoveTask(task.id)}
              >
                <Trash size={22} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Tasks;
