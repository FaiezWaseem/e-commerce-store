import React from 'react'
import "../../assets/css/card.css"
export default function Card({item}) {
  return (
        <div className="col-6 col-lg-3 mt-3">
					 <div className="app-card app-card-stat shadow-sm h-100">
						    <div className="app-card-body p-3 p-lg-4">
							    <h4 className="stats-type mb-1">{item.title}</h4>
							    <div className="stats-figure" id="total_users">{item.value}</div>
							    <div className="stats-meta text-success">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"></path>
</svg>
								    {item.per} 
                                    </div>
						    </div>
						    <a className="app-card-link-mask" href="#"></a>
					    </div>
				    </div>
  )
}
