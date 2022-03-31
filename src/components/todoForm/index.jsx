import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Context } from '../../context/Context';
import { AddTodos } from '../addTodo';
import TodoItem from '../todoItem';


const TodoFormStyled = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
    .Texteditor{
        width: 100%;
        padding-top: 4rem;
        form{
            padding-bottom: 5rem;
            .submit-btn{
                font-size: 1.25rem;
                font-family: 'Jost', 'Sans-serif';
                text-transform: uppercase;
                padding: 0.5rem 2rem;
                outline: none;
                cursor: pointer;
                background-color: #4154f1;
                border: none;
                border-radius: 30px;
                color: white;
                filter: drop-shadow(0px 4px 28px rgba(0, 0, 0, 0.25));
            }
        }
    }
`
const Notice = styled.div`
 text-align: center;
 font-size: 1.2rem;
 color: white;
 text-transform: uppercase;
 font-family: 'Jost', 'Sans-serif';
`

const Welocme = styled.div`
 text-align: center;
 font-size: 1.5rem;
 color: white;
 text-transform: uppercase;
 font-family: 'Jost', 'Sans-serif';
 margin-top: 2em;
 letter-spacing: 0.5rem;
 text-align: center;
`

const LogoutBtn = styled.button`
font-size: 1.2rem;
color: white;
background-color: #a6270d;
border: none;
padding: 0.5rem 1.5rem;
margin-top: 1em;
border-radius: 35px;
text-transform: capitalize;
font-family: 'Jost', 'Sans-serif';
letter-spacing: 0.5rem;
cursor: pointer;
`

const urlTodo = "https://backendug.herokuapp.com/api/todos"
const TodoForm = () => {
const { user, dispatch } = useContext(Context);
const [todos, setTodos] = useState([]);
const [title, setTitle] = useState("")
const [desc, setDesc] = useState("")
const [editTodoData, setEditTodoData] = useState('')


const getTodos = async () => {
 try{
  const data = await axios.get(`${urlTodo}/?user=${user.username}`)
  console.log(data.data)
  setTodos(data.data)
  setDesc("")
  setTitle("")
  setEditTodoData("")
 } catch(err) {
     console.log(err)
 }
}

useEffect(() => {
    getTodos();
      
},[setTodos])

const editTodos = (todoData) => {
      setEditTodoData(todoData)
      console.log("clicked edit button")
 }

const renderTodos = () => {
if(todos.length > 0){
return todos.map((todo, index) => {     
   return (
     <TodoItem key={index} todo={todo} editTodo={editTodos} getTodos={getTodos}/> 
    )
})
} else {
   return <Notice>Add a record</Notice>    
}
}
 
const handleLogout = () => {
        dispatch({ type: "LOGOUT"})
        window.location.replace("/login")
    }

    return (
        <TodoFormStyled>
          <Welocme> {`${user.username} Records`} </Welocme>
           <LogoutBtn onClick={handleLogout} >Logout</LogoutBtn>
            <AddTodos editData={editTodoData} getTodo={getTodos} setTitle={setTitle} setDesc={setDesc}
            title={title} desc={desc}
            />
            {renderTodos()}
        </TodoFormStyled>
    )
}


export default TodoForm;
