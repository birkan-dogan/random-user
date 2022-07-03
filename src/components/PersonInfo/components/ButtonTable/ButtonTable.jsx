import React, { useState } from "react";
import styling from "./ButtonTable.module.css";

const ButtonTable = ({ apiFetcher, fetchPerson }) => {
  const [showTable, setShowTable] = useState(false);
  const [addListToTable, setAddListToTable] = useState([]);
  const addList = () => {
    if (!addListToTable.some((data) => data.email === fetchPerson.email)) {
      setAddListToTable([
        ...addListToTable,
        {
          name: fetchPerson.fullname,
          email: fetchPerson.email,
          phone: fetchPerson.phone,
          age: fetchPerson.age,
        },
      ]);
    }
  };
  return (
    <>
      <div className={styling.buttons}>
        <button className={styling.newuser} onClick={apiFetcher}>
          New User
        </button>
        <button
          className={styling.newuser}
          onClick={() => {
            setShowTable(true);
            addList();
          }}
        >
          Add User
        </button>
      </div>
      <table className={styling.table}>
        {showTable && (
          <>
            <thead>
              <tr className={styling.title}>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {addListToTable?.map((info, id) => {
                return (
                  <tr key={id}>
                    <td>{info.name}</td>
                    <td>{info.email}</td>
                    <td>{info.phone}</td>
                    <td>{info.age}</td>
                  </tr>
                );
              })}
            </tbody>
          </>
        )}
      </table>
    </>
  );
};

export default ButtonTable;
