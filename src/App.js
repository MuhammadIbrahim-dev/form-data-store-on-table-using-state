import { useState } from "react";
import "./App.css";
import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";

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
    // change__value__use___if__else
if(formData.index===""){
  let olduserData = [...userData, userpreventData];
    setuserData(olduserData);
    // double___input_________value____innsert data
    let invalidData=userData.filter((v)=>v.upassword===formData.upassword || v.uemail===formData.uemail)
    if(invalidData.length===1){
      alert('email or  password is already exist')
    }
    else{
  SetformData({
      uname: "",
      uemail: "",
      upassword: "",
      umessage: "",
      index: ""
    })}
    // updating____logic
}else{
let oldindex = formData.index;
let oldData=userData;
let invalidData=userData.filter((v,i)=>(v.upassword===formData.upassword || v.uemail===formData.uemail) && i!==oldindex)
if(invalidData.length===0){
  oldData[oldindex]['uname']=formData.uname
 oldData[oldindex]['uemail']=formData.uemail
 oldData[oldindex]['upassword']=formData.upassword
 oldData[oldindex]['umessage']=formData.umessage
setuserData(oldData)
alert("your change email or password")
SetformData({
  uname: "",
  uemail: "",
  upassword: "",
  umessage: "",
  index: ""
})
}else{
  alert("this email is already exsist")
  SetformData({
    uname: "",
    uemail: "",
    upassword: "",
    umessage: "",
    index: ""
  })
}

}
    
        event.preventDefault(); 
  };
  //deleting____data
  let Deletedata=(indexnumber)=>{
    let deleteuserdata= userData.filter((v,i)=>i!==indexnumber)
    setuserData(deleteuserdata)

  }
  // edit___row____data

  let editRow=(indexnumber)=>{
    alert("email or password will change you !")
    let editData=userData.filter((v,i)=>i==indexnumber)[0]
    editData[`index`]=indexnumber;
    SetformData(editData)
  }
  return (
    <div className="container">
      <form onSubmit={userhandle}>
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
        <button>{formData.index !== "" ? "update" : "save"}</button>

       
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
          {userData.length>=1 ? (
            userData.map((v,i) => {
              return (
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>{v.uname}</td>
                  <td>{v.uemail}</td>
                  <td>{v.upassword}</td>
                  <td>{v.umessage}</td>
                  <button className="delete" onClick={()=> Deletedata(i)}>delete</button>
                  <button onClick={()=>editRow (i)}>edit</button>
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
