import React from "react";
// import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";

const useStyles = styled({
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "16px",
  },
  th: {
    backgroundColor: "#f2f2f2",
  },
  td: {
    border: "1px solid black",
    padding: "8px",
    textAlign: "left",
  },
});

const TableData = ({ data, onRowCick }) => {
  const classes = useStyles(styled);

  return (
    <center>
      <table
        className={classes.table}
        style={{
          width: "70%",
          margin: "10px",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        <thead>
          <tr className={classes.th} style={{ border: "1px solid black" }}>
            <th>Name</th>
            <th>Mobile</th>
            <th>DateOFBirth</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} onClick={() => onRowCick(index)}>
              <td className={classes.td}>{item.firstName}</td>
              <td className={classes.td}>{item.phone}</td>
              <td className={classes.td}>{item.birthDate}</td>
              <td className={classes.td}>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </center>
  );
};

export default TableData;
