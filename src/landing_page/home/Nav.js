import React from "react";

function Nav() {
  

  return (

    <div
      className="navlinks border-bottom border-secondary border-1"
      style={{ backgroundColor: "black", height: "70px", width: "100%" }}
    >
      <button
        type="button"
        class="btn btn-lg  px-4 rounded-3  mt-2"
        style={{ color: "white" }}
      >
        <a href="/about">About</a>
        
      </button>
      <button
        type="button"
        class="btn  btn-lg px-4 rounded-3 mt-2 "
        style={{ color: "white" }}
        
      >
        <a href="/education">Education</a>
        
      </button>
      <button
        type="button"
        class="btn  btn-lg px-4 rounded-3 mt-2 "
        style={{ color: "white" }}
      >
        <a href="/skills">Skills</a>
        
      </button>
      <button
        type="button"
        class="btn  btn-lg px-4 rounded-3 mt-2 "
        style={{ color: "white" }}
      ><a href="/certificates"> Certifications</a>
       
      </button>
      <button
        type="button"
        class="btn  btn-lg px-4 rounded-3 mt-2 "
        style={{ color: "white" }}
      >
        <a href="/projects">Projects</a>
        
      </button>
    </div>
  );
}

export default Nav;
