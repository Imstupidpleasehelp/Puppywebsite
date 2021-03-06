import React from "react";
import useTitle from "../hooks/useTitle";

import useFavicon from "../hooks/useFavicon";
import _ from "lodash";

function Goldendoodles({ propdata }) {
  const goldendoodles = _.get(propdata, "goldendoodles", []);
  const NOMOREGOLDENDOODLES = _.get(propdata, "NOMOREGOLDENDOODLES", []);
  const goldendoodlewaitlist = _.get(propdata, "poodlewaitlist", []);
  useFavicon("./assets/goldendoodleiconfinal.png");
  useTitle("Your Next Dog");

  return (
    <div className="container-fluid innerpage ">
      <div className="puppyseperator">
        <h1 className="innerpagetitle">Goldendoodles! </h1>

        <p className="innerpagesubtitle">
          I don't know how to describe them, but they sure are cute.
        </p>
        {NOMOREGOLDENDOODLES.map((NOMOREGOLDENDOODLES) => (
          <h1>{NOMOREGOLDENDOODLES.message}</h1>
        ))}
      </div>

      <div className="row puppyrow no-gutters prva">
        {goldendoodles.map((goldendoodles) => (
          <div className="col-sm-4 " key={goldendoodles.name}>
            <img
              className="homecard frame"
              src={goldendoodles.image}
              alt={goldendoodles.name}
            />
            <h1 className="puppyname">{goldendoodles.name}</h1>

            <p className="puppysubtitle">{goldendoodles.description}</p>
          </div>
        ))}
      </div>
      <h1 className="puppytitle"> Wait list</h1>
      <div className="row">
         
         {goldendoodlewaitlist.map((goldendoodlewaitlist) => (
             <div className="col-sm-4"  key={goldendoodlewaitlist.name}>
             
               <h1 className="puppyname">{goldendoodlewaitlist.name}</h1>
 <p className="puppysubtitle">{goldendoodlewaitlist.number}</p>
               <p className="puppysubtitle">Reserved on: {goldendoodlewaitlist.date}</p>
             </div>
           ))}
           </div>
    </div>
  );
}
export default Goldendoodles;
