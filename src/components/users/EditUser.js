import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    address: "",
    tags: ""
  });

  const { name, address, tags } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  });

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`https://admin.digishaala.com/organizations${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`https://admin.digishaala.com/organizations/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Details</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <label htmlFor='name'>Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor='address'>Address</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Address"
              name="address"
              value={address}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor='tags'>Tags</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter tags"
              name="tags"
              value={tags}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block" onClick={() => history.push('/')}>Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
