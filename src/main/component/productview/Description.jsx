import React from 'react'

export default function Description() {
  return (
    <div>
               <div className="card">
                    <header className="card-header">
                       <ul className="nav nav-tabs card-header-tabs">
                          <li className="nav-item"> <a  className="nav-link active" aria-current="true">Description</a> </li>
                       </ul>
                    </header>
                    <article className="card-body">
                       <p>With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                       <ul className="list-check cols-two">
                          <li>Some great feature name here </li>
                          <li>Lorem ipsum dolor sit amet, consectetur </li>
                          <li>Duis aute irure dolor in reprehenderit </li>
                          <li>Optical heart sensor </li>
                          <li>Easy fast and ver good </li>
                          <li>Some great feature name here </li>
                          <li>Modern style and design</li>
                       </ul>
                       <hr/>
                       <dl className="row">
                          <dt className="col-sm-3">Display</dt>
                          <dd className="col-sm-9">13.3-inch LED-backlit display with IPS</dd>
                          <dt className="col-sm-3">Processor</dt>
                          <dd className="col-sm-9">2.3GHz dual-core Intel Core i5</dd>
                          <dt className="col-sm-3">Camera</dt>
                          <dd className="col-sm-9">720p FaceTime HD camera</dd>
                          <dt className="col-sm-3">Memory</dt>
                          <dd className="col-sm-9">8 GB RAM or 16 GB RAM</dd>
                          <dt className="col-sm-3">Graphics</dt>
                          <dd className="col-sm-9">Intel Iris Plus Graphics 640</dd>
                       </dl>
                    </article>
                 </div>
    </div>
  )
}
