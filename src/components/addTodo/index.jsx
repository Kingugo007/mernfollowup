import axios from "axios"
import { useContext, useEffect } from "react"
import { Context } from "../../context/Context"

const urlTodo = "https://backendug.herokuapp.com/api/todos/"

export const AddTodos = ({ editData, getTodo, setDesc, setTitle, title, desc }) => {

const { user } = useContext(Context)

 useEffect(() =>{
        if(editData){
            setTitle(editData.title)
            setDesc(editData.desc)
        }
    },[editData]) 

  const handleSubmit = async (e) => {
     e.preventDefault()
     const newTodo = {
     username: user.username,
     title,
     desc
   }
   if(!editData){
   try {
   const data = await axios.post(urlTodo, newTodo)
   console.log(data)
   console.log("posted")    
   } catch(err){
       console.log(err)
   }
    } else{
   //Update the data if we do have the ediTodoData
   try{
   await axios.put(`${urlTodo}/${editData._id}`, newTodo)
   console.log("updated successfull")
    } catch(err){
      console.log(err)
    }
   }
  getTodo()
  }

           return <div className="Texteditor">
            <form onSubmit={handleSubmit}>
                <div className="input-control">
                    <input type="text" id="name" 
                        placeholder="Enter Title..." 
                         required
                         value={title}
                         onChange={e => setTitle(e.target.value)}
                        />
                </div>
                <div className="input-control">
                    <textarea name="" id="comment" cols="30" rows="5" 
                         placeholder="Task description..."
                         required
                         value={desc}
                         onChange={e => setDesc(e.target.value)} 
                         ></textarea>
                </div>
                <button className="submit-btn" type="submit">Add Item</button>
            </form>
        </div>
       
    }
