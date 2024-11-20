import { useState } from "react";
import "./App.css";

function App() {
  let [formData, SetformData] = useState({
    uname: "",
    uemail: "",
    upassword: "",
    umesssage: "",
    index: "",
  });

  let getvalue = (event) => {
    let oldData = { ...formData };
    let inputname = event.target.name;
    let inputvalue = event.target.value;
    oldData[inputname] = inputvalue;
    SetformData(oldData);
  };
  let [userData, setuserData] = useState([]);
  let userhandle = (event) => {
    event.preventDefault();

    let userpreventData = {
      uname: formData.uname,
      uemail: formData.uemail,
      upassword: formData.upassword,
      umessage: formData.umessage,
    };
    let olduserData = [...userData, userpreventData];
    setuserData(olduserData);
  };
  return (
    <div className="container">
      <form onSubmit={userhandle}>
        {userData.length}
        <input
          type="name"
          onChange={getvalue}
          value={formData.uname}
          name="uname"
          placeholder="name"
        />
        <input
          type="text"
          onChange={getvalue}
          value={formData.uemail}
          name="uemail"
          placeholder="email"
        />
        <input
          type="password"
          onChange={getvalue}
          value={formData.upassword}
          name="upassword"
          placeholder="password"
        />
        <input
          type="textarea"
          onChange={getvalue}
          value={formData.umessage}
          name="umessage"
          placeholder="message"
        />
        <button>{formData.index !== "" ? "updae" : "save"}</button>
      </form>

      <table class="tables">
        <thead>
          <tr>
            <th>NO.</th>
            <th>names</th>
            <th>emails</th>
            <th>paswword</th>
            <th>message</th>
          </tr>
        </thead>
        <tbody>
          {userData.length >= 1 ? (
            userData.map((v, i) => {
              return (
                <tr key={i}>
                  <td>{i}</td>
                  <td>{v.uname}</td>
                  <td>{v.uemail}</td>
                  <td>{v.upassword}</td>
                  <td>{v.umessage}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={6}>page is no fond</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
