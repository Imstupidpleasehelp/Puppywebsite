import React from "react";
import useTitle from "../hooks/useTitle";

import useFavicon from "../hooks/useFavicon";
import _ from "lodash";

function Labradoodles({ propdata }) {
  const labradoodles = _.get(propdata, "labradoodles", []);
  const NOMORELABRADOODLES = _.get(propdata, "NOMORELABRADOODLES", []);

  useFavicon('./assets/labradoodleiconfinal.png');
  useTitle("Labradoodles");

  return (
    <div className="container-fluid innerpage" >
     
        <div className="puppyseperator">
          <h1 className="innerpagetitle">Labradoodles</h1>
          <p className="innerpagesubtitle">50% poodle, 50% labrador, 100% love</p>
          {NOMORELABRADOODLES.map((NOMORELABRADOODLES) => (
          <h1>{NOMORELABRADOODLES.message}</h1>
        ))}
        </div>

        <div className="row puppyrow ">
          {labradoodles.map((labradoodles) => (
            <div className="col-sm-4"  key={labradoodles.name}>
              <img
                className="homecard frame"
               
                src={labradoodles.image}
                alt={labradoodles.name}
              />
              <h1 className="puppyname">{labradoodles.name}</h1>

              <p className="puppysubtitle">{labradoodles.description}</p>
            </div>
          ))}
        </div>
      </div>
  );
}
export default Labradoodles;
