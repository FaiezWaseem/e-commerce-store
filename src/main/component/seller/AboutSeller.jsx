import React from 'react';
const img = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAOKADAAQAAAABAAAAOAAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8IAEQgAOAA4AwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAMCBAEFAAYHCAkKC//EAMMQAAEDAwIEAwQGBAcGBAgGcwECAAMRBBIhBTETIhAGQVEyFGFxIweBIJFCFaFSM7EkYjAWwXLRQ5I0ggjhU0AlYxc18JNzolBEsoPxJlQ2ZJR0wmDShKMYcOInRTdls1V1pJXDhfLTRnaA40dWZrQJChkaKCkqODk6SElKV1hZWmdoaWp3eHl6hoeIiYqQlpeYmZqgpaanqKmqsLW2t7i5usDExcbHyMnK0NTV1tfY2drg5OXm5+jp6vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAQIAAwQFBgcICQoL/8QAwxEAAgIBAwMDAgMFAgUCBASHAQACEQMQEiEEIDFBEwUwIjJRFEAGMyNhQhVxUjSBUCSRoUOxFgdiNVPw0SVgwUThcvEXgmM2cCZFVJInotIICQoYGRooKSo3ODk6RkdISUpVVldYWVpkZWZnaGlqc3R1dnd4eXqAg4SFhoeIiYqQk5SVlpeYmZqgo6SlpqeoqaqwsrO0tba3uLm6wMLDxMXGx8jJytDT1NXW19jZ2uDi4+Tl5ufo6ery8/T19vf4+fr/2wBDAAICAgICAgMCAgMEAwMDBAUEBAQEBQcFBQUFBQcIBwcHBwcHCAgICAgICAgKCgoKCgoLCwsLCw0NDQ0NDQ0NDQ3/2wBDAQICAgMDAwYDAwYNCQcJDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ3/2gAMAwEAAhEDEQAAAfv6J+EWvoPwz5lndf0x9G/J/wCpAfrzbc5j8gf1+8ra/Lu+5q56VvOu4P8ATQH0XbcpzV1WV+QDyvediX361/kb+uORVtsG1XaavzWP+kW0H50/oiXLbbKf/9oACAEBAAEFAu3ifxpY7Fbr+tLcxDsfiXb96t+/jXxheTbnLjM4oEkJBiHgfxZdz3T4PdJebc20unMxkmlrF4Mmw3vtuXhHw/c2kcfLVXojjMz2zwvsW2I7TmkKvbTrHtut73vDjZqNWk6WCqXw4dr6Jc1l/suPFr/2XXiylv8AV74rTMiuL//aAAgBAxEBPwHu89g1rX//2gAIAQIRAT8BjG0Ywzw+sdImmLKddmb0190spE6f/9oACAEBAAY/Auyk2ykXN5wTEDoP7RD5iLO3P2qcZEiY7kpGcJOoPw9fuTbXaSmK2gPLVjpmocXRWoLrX4HXWvqwQo9PA11adpv1mZK/3Sz7QI8u91c/tSrX/vTqwQ6B2Sz/AKakfj3uEiwhC1oXQhNOoji+X6cf8lpX8XyBxJxH9TjNtZRJkSB10qa/b3kPoktavUlhLt/92I/UfuTq9I1/wdkuH/dqP4fuTwxe2uJaU/Mh/wCLx/7mS/8AFo/9zJaJDboTioH96nyYrxp2/8QAMxABAAMAAgICAgIDAQEAAAILAREAITFBUWFxgZGhscHw0RDh8SAwQFBgcICQoLDA0OD/2gAIAQEAAT8h/wCMiaSHyPAg65r5p0c/7rhlI6PuuE8J/wDg0EZsuVU2JwPVQzRJkdqmaZZJrljqguvZQj3zS+mi5EmT2Pvj/iwV6qvP9gmzh/NhxRP4quuRP5KzTD+I/v8A7q1qwIjHc7Yhcr8Mfzfok02ePzp/o15wssc5mTz/ANg3t/q5Xz+NN+TDdB8D8j/VOD/rgdr8OyV82BvDZ/1J+t4vj/vZokxvD92Pv/x80OL9P+2m+trvT0tAPiE/P/P/2gAMAwEAAhEDEQAAEEMxACuDgBmKQAEEwP/EADMRAQEBAAMAAQIFBQEBAAEBCQEAESExEEFRYSBx8JGBobHRweHxMEBQYHCAkKCwwNDg/9oACAEDEQE/ELWF+fwa9vT8AEGef//aAAgBAhEBPxDTkPjuIH9jw9Scizp3vh3B9Lp4PHtfP//aAAgBAQABPxCqBLgVKkjNZrIyRKTBhLQiOCUU9QDZ90LUA3REIdWjOYf/AMCG6SKyINDIjCSeag5hAS55HzQwOzHtDCUQEXRsUJZuxEdx8zXsHyRg3TiHJHMf8PhQV+Cz2lKXV/u6KHnh6WKlZlLBs8j8WRmEQ84fmLKhKPbP/kgiOjYLXXw4lGGfKrt/8weStYL1Qnwv+qjEHNwp/shRaLEiLLk8iEj/AKqCEB+G30pnkKD8sv3QMdD9U+XG/wCLMrHLiD/vMob8ps7ctqnvINLsn2Kfpv4/7BvxgNHeiRvVXgR8kA+dlTaCMh/YH81GcWYwMj1qH8AmZgBO/P8Az//Z"
const Aboutseller = () => {
    return (
        <div>
                    <article className="card">
        <div className="card-body">
           <h5 className="card-title">About seller</h5>
           <div className="itemside mb-4">
              <div className="aside">
                   <img src={img} width="60" height="60" className="img-sm img-thumbnail"/> 
                   </div>
              <div className="info">
                 <a href="#" className="h6 title">Texnoshop LLC</a> 
                 <div className="rating-wrap">
                    <ul className="rating-stars">
                       <li className="stars-active" style={{ width : "70%"}}> 
                       <img src="assets/images/stars-active.svg" alt="" /> </li>
                       <li> <img src="assets/images/starts-disable.svg" alt=""/> </li>
                    </ul>
                    <span className="label-rating text-muted">120 feedback</span> 
                 </div>
          
                 <p> <img height="20" src="assets/images/flag-usa.png" /> United States, 2 years</p>
              </div>
           </div>
           <p> Established in 1980, lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore et dolore ipsum </p>
           <div className="d-flex gap-2 mb-2"> <button className="btn w-100 btn-success" type="button"> <i className="me-2 fa fa-phone"></i> Contact</button> <button className="btn w-100 btn-warning" type="button"> <i className="me-2 fa fa-comment-dots"></i> Message</button> </div>
           <a className="btn w-100 btn-outline-danger">Report</a> 
        </div>
     </article>
        </div>
    );
}

export default Aboutseller;
