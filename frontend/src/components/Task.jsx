import React, { useState } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { checkTodo, unCheckTodo } from "../api/handleApi";

function Task({ task, updateMode, deleteTodo, checked, id, setTodos }) {
    const [isCheck, setIsCheck] = useState(checked);

    const handleCheck = () => {
        if (isCheck) {
            unCheckTodo(id, setTodos);
            setIsCheck(false);
        } else {
            checkTodo(id, setTodos);
            setIsCheck(true);
        }
    };

    return (
        <div className="flex items-center justify-between text-lg font-light">
            <div className="flex items-center gap-3 cursor-pointer">
                <input checked={isCheck} onChange={handleCheck} type="checkbox" className="w-6 h-6 accent-slate-500" />
                <p className={isCheck ? `line-through text-slate-400` : `text-slate-900`}>{task}</p>
            </div>
            <div className="flex items-center gap-2 text-xl">
                <AiOutlineEdit onClick={updateMode} className="duration-200 cursor-pointer hover:text-red-500" />
                <AiOutlineDelete onClick={deleteTodo} className="duration-200 cursor-pointer hover:text-red-500" />
            </div>
        </div>
    );
}

export default Task;
