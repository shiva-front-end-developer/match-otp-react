import React from "react";

const Tb = ({ data, onRowClick }) => {
  return (
    <center>
      <table
        style={{
          width: "90%",
          borderCollapse: "collapse",
          margin: "20px",
          borderRadius: "5px",
        }}
      >
        <thead>
          <tr
            style={{
              background: "#f2f2f2",
              border: "1px solid black",
              borderRadius: "5px",
            }}
          >
            <th style={tableHeaderStyle}> Name </th>
            <th style={tableHeaderStyle}> Mobile </th>
            <th style={tableHeaderStyle}> Date OF Birth </th>
            <th style={tableHeaderStyle}> Email </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              onClick={() => onRowClick(index)}
              style={tableRowStyle}
            >
              <td style={{ fontSize: "18px" }}>{item.name}</td>
              <td style={{ fontSize: "18px" }}>{item.mobile}</td>
              <td style={{ fontSize: "18px" }}>{item.birthDate}</td>
              <td style={{ fontSize: "18px" }}>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </center>
  );
};

const tableHeaderStyle = {
  padding: "10px",
  borderBottom: "1px solid #ddd",
};

const tableRowStyle = {
  cursor: "pointer",
  background: "	#F5F5F5",
  border: "1px solid black",
  transition: "background 0.3s",
  marginTop: "10px",
  borderRadius: "5px",
};

export default Tb;
