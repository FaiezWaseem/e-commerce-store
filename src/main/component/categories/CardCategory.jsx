import React from 'react'
import {useNavigate} from 'react-router-dom';
export default function CardCategory({ info }) {
    const history = useNavigate()
  return (
    <div className="col-lg-4 col-md-6 mt-2"  onClick={()=>history('/search/'+info.type)} >
    
    <article className="card-banner" style={{
         height : "250px",
         backgroundImage : `url(${info.url})`
    }}>
       <div className="text-bottom">
          <h5 className="mb-0 text-white"> {info.title}<br/> Get {info.offer}% offer </h5>
       </div>
    </article>
   
 </div>
  )
}
