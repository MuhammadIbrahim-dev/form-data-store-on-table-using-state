import { useState } from "react";
import "./App.css";

function App() {
  // data collected
  let [formData, SetformData] = useState({
    uname: "",
    uemail: "",
    upassword: "",
    umessage: "",
    index: "",
  });
  // changing___value
  let getvalue = (event) => {
    let oldData = { ...formData };
    let inputname = event.target.name;
    let inputvalue = event.target.value;
    oldData[inputname] = inputvalue;
    SetformData(oldData);
  };

// updating____Data
  let [userData, setuserData] = useState([]);
  let userhandle = (event) => {
    let userpreventData = {
      uname: formData.uname,
      uemail: formData.uemail,
      upassword: formData.upassword,
      umessage: formData.umessage,
    };
    let olduserData = [...userData, userpreventData];
    setuserData(olduserData);
    // double___input_________value____Stopping
    let invalidData=userData.filter((v)=>v.upassword==formData.upassword || v.uemail==formData.uemail)
    if(invalidData.length==1){
      alert('email or  password is already exist')
    }
    else{
  SetformData({
      uname: "",
      uemail: "",
      upassword: "",
      umessage: "",
      index: "",
    })}
        event.preventDefault(); 
  };
  //deleting____data
  let deletedata=(indexnumber)=>{
    let deleteuserdata= userData.filter((v,i)=>i!==indexnumber)
    setuserData(deleteuserdata)
    
  }
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
                  <button className="delete" onClick={()=>deletedata(i)}>delete</button>
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
