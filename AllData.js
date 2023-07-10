import '../App.css';
import React from 'react';
import { UserContext } from './context';

function AllData() {
  const ctx = React.useContext(UserContext);
  const data = ctx.users;
  const tableRows = data.map((item) =>
    <tr>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.password}</td>
      <td>{item.balance}</td> {/* Nouvelle colonne pour afficher la balance */}
    </tr>
  );
  return (
    <>
      <h1>All Data</h1>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Balance</th> {/* Nouvelle entête de colonne pour la balance */}
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    </>
  );
}

export default AllData;