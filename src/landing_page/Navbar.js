import React from "react";

function Navbar() {
  return (
    <>
        <div className="p-3 d-flex justify-content-between " style={{backgroundColor:"rgb(52, 52, 52)"}}>
            <h2><i class="fa-regular fa-gem"></i>  Sneha Bhayana</h2>
            <div className="">
            <button type="button" class="btn btn-primary btn-lg mx-4">Hire Me&nbsp; <i class="fa-solid fa-briefcase"></i></button>
            <button type="button" class="btn btn-light btn-lg"><a href="Sneha CV.pdf" style={{textDecorationLine:"none"}}>Resume &nbsp;<i class="fa-solid fa-file"></i></a></button>
            </div>
        </div>
    </>
  );
}

export default Navbar;
