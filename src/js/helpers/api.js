
const todoClient = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true
})


// Add bearer token to all requests, except login
todoClient.interceptors.request.use((config)=>{
  if(config.url !== "/login"){
    config.headers.authorization = `Bearer ${localStorage.getItem("token")}`
  }
  return config
})


export const getTodos = async ()=>{
  const res = await todoClient.get("notes")
  return res.data.notes
}

export const createTodo = async (title, description)=>{
  const res = await todoClient.post("notes", {title, description})
  return res.data
}

export const deleteTodo = async (id)=>{
  const res = await todoClient.delete(`notes/${id}`)
  return res.data
}

export const login = async (username, password)=>{
  const res = await todoClient.post("login", {username, password})
  return res.data
}
