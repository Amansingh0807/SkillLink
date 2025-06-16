import React, { useState } from "react";
<<<<<<< HEAD
import upload from "../../utils/upload";
import "./Register.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

function Register() {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = await upload(file);
    try {
      await newRequest.post("/auth/register", {
        ...user,
        img: url,
      });
      navigate("/")
    } catch (err) {
      console.log(err);
=======
import "./Register.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  // eslint-disable-next-line no-unused-vars
  const [file, setFile] = useState(null);
  const [name, setName] = useState('')
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUserName] = useState("")


  const navigate = useNavigate();

  const handleChange = () => {
    /*setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });*/
  };

  {/*const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };*/}
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`https://skilllink.onrender.com/api/v1/user/auth/register`, {
        username,
        name,
        email,
        password
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,

      });

      navigate("/")
    } catch (err) {
      navigate("/error")
>>>>>>> 2bc3847 (additions)
    }
  };
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="">Username</label>
          <input
            name="username"
            type="text"
<<<<<<< HEAD
            placeholder="Ramesh..."
            onChange={handleChange}
=======
            placeholder="@jhon_doe"
            onChange={(e) => setUserName(e.target.value)}
          />
          <label htmlFor="">Name</label>
          <input
            name="Name"
            type="text"
            placeholder="jhon"
            onChange={(e) => setName(e.target.value)}
>>>>>>> 2bc3847 (additions)
          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="email"
<<<<<<< HEAD
            onChange={handleChange}
          />
          <label htmlFor="">Password</label>
          <input name="password" type="password" onChange={handleChange} />
=======
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="">Password</label>
          <input name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
>>>>>>> 2bc3847 (additions)
          <label htmlFor="">Profile Picture</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <label htmlFor="">Country</label>
          <input
            name="country"
            type="text"
            placeholder="Usa"
            onChange={handleChange}
          />
          <button type="submit">Register</button>
        </div>
<<<<<<< HEAD
        <div className="right">
=======
        {/*<div className="right">
>>>>>>> 2bc3847 (additions)
          <h1>I want to become a seller</h1>
          <div className="toggle">
            <label htmlFor="">Activate the seller account</label>
            <label className="switch">
              <input type="checkbox" onChange={handleSeller} />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="">Phone Number</label>
          <input
            name="phone"
            type="text"
            placeholder="xxxxxxxxx"
            onChange={handleChange}
          />
          <label htmlFor="">Description</label>
          <textarea
            placeholder="A short description of yourself"
            name="desc"
            id=""
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
<<<<<<< HEAD
        </div>
=======
        </div>*/}
>>>>>>> 2bc3847 (additions)
      </form>
    </div>
  );
}

export default Register;
