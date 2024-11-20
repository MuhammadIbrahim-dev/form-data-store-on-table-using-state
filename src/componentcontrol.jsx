import React from 'react'

 function Componentcontrol() {
    let [uname,setuname]=useState('')
    let [upassword,setupassword]=useState('')
    let handlesubmit=(event)=>{
  event.preventDefault()
  console.log(uname,upassword)}
  return (
    <div className="App">
      <div className='continer'>
        <div className='row'>
          <div className='col-lg-6'>
            <form onSubmit={handlesubmit}>
              <div className='text-start my-3'>
              <label>user name</label>
              <input type='text' onChange={(event)=>setuname(event.target.value)} className='form-control' value={uname}/>
              </div> 
              <div className='text-start my-3'>
              <label>user password</label>
              <input type='password'onChange={(event)=>setupassword(event.target.value)} className='form-control' value={upassword}/>
              </div>
              <div>
                <button>login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
          </div>
  )
}
