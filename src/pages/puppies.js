import React from "react";
import useTitle from "../hooks/useTitle";

import _ from "lodash";

function Puppies({ propdata }) {
  const poodles = _.get(propdata, "poodles", []);
  const labradoodles = _.get(propdata, "labradoodles", []);
  const goldendoodles = _.get(propdata, "goldendoodles", []);

  useTitle("Your Next Dog");

  return (
    <div className="container-fluid innerpage" >
      <div className="puppyseperator">
          <h1>Poodles!</h1>
          <p>Our best sellers</p>
        </div>

        <div className="row puppyrow no-gutters prva">
          {poodles.map((poodles) => (
            <div className="col-sm-4" style={{ width: "20rem" }} key={poodles.name}>
              <img
                className="homecard puppycard frame"
                
                src={poodles.image}
                alt={poodles.name}
              />
              <h1 className="puppyname">{poodles.name}</h1>
              <p className="puppysubtitle">{poodles.price}</p>

              <p className="cardesc">{poodles.description}</p>
            </div>
          ))}
        </div>
      
        <div className="puppyseperator">
          <h1>Labradoodles</h1>
          <p>50% poodle, 50% labrador, 100% love</p>
        </div>

        <div className="row puppyrow no-gutters prva">
          {labradoodles.map((labradoodles) => (
            <div className="col-sm-4" style={{ width: "20rem" }} key={labradoodles.name}>
              <img
                className="homecard frame"
                
                src={labradoodles.image}
                alt={labradoodles.name}
              />
              <h1 className="puppyname">{labradoodles.name}</h1>
              <p className="puppysubtitle">{labradoodles.price}</p>

              <p className="cardesc">{labradoodles.description}</p>
            </div>
          ))}
        </div>
      
        <div className="puppyseperator">
          <h1>Goldendoodles! </h1>
          <p>I don't know how to describe them, but they sure are cute.</p>
        </div>

        <div className="row puppyrow no-gutters prva">
          {goldendoodles.map((goldendoodles) => (
            <div className="col-sm-4" style={{ width: "20rem" }} key={goldendoodles.name}>
              <img
                className="homecard frame"
               
                src={goldendoodles.image}
                alt={goldendoodles.name}
              />
              <h1 className="puppyname">{goldendoodles.name}</h1>
              <p className="puppysubtitle">{goldendoodles.price}</p>

              <p className="cardesc">{goldendoodles.description}</p>
            </div>
          ))}
        </div>
      
    </div>
  );
}
export default Puppies;
