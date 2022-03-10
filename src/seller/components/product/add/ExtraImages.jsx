import React from 'react'

export default function ExtraImages() {

    const [thumb , setThumb] = React.useState(null);
  return (
    <div className="row mb-4">
    <label className="col-3 col-form-label"> Extra Images (max 5 allowed) <br/> <small className="text-muted">(Max size 8 mb)</small> </label> 
    <div className="col-9">
       <div className="gallery-uploader-wrap">
       <form  encType='multipart-formdata'>
          <label style={{ width : "80px" , height : "80px"}} className="uploader-img">
             <input type="file" name="thumbnail"   accept="image/png, image/jpeg"  onChange={(e)=> setThumb(URL.createObjectURL(e.target.files[0]))} /> 
             { thumb!=null?<img src={thumb} alt="no-image-selected" style={{ width : "80px" , height : "80px"}} /> :    <svg xmlns="http://www.w3.org/2000/svg" fill="#999" width="32" height="32" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M16.83 4L15 2H9L7.17 4H2v16h20V4h-5.17zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path>
             </svg> }
          </label>
          <label style={{ width : "80px" , height : "80px"}} className="uploader-img">
             <input type="file" name="thumbnail"   accept="image/png, image/jpeg"  onChange={(e)=> setThumb(URL.createObjectURL(e.target.files[0]))} /> 
             { thumb!=null?<img src={thumb} alt="no-image-selected" style={{ width : "80px" , height : "80px"}} /> :    <svg xmlns="http://www.w3.org/2000/svg" fill="#999" width="32" height="32" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M16.83 4L15 2H9L7.17 4H2v16h20V4h-5.17zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path>
             </svg> }
          </label>
          <label style={{ width : "80px" , height : "80px"}} className="uploader-img">
             <input type="file" name="thumbnail"   accept="image/png, image/jpeg"  onChange={(e)=> setThumb(URL.createObjectURL(e.target.files[0]))} /> 
             { thumb!=null?<img src={thumb} alt="no-image-selected" style={{ width : "80px" , height : "80px"}} /> :    <svg xmlns="http://www.w3.org/2000/svg" fill="#999" width="32" height="32" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M16.83 4L15 2H9L7.17 4H2v16h20V4h-5.17zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path>
             </svg> }
          </label>
          <label style={{ width : "80px" , height : "80px"}} className="uploader-img">
             <input type="file" name="thumbnail"   accept="image/png, image/jpeg"  onChange={(e)=> setThumb(URL.createObjectURL(e.target.files[0]))} /> 
             { thumb!=null?<img src={thumb} alt="no-image-selected" style={{ width : "80px" , height : "80px"}} /> :    <svg xmlns="http://www.w3.org/2000/svg" fill="#999" width="32" height="32" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M16.83 4L15 2H9L7.17 4H2v16h20V4h-5.17zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path>
             </svg> }
          </label>
          <label style={{ width : "80px" , height : "80px"}} className="uploader-img">
             <input type="file" name="thumbnail"   accept="image/png, image/jpeg"  onChange={(e)=> setThumb(URL.createObjectURL(e.target.files[0]))} /> 
             { thumb!=null?<img src={thumb} alt="no-image-selected" style={{ width : "80px" , height : "80px"}} /> :    <svg xmlns="http://www.w3.org/2000/svg" fill="#999" width="32" height="32" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M16.83 4L15 2H9L7.17 4H2v16h20V4h-5.17zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path>
             </svg> }
          </label>
       </form>
       </div>
       
    </div>

 </div>
  )
}
