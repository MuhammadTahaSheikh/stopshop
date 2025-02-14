import axios from "axios";
import React, { useState } from "react";

function Test() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { formData, data };

    fetch("https://workflow-automation.podio.com/catch/02l25lataowa418", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(payload),
    })
      .then((response) => {
        console.log("abc", response);
        alert("Form submitted successfully!");
      })
      .catch((error) => {
        console.log("xyz", error);
        alert("There was an error submitting the form.");
      });

    console.log("data", formData);
  };
  const fetchData = () => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        console.log("abc", response);
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("xyz", error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        name :
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">submit</button>
      </form>
      <h1>abc{data.title}</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data &&
            data.map((value, index) => (
              <div key={index}>
                id: {value.id}
                title: {value.title}
                completed:{value.completed}
              </div>
            ))}
        </div>
      )}
      <button onClick={fetchData}>data</button>
    </div>
  );
}

export default Test;
