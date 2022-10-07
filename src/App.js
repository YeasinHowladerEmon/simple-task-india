import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import "./App.css";
function App() {
  const [company, setCompany] = useState([]);
  
    axios
      .post("http://demo2211087.mockable.io/mock", {})
      .then((res) => {
        setCompany(res.data.companies);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  
  return (
    <div className="App">
      <h2>Company List</h2>
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        {company.map((list, i) => {
          return (
            <tbody key={i}>
              <tr>
                <th scope="row">{i}</th>
                <td>{list.name}</td>
                <td>{list.email}</td>
                <td>{list.status}</td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
}

export default App;
