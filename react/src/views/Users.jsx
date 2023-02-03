import { useState } from "react"
import { Link } from "react-router-dom"
import axiosClient from "../axios-client.js"

export default function Users(){
   const [user, getUser] = useState([])
   axiosClient.get('/users')
   .then(({data})=>{
      getUser(data.data)
   })
   .catch(() => {
      console.log('error');
    })
    return(
      <div>
      <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
        <h1>Users</h1>
        <Link className="btn-add" to="">Add new</Link>
      </div>
      <div className="card animated fadeInDown">
        <table>
          <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Create Date</th>
            <th>Actions</th>
          </tr>
          </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td>mamoon</td>
                <td>mamoon@gmail.com</td>
                <td>05.02.2023</td>
                <td>
                  <Link className="btn-edit" to=''>Edit</Link>
                  &nbsp;
                  <button className="btn-delete">Delete</button>
                </td>
              </tr>
            </tbody>
        </table>
      </div>
    </div>
    )
}
