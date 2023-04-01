import { useEffect, useState } from "react";
import Task from "./components/Task";
import { AiFillFolderOpen } from "react-icons/ai";
import { getAllTodo, addTodo, deleteTodo, updateTodo } from "./api/handleApi";

function App() {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");
    const [isUpdating, setIsUpdating] = useState(false);
    const [todoId, setTodoId] = useState("");

    useEffect(() => {
        getAllTodo(setTodos);
    }, []);

    const updateMode = (_id, task) => {
        setIsUpdating(true);
        setTask(task);
        setTodoId(_id);
    };

    return (
        <main className="min-h-screen p-20 bg-gray-500">
            <div className="w-[550px] min-h-[600px] bg-slate-200 mx-auto p-10 space-y-7">
                <form
                    className="flex items-center justify-between gap-5 text-lg"
                    onSubmit={
                        isUpdating
                            ? () => updateTodo(todoId, task, setTodos, setTask, setIsUpdating)
                            : () => addTodo(task, setTask, setTodos)
                    }
                >
                    <input
                        className="flex-grow py-1 font-light bg-transparent border border-b-2 border-b-slate-500 focus:outline-none focus:border-b-blue-600"
                        type="text"
                        placeholder="Add Todo..."
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <button
                        className="px-3 py-1 font-medium duration-200 border-2 border-slate-500 bg-slate-500 hover:text-slate-500 hover:bg-transparent text-slate-200"
                        type="submit"
                    >
                        {isUpdating ? "Update" : "Add"}
                    </button>
                </form>
                <div className="flex items-center justify-start gap-2 text-xl font-bold text-slate-800">
                    <AiFillFolderOpen className="text-2xl text-slate-500" />
                    <h1>Todo list</h1>
                    <div className="flex-grow ml-3 h-[2px] bg-gray-300"></div>
                </div>
                {todos.map((item) => (
                    <Task
                        key={item._id} //
                        task={item.task}
                        deleteTodo={() => deleteTodo(item._id, setTodos)}
                        updateMode={() => updateMode(item._id, item.task)}
                        checked={item.checked}
                        id={item._id}
                        setTodos={setTodos}
                    />
                ))}
            </div>
        </main>
    );
}

export default App;
