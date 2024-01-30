import { React, useState, useEffect } from 'react'
import axios from "axios";
import "../Master.css";
import { Button } from '@mui/material';
export const ListUser = () => {
    
    const [users, setUsers] = useState([]);
    const loadUsers = async() => {
        const res = await axios.get("https://expense-backend-tan.vercel.app/user/user");
        console.log(res.data.data);
        setUsers(res.data.data);
    }
    const deleteUser = async id => {
        await axios.delete(`https://expense-backend-tan.vercel.app/user/user/${id}`);
        loadUsers();
    }
    const updateUser = async id => {
        await axios.put(`https://expense-backend-tan.vercel.app/user/user/${id}`);
        loadUsers();
    }

    useEffect(() => {
        loadUsers();
    }, []);
    return (
    <div> <h2>List User</h2>
        <table class="table table-striped table-hover table-bordered border-primary table-responsive-md text-center">
    <thead>
        <tr>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile No.</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>

<<<<<<< HEAD
        </tr>
    </thead>
    <tbody>
        {users.map((user, index) => (
        <tr key={index}>
            {/* <td>{user.id}</td> */}
            <td>{user.fname}</td>
            <td>{user.lname}</td>
            <td>{user.email}</td>
            <td>{user.mobile_no}</td>
            <td>{user.status}</td>
            <td>
                <Button id='button-edit' variant="outlined" color="primary" onClick={updateUser}>Update</Button>
                <Button variant="outlined" color="error" onClick={deleteUser}>Delete</Button>
            </td>
        </tr>
        ))}
    </tbody>
    </table>
=======
export const Login = () => {
    const { register, handleSubmit} = useForm();
    const submitHandler = async(data) => {

      const formData = new FormData();  
      formData.append("email", data.email);
      formData.append("password", data.password);
      try{
      const res = await axios.post("https://expense-backend-tan.vercel.app/user/loginwithenc", data)
      console.log(res.data);

      localStorage.setItem('token', res.data.token);
      // localStorage.setItem('user', res.data.user);
      const user = localStorage.getItem('user');
      const token = localStorage.getItem('token');
     console.log(token);

     console.log("Login Successful");
     toast.success('Logged In Successfully!', {
       position: "top-right",
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "light",
       transition: Bounce,
       });
      }
      catch(err){
        console.log(err);
      }
      

    };
  return (
    <div>
        <h2>Login</h2>
        <TextField id="outlined-basic" label="E-mail" variant="outlined" {...register("email")} /><br /><br />
        <TextField id="outlined-basic" label="Password" variant="outlined" {...register("password")} /><br /><br />
        <Button type="submit" variant="outlined" onClick={handleSubmit(submitHandler)}>Submit</Button>
        <ToastContainer />
{/* Same as */}
<ToastContainer />
>>>>>>> 9a295a5b45491d4ccf68dbdc998c7f1379a0c1a3
    </div>
  )
}
