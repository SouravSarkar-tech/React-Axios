import React, {useState} from 'react'
import './PostRequest.css'
import Axios from 'axios'


const PostRequest = () =>  {
    const[title,setTitle] = useState('')
    const[body,setBody] = useState('')
    
    const inputOneHandler = e =>{
        setTitle(e.target.value)
    }
    const inputTwoHandler = e =>{
        setBody(e.target.value)
    }
    const postData = e => {
        e.preventDefault()
        Axios.post('https://jsonplaceholder.typicode.com/posts', {
            title,
            body
        }).then(response => console.log('Operation Performed, Data Posted', response))
        .catch(error  => console.log('There is an Error, Crosscheck the URL once more', error))
    }
  return (
    <div className='formdiv'>
      <form className='formall'>
          <label>Brief: </label>
          <input type='text' value={title} onChange = {inputOneHandler}/> 
          <br/><br/>
          <label>Summary: </label>
          <input type='text' value={body} onChange = {inputTwoHandler}/> 
          <br/>
          <h2>Click on the button below & Check the console! 😉</h2>
          <button onClick={postData}>Click Here!</button>
      </form>
    </div>
  )
}

export default PostRequest
