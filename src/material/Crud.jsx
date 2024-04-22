import React, { useState } from "react";
import Data from "./Data";
import { useEffect } from "react";

const Crud = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    date: "",
  });

  const [tableData, setTableData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=5")
      .then((res) => res.json())
      .then((data) => setTableData(data.users));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.mobile ||
      !formData.birthDate
    ) {
      alert("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Mobile number validation
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(formData.mobile)) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    // Date validation (optional, depending on requirements)
    const currentDate = new Date();
    const selectedDate = new Date(formData.birthDate);
    if (selectedDate > currentDate) {
      alert("Please select a date of birth in the past");
      return;
    }

    // If all validations pass, proceed with saving data
    setTableData((prevData) => [...prevData, formData]);
    setFormData({ name: "", email: "", mobile: "", birthDate: "" });
  };

  const handleUpdate = () => {
    if (selectedRow !== null) {
      setTableData((prevData) => {
        const updateData = [...prevData];
        updateData[selectedRow] = formData;
        return updateData;
      });
    }
    setFormData({ name: "", mobile: "", date: "", email: "" });
    setSelectedRow();
  };

  const handleDelete = () => {
    if (selectedRow !== null) {
      setTableData((prevData) =>
        prevData.filter((e, index) => index !== selectedRow)
      );
    }
    setFormData({ name: "", mobile: "", date: "", email: "" });
    setSelectedRow(null);
  };

  const handleOnRowClick = (index) => {
    setFormData(tableData[index]);
    setSelectedRow(index);
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="date">Date of birth</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </form>
      <Data data={tableData} onRowClick={handleOnRowClick} />
    </div>
  );
};

export default Crud;
