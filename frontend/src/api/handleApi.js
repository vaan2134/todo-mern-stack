import axios from "axios";

const baseUrl = "http://localhost:5000";

const getAllTodo = (setToDo) => {
    axios.get(baseUrl).then(({ data }) => {
        console.log("data ---> ", data);
        setToDo(data);
    });
};

const addTodo = (task, setTask, setToDo) => {
    axios
        .post(`${baseUrl}/save`, { task })
        .then((data) => {
            console.log(data);
            setTask("");
            getAllTodo(setToDo);
        })
        .catch((err) => console.log(err));
};

const updateTodo = (todoId, task, setToDo, setTask, setIsUpdating) => {
    axios
        .post(`${baseUrl}/update`, { _id: todoId, task })
        .then((data) => {
            console.log(data);
            setTask("");
            setIsUpdating(false);
            getAllTodo(setToDo);
        })
        .catch((err) => console.log(err));
};

const deleteTodo = (_id, setToDo) => {
    axios
        .post(`${baseUrl}/delete`, { _id })
        .then((data) => {
            console.log(data);
            getAllTodo(setToDo);
        })
        .catch((err) => console.log(err));
};

const checkTodo = (_id, setToDo) => {
    axios
        .post(`${baseUrl}/check`, { _id })
        .then((data) => {
            getAllTodo(setToDo);
            console.log(`Check`);
        })
        .catch((err) => console.log(err));
};

const unCheckTodo = (_id, setToDo) => {
    axios
        .post(`${baseUrl}/uncheck`, { _id })
        .then((data) => {
            getAllTodo(setToDo);
            console.log(`Uncheck`);
        })
        .catch((err) => console.log(err));
};

export { getAllTodo, addTodo, deleteTodo, updateTodo, checkTodo, unCheckTodo };
