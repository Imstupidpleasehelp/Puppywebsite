import React from "react";

import useTitle from "../hooks/useTitle";

function BreedInfo() {
  useTitle("JYMR Doodles");
  return (
    <div className="container-fluid innerpage">
      <h1 className="breedinfotitle ">Doodle facts</h1>
      <div className="row puppyrow ">
      <div className="col-sm-4">
          <img
            className="breedinfoimg  img-fluid "
            
            src="./puppies/flower.jpg"
            alt="poodle"
          /><h3 className="breedinfo">Poodles</h3>
          <p className="homeinfo ">
            The Poodle is a dog breed that comes in three varieties: Standard
            Poodle, Miniature Poodle, and Toy Poodle. The origin of the breed is
            still discussed, with a prominent dispute over whether the poodle
            descends from Germany as a type of water dog, or from the French
            Barbet.
          </p> 
          
        </div>
        <div className="col-lg-4">
        <img
            className="breedinfoimg img-fluid  "
           
            src="./puppies/sleepybow.JPG"
            alt="Labradoodle"
          /><h3 className="breedinfo">Labradoodles</h3>
          <p className="homeinfo ">
            A Labradoodle is a crossbreed dog created by
            crossing the Labrador Retriever and the Standard, Miniature, or Toy
            poodle. The term first appeared in 1955, but was not initially
            popular. Labradoodles are sometimes good choice for those with
            canine dander allergies, as they are capable of possessing the same
            hypoallerginc coat as their poodle ancestors, assuming that the have
            been produced by a breeder well versed in genetic testing and
            selective breeding.
          </p>
          
        </div>
        <div className="col-lg-4">
        
          <img
            className="breedinfoimg img-fluid"
            
            src="./puppies/smiledog.jpg"
            alt="Goldendoodle"
          /><h3 className="breedinfo">GoldenDoodle </h3>
          <p className="homeinfo ">
            A Goldendoodle is a dog crossbreed bred from a Golden Retriever and
            a Poodle, their name is a portmanteau of Golden Retriever and
            Labradoodle. Whilst primarily bred as companion dogs,
            Goldendoodles have been successfully trained as therapy dogs, guide
            dogs and other forms of assistance dogs.
          </p>
          
      
        
        
        </div>
      </div>
    </div>
  );
}
export default BreedInfo;
