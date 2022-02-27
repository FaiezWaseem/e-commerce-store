import React from 'react'

export default function Form() {
  return (
    <div className='padding-y'>
             <div className="card">
                    <div className="card-body">
                       <h4 className="mb-4">Sign in</h4>
                       <form>
                          <div className="mb-3"> 
                          <label className="form-label">Email</label>
                           <input name="lorem" className="form-control" placeholder="ex. name@gmail.com" type="email"/> 
                           </div>
                          
                          <div className="mb-3"> 
                          <label className="form-label">Password</label> 
                          <a className="float-end" href="#">Forgot?</a> 
                          <input className="form-control" placeholder="******" type="password"/>
                           </div>
                          
                          <div className="mb-3"> <label className="form-check">
                         <input className="form-check-input" type="checkbox" value="" checked=""/>
                          <span className="form-check-label"> Remember </span> </label> </div>
                          <button className="btn w-100 btn-primary" type="button"> Sign in </button> 
                       </form>
                     
                       <p className="text-divider my-4">New to shop?</p>
                       <a href="#" className="btn w-100 btn-light">Create new account</a> 
                    </div>
                 
                 </div>
    </div>
  )
}
