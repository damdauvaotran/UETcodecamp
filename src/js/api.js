import axios from 'axios';

export const getTodos = async ()=>{
  const res = await axios.get("http://localhost:8000/notes")
  return res.data.notes
}

export const createTodo = async (title, description)=>{
  const res = await axios.post("http://localhost:8000/notes", {title, description})
  return res.data
}

export const deleteTodo = async (id)=>{
  const res = await axios.delete(`http://localhost:8000/notes/${id}`)
  return res.data
}
