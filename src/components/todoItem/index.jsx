import styled from 'styled-components';
import document from "../../assets/pictures/document.svg"
import deleteIcon from "../../assets/pictures/delete.svg"
import edit from "../../assets/pictures/edit.svg"
import axios from 'axios';

const TodoItemSTyled = styled.div`
    background-color: #4F6877;
    padding: 1rem;
    margin: .8rem 0;
    width: 100%;
    border-radius: 30px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    color: white;
    &:last-child{
        margin-bottom: 4rem;
    }
    h3{
        font-size: 28px;
        color: #6BBE92;
        font-weight: 500;
        text-transform: uppercase;
        
    }
    .icon-document, .edit, .delete{
        background-color: white;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
        cursor: pointer;
        img{
            cursor: pointer;
            width: 75%;
        }
         @media screen and (max-width: 480px) {
           width: 32px;
           height: 30px;
        }
    }

    .text-container{       
        display: flex;
        flex-wrap: wrap;
        flex: 3;
        padding: 0 3rem;
        .right-text{
            flex: 2;
        }
        .left-text{
            padding-right: 4rem;
        }
    }
    .edit{
        margin-right: 1rem;
    }
`
const TodoItem = ({ todo, getTodos, editTodo }) => {
const urlTodo = "https://backendug.herokuapp.com/api/todos"
const deleteTodo = async () =>{
await axios.delete(`${urlTodo}/${todo._id}`)
console.log("deleted")
getTodos(); 
}
 
 return (
      <TodoItemSTyled>
            <div className="icon-document">
                <img src={document} alt="" />
            </div>
            <div className="text-container">
                <div className="left-text">
                    <h3>Task</h3>
                    <p>{todo.title}</p>
                </div>
                <div className="right-text">
                    <h3>Description</h3>
                    <p>{todo.desc}</p>
                </div>
            </div>
            <div className="edit">
                <img src={edit} alt="" onClick={() => editTodo(todo)}/>
            </div>
            <div className="delete">
                <img src={deleteIcon} alt="" onClick={deleteTodo} />
            </div>
        </TodoItemSTyled>
     
    )
    
}



export default TodoItem;
