import React from 'react';


import _ from "lodash";

function Reviews({propdata}) {
    
  const reviews = _.get(propdata, "reviews", []);

  return( 
    <div className="container-fluid innerpage">
<div className="row  ">

  
{reviews
          .filter((x) => x.image !== "")
          .map((reviews) => (
            
            <div className="col-lg-12" key={reviews.name}>
              <div className="centertext">
              <img
                className=""
               
                src={reviews.image}
                alt={reviews.name}
              />
            </div>
              
              
              
              <h4 className="puppyname centertext">"{reviews.testimonial}"</h4>
<p className="puppytitle">-{reviews.owner}</p>
            </div>
          ))} 
          
        </div></div>
  )

}
export default Reviews