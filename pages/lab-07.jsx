import React from "react";
import Todo from "../components/Todolist";
import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Lab07() {
    const [todo, setTodo] = useState([]);

    const [isFirstRender, setIsFirstRender] = useState(true);
    useEffect(() => {
        if (isFirstRender) {
            setIsFirstRender(false);
            return;
        }
        const todoStr = JSON.stringify(todo);
        localStorage.setItem("todo-react", todoStr);
    }, [todo]);

    useEffect(() => {
        const todoStr = localStorage.getItem("todo-react");
        if (!todoStr) setTodo([]);
        else setTodo(JSON.parse(todoStr));
    }, []);

    const deleteTodo = (idx) => {
        todo.splice(idx, 1);
        setTodo([...todo]);
    };

    const markTodo = (idx) => {
        todo[idx].completed = !todo[idx].completed;
        setTodo([...todo]);
    };

    const moveUp = (idx) => {
        let temp = todo[idx];
        todo[idx] = todo[idx - 1];
        todo[idx - 1] = temp;
        setTodo([...todo]);
    };

    const moveDown = (idx) => {
        if (idx == todo.length - 1) {
            return;
        }
        let temp = todo[idx];
        todo[idx] = todo[idx + 1];
        todo[idx + 1] = temp;
        setTodo([...todo]);
    };

    const addTodo = (title, completed) => {
        setTodo([{ title: title, completed: completed }, ...todo]);
    };

    const handleInput = (event) => {
        if (event.key == "Enter") {
            if (event.target.value === "") {
                alert("Todo cannot be empty");
                return;
            }
            addTodo(event.target.value, false);
            event.target.value = "";
        }
    };

    return (
        <div>
            <Head>
                <title>My Resume Website</title>
            </Head>
            <main>
                <Navbar />
                {/* Entire App container (required for centering) */}
                <div style={{ maxWidth: "700px" }} className="mx-auto">
                    {/* App header */}
                    <p className="display-4 text-center fst-italic m-4">
                        Minimal Todo List <span className="fst-normal">☑️</span>
                    </p>
                    {/* Input */}
                    <input
                        className="form-control mb-1 fs-4"
                        placeholder="insert todo here..."
                        onKeyUp={handleInput}
                    />
                    {/* Todos */}
                    {todo.map((element, index) => (
                        <Todo
                            key={index}
                            title={element.title}
                            completed={element.completed}
                            onMark={() => markTodo(index)}
                            onDelete={() => deleteTodo(index)}
                            onMoveUp={() => moveUp(index)}
                            onMoveDown={() => moveDown(index)}
                        />
                    ))}
                    {/* summary section */}
                    <p className="text-center fs-4">
                        <span className="text-primary">
                            All ({todo.length}){" "}
                        </span>
                        <span className="text-warning">
                            Pending (
                            {todo.filter((e) => e.completed == false).length})
                        </span>
                        <span className="text-success">
                            Completed (
                            {todo.filter((e) => e.completed == true).length})
                        </span>
                    </p>

                    {/* Made by section */}
                    <p className="text-center mt-3 text-muted fst-italic">
                        made by Jedsadaporn Juntong 640612179
                    </p>
                </div>
            </main>
        </div>
    );
}
