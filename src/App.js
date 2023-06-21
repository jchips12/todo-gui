import React, {useEffect, useState} from "react";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark, faCheck, faPlus, faSave} from "@fortawesome/free-solid-svg-icons";
import {AddButton, DeleteButton, DoneButton, EditButton, TodoInput} from "./AppComponents";


function TodoList({title, description, todoId, deleteTask}) {
    return (
        <div className="flex items-center gap-2">
            <DoneButton>
                <FontAwesomeIcon icon={faCheck}/>
            </DoneButton>
            <DeleteButton onClick={e => deleteTask(e, todoId)}>
                <FontAwesomeIcon icon={faXmark}/>
            </DeleteButton>
            <p className="text-grey-darkest rounded shadow p-2 w-full bg-yellow-100">{title}</p>
        </div>
    );
}


function App() {

    const [todoList, setTodoList] = useState(null);
    const [addTodo, setAddTodo] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(true);

    function getTodoList() {
        if (todoList === null) {
            setLoading(true)
        }
        axios.get('/api/todo')
            .then(response => response.data)
            .then(setTodoList)
            .then(() => setLoading(false))
            .catch(setError);
    }

    // eslint-disable-next-line
    useEffect(getTodoList, [])

    function handleAddTodo(e) {
        setAddTodo(e.target.value);
        if (e.target.value === "") {
            setBtnDisabled(true)
        } else {
            setBtnDisabled(false)
        }
    }

    function requestAddTodo(e) {
        setBtnDisabled(true);
        e.preventDefault();
        axios.post('/api/todo', {
            title: addTodo,
            description: 'Dummy Description'
        })
            .then(response => console.log(response))
            .then(() => setAddTodo(""))
            .then(getTodoList)
            .catch(setError);
    }

    function requestDeleteTodo(e, id) {
        e.preventDefault();
        axios.delete('/api/todo/' + id, {
            title: addTodo,
            description: 'Dummy Description'
        })
            .then(response => console.log(response))
            .then(() => setAddTodo(""))
            .then(getTodoList)
            .catch(setError);
    }

    if (loading) {
        return <h1>Loading...</h1>;
    } else if (error) {
        return <pre>{JSON.stringify(error)}</pre>;
    } else if (!todoList) {
        return null;
    } else {
        return (
            <div className="App max-w-2xl mx-auto">
                <div className="flex flex-col gap-y-4 rounded shadow p-4 m-4 bg-gray-100">
                    <div className="flex items-center gap-2">
                        <EditButton>
                            <FontAwesomeIcon icon={faSave}/>
                        </EditButton>
                        <AddButton onClick={requestAddTodo} disabled={btnDisabled}>
                            <FontAwesomeIcon icon={faPlus}/>
                        </AddButton>
                        <TodoInput id="todoInput" onChange={handleAddTodo} value={addTodo} placeholder="Todo"/>
                    </div>
                    {todoList.map((todo) => <TodoList
                        key={todo.id}
                        title={todo.title}
                        description={todo.description}
                        todoId={todo.id}
                        deleteTask={requestDeleteTodo}
                    />)}
                </div>
            </div>
        );
    }
}

export default App;
