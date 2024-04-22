import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import TableData from "./TableData";

const validationSchema = yup.object({
  firstName: yup.string().required("Name is required"),
  phone: yup.string().required("Mobile is required"),
  birthDate: yup.date().required("Date of Birth is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
});

const TodoList = () => {
  const [tableData, setTableData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=5")
      .then((response) => response.json())
      .then((res) => setTableData(res.users));
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      phone: "",
      birthDate: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (selectedRow !== null) {
        setTableData((prevData) => {
          const updateData = [...prevData];
          updateData[selectedRow] = values;
          return updateData;
        });
      } else {
        setTableData((prevData) => [...prevData, values]);
      }
      formik.resetForm();
      setSelectedRow(null);
    },
  });

  const handleDelete = () => {
    if (selectedRow !== null) {
      setTableData((prevData) =>
        prevData.filter((_, index) => index !== selectedRow)
      );
      formik.resetForm();
      setSelectedRow(null);
    }
  };

  const handleRowClick = (index) => {
    formik.setValues(tableData[index]);
    setSelectedRow(index);
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            label="Name"
            name="firstName"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            style={{ width: "40%", margin: "10px" }}
          />
        </div>
        <div>
          <TextField
            label="Mobile"
            name="mobile"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
            helperText={formik.touched.mobile && formik.errors.mobile}
            style={{ width: "40%", margin: "10px" }}
          />
        </div>
        <div>
          <TextField
            label=""
            type="date"
            name="birthDate"
            value={formik.values.dateofbirth}
            onChange={formik.handleChange}
            error={
              formik.touched.dateofbirth && Boolean(formik.errors.dateofbirth)
            }
            helperText={formik.touched.dateofbirth && formik.errors.dateofbirth}
            style={{ width: "40%", margin: "10px" }}
          />
        </div>
        <div>
          <TextField
            label="Email"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            style={{ width: "40%", margin: "10px" }}
          />
        </div>
        <div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ margin: "20px" }}
          >
            Save/Update
          </Button>
          <Button onClick={handleDelete} variant="contained" color="secondary">
            Delete
          </Button>
        </div>
      </form>
      <TableData data={tableData} onRowCick={handleRowClick} />
    </div>
  );
};

export default TodoList;
