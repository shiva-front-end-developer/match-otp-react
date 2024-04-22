import React, { useState } from "react";
import Tb from "./Tb";

const Td = () => {
  const [input, setInput] = useState({
    name: "",
    mobile: "",
    birthDate: "",
    email: "",
  });
  const [tableData, setTableData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    setTableData((prevData) => [...prevData, input]);
    setInput({ name: "", mobile: "", birthDate: "", email: "" });
  };

  const handleUpdateClick = () => {
    if (selectedRow !== null) {
      setTableData((prevData) => {
        const updateData = [...prevData];
        updateData[selectedRow] = input;
        return updateData;
      });
    }
    setInput({ name: "", mobile: "", birthDate: "", email: "" });
    setSelectedRow(null);
  };

  const handleDeleteClick = () => {
    if (selectedRow !== null) {
      setTableData((prevData) =>
        prevData.filter((e, index) => index !== selectedRow)
      );
    }
    setInput({ name: "", mobile: "", birthDate: "", email: "" });
    setSelectedRow(null);
  };

  const handleRowClick = (index) => {
    setInput(tableData[index]);
    setSelectedRow(index);
  };
  return (
    <div
      style={{ border: "2px solid black", borderRadius: "7px", width: "50%" }}
    >
      <h2>Todo List </h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label
            htmlFor="name"
            style={{ fontSize: "20px", fontWeight: "bold", color: "green" }}
          >
            Name :{" "}
          </label>
          <br />
          <input
            type="text"
            style={{
              width: "50%",
              padding: "8px",
              borderRadius: "7px",
              margin: "10px 0 10px 0",
            }}
            name="name"
            value={input.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="mobile"
            style={{ fontSize: "20px", fontWeight: "bold", color: "green" }}
          >
            Mobile :{" "}
          </label>
          <br />
          <input
            type="text"
            style={{
              width: "50%",
              padding: "8px",
              borderRadius: "7px",
              margin: "10px 0 10px 0",
            }}
            name="mobile"
            value={input.mobile}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="birthDate"
            style={{ fontSize: "20px", fontWeight: "bold", color: "green" }}
          >
            Date OF Birth :
          </label>
          <br />
          <input
            type="date"
            name="birthDate"
            style={{
              width: "50%",
              padding: "8px",
              borderRadius: "7px",
              margin: "10px 0 10px 0",
            }}
            value={input.birthDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            style={{ fontSize: "20px", fontWeight: "bold", color: "green" }}
          >
            Email :{" "}
          </label>
          <br />
          <input
            type="email"
            name="email"
            style={{
              width: "50%",
              padding: "8px",
              borderRadius: "7px",
              margin: "10px 0 10px 0",
            }}
            value={input.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            onClick={handleSaveClick}
            style={{
              padding: "10px",
              borderRadius: "10px",
              fontSize: "20px",
              fontWeight: "bold",
              background: "green",
              color: "white",
              margin: "5px 10px 5px 10px",
            }}
          >
            {" "}
            Save
          </button>
          <button
            onClick={handleUpdateClick}
            style={{
              padding: "10px",
              borderRadius: "10px",
              fontSize: "20px",
              fontWeight: "bold",
              background: "green",
              color: "white",
              margin: "5px 10px 5px 10px",
            }}
          >
            Update
          </button>
          <button
            onClick={handleDeleteClick}
            style={{
              padding: "10px",
              borderRadius: "10px",
              fontSize: "20px",
              fontWeight: "bold",
              background: "green",
              color: "white",
              margin: "5px 10px 5px 10px",
            }}
          >
            Delete
          </button>
        </div>
      </form>
      <Tb data={tableData} onRowClick={handleRowClick} />
    </div>
  );
};

export default Td;
