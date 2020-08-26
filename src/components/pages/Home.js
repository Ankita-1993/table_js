import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  });

  const loadUsers = async () => {
    const result = await axios.get("https://admin.digishaala.com/organizations");
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1 className="text-center mb-4">User List</h1>
        <table class="table border shadow">
          <thead class="thead-light">
            <tr>
              <th scope="col">Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>
                  <Link
                    class="btn btn-primary"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
