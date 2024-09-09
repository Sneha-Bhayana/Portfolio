import React from "react";

function CertificationPage() {
  return (
    <>
      <div className="p-5 mx-5">
        <h1 style={{ textAlign: "center" ,color:"#FFD43B"}}>
          <i class="fa-solid fa-certificate my-5" style={{color:"#FFD43B"}}></i> CERTIFICATES :{" "}
        </h1>
        <div>
          <div
            class="card project my-5"
            style={{
              width: "23rem",
              height: "26rem",
              backgroundColor: "rgba(0, 0, 85, 0.255)",
              color: "white",
              opacity: "0.9",
            }}
          >
            <img
              src="1.jpg"
              class="card-img-top border border-2"
              alt="..."
              style={{ height: "12rem", width: "23rem" }}
            />
            <div class="card-body">
              <h5 class="card-title">Full Stack MERN Dev Course <i class="fa-regular fa-circle-check" style={{color: "#FFD43B"}}></i></h5>
              <p class="card-text" style={{opacity:0.5}}>
                This course was a great learning experience. I learned a lot a about MERN stack.....
              </p>
              <p>Issued by : <a  href=""><b>Apna College</b></a></p>
              <a
                href="1.jpg"
                class="btn btn-danger btn-sm"
              >
                LIVE <i class="fa-solid fa-circle-dot"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CertificationPage;
