import React from 'react'

export default function SkeletonLoading() {
  return (
    <article className="col-lg">
    <div className="bg-loading" style={{ height : "150px"}}></div>
    <div className="bg-loading" style={{ width : "200px" , height : "20px"}}></div>
    <div className="bg-loading" style={{ width : "120px" , height : "20px"}}></div>
 </article>
  )
}
