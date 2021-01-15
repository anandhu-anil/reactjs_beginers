import React, { useState } from "react";
import Navbar from "../components/bars/Navbar";
import "../assets/css/AddUser.css";
import { sendUserDetail } from "../config/Api";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [role, setRole] = useState("");

  const submitFormhandler = async () => {
    let PAYLOAD = { name: name, email: email, phone: phonenumber, role: role };
    try {
      let response = await sendUserDetail(PAYLOAD);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name :</label>
            <input
              type="input"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter name"
              onChange={(event) => {
                setName(event.target.value);
              }}
              defaultValue={name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Email :</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              defaultValue={email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Phone number :</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter phonenumber"
              onChange={(event) => {
                setPhonenumber(event.target.value);
              }}
              defaultValue={phonenumber}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Role :</label>
            <input
              type="input"
              className="form-control"
              placeholder="Enter your choice"
              onChange={(event) => {
                setRole(event.target.value);
              }}
              defaultValue={role}
            />
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                submitFormhandler();
              }}
            >
              Submit details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
