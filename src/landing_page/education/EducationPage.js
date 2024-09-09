import React from "react";

function EducationPage() {
  return (
    <>
      <div className="p-5 my-4 mx-5">
        <h1 className="py-5" style={{ textAlign: "center" ,color:"#FFD43B" }}>
          <i class="fa-solid fa-graduation-cap" style={{color:"#FFD43B"}}></i> EDUCATION{" "}
          <i class="fa-solid fa-graduation-cap"></i>
        </h1>

        <div
          className="border border-2 py-4 px-5 education"
          style={{
            height: "290px",
            width: "520px",
          }}
        >
          <a href="" className="fs-5" style={{ textDecorationLine: "none" }}>
            2022-2026
          </a>
          <h2 className="pt-2 bold">Bachelor of Technology</h2>
          <p className="fs-5">
            Computer Science and Engineering student from Maharshi Dayanand
            University, Rohtak
          </p>
        </div>

        <div className="d-flex justify-content-end">
          <div
            className="border border-2 py-4 px-5 education"
            style={{
              height: "280px",
              width: "500px",
            }}
          >
            <a href="" className="fs-5" style={{ textDecorationLine: "none" }}>
              2021-2022
            </a>
            <h2 className="pt-2 bold">Central Board of Secondary (CBSE)</h2>
            <p className="fs-6">
              From Shiksha Bharti Senior Secondary School, Rohtak, Haryana ,
              affiliated to CBSE Board
            </p>
            <h4 style={{ color: "yellow", textDecorationLine: "underline" }}>
              Scored : 91.8%
            </h4>
          </div>
        </div>
        <div
          className="border border-2  py-4 px-5 education "
          style={{
            height: "280px",
            width: "500px",
          }}
        >
          <a href="" className="fs-5" style={{ textDecorationLine: "none" }}>
            2019-2020
          </a>
          <h2 className="pt-2 bold">Central Board of Secondary (CBSE)</h2>
          <p className="fs-6">
            From Shiksha Bharti Senior Secondary School, Rohtak, Haryana ,
            affiliated to CBSE Board
          </p>
          <h4 style={{ color: "yellow", textDecorationLine: "underline" }}>
            Scored : 93.8%
          </h4>
        </div>
      </div>
    </>
  );
}

export default EducationPage;
