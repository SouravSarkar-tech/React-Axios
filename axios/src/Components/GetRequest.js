import React, {useState,useEffect} from 'react'
import './GetRequest.css'
import Axios from 'axios'

const GetRequest = () =>{
    const[data,setData] = useState([])
    
    useEffect(() => {
      Axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data)
    }).catch(error  => console.log('There is an Error, Crosscheck the URL once more', error))
    }, [])

    const allTheData  = data.map((value) => {
        return (
          <tr className='row'>
              <td className='no'>{value.id}</td>
              <td className='brief'>{value.title}</td>
              <td className='summary'>{value.body}</td> 
          </tr>
        )
    })
    
  return (
    <div>
        <table>
            <tr>
                <th>No.</th>
                <th>Brief</th>
                <th>Summary</th>
            </tr>
            {allTheData}
        </table>
    </div>
  )
}

export default GetRequest
