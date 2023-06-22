// Import our custom CSS
import '../scss/styles.scss'
import axios  from 'axios'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

window.handleHello = ()=>{
  axios.get("https://jsonplaceholder.typicode.com/todos/1").then((res)=>{
    console.log(res.data)
  })
}
