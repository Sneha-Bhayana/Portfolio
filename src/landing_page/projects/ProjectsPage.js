import React from "react";

function ProjectsPage() {
  return (
    <>
      <div className="p-5 my-4 mx-5">
        <h1 style={{ textAlign: "center",color:"#FFD43B" }}>
          <i class="fa-solid fa-book" style={{color:"#FFD43B"}}></i> PROJECTS :{" "}
        </h1>
        <div className="d-flex flex-row justify-content-between flex-wrap ">
          <div class="card my-5 project" style={{ width: "23rem", height: "27rem" }}>
            <img
              src="Wanderlust.jpg"
              style={{ height: "12rem", width: "23rem" }}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Wanderlust Travel</h5>
              <p class="card-text">
                Your ultimate guide to discovering breathtaking destinations and
                unforgettable travel experiences.
              </p>
              <button type="button" class="btn btn-primary btn-sm mx-1 ">
                Mongo
              </button>
              <button type="button" class="btn btn-primary btn-sm">
                Node
              </button>
              <button type="button" class="btn btn-primary btn-sm mx-1">
                Express
              </button>
              <button type="button" class="btn btn-primary btn-sm">
                JS
              </button>
              <button type="button" class="btn btn-primary btn-sm mx-1">
                HTML
              </button>
              <button type="button" class="btn btn-primary btn-sm">
                CSS
              </button>
              <a
                href="https://wanderlust-vacation-rental-website.onrender.com/listings"
                class="btn btn-danger my-3"
              >
                LIVE <i class="fa-solid fa-circle-dot"></i>
              </a>
            </div>
          </div>
          <div class="card my-5 project" style={{ width: "23rem", height: "27rem" }}>
            <img
              src="Zerodha.jpg"
              style={{ height: "12rem", width: "23rem" }}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Zerodha Stock Broker</h5>
              <p class="card-text">
              India's largest discount brokerage platform, offering low-cost trading and investment services.
              </p>
              <button type="button" class="btn btn-primary btn-sm mx-1 ">
                React
              </button>
              <button type="button" class="btn btn-primary btn-sm">
                Node
              </button>
              <button type="button" class="btn btn-primary btn-sm mx-1">
                Express
              </button>
              <button type="button" class="btn btn-primary btn-sm">
                Mongo
              </button>
              <button type="button" class="btn btn-primary btn-sm mx-1">
                Bootstrap
              </button>
              <a
                href="https://zerodha-broking.onrender.com"
                class="btn btn-danger my-3"
              >
                LIVE <i class="fa-solid fa-circle-dot"></i>
              </a>
            </div>
          </div>    
          <div class="card my-5 project" style={{ width: "23rem", height: "27rem" }}>
            <img
              src="Spotify.jpg"
              style={{ height: "12rem", width: "23rem" }}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Spotify Music</h5>
              <p class="card-text">
              global audio streaming platform that offers music, podcasts, and personalized playlists.
              </p>
              
              <button type="button" class="btn btn-primary btn-sm">
                JS
              </button>
              <button type="button" class="btn btn-primary btn-sm mx-1">
                HTML
              </button>
              <button type="button" class="btn btn-primary btn-sm">
                CSS
              </button>
              <br></br>
              <a
                href="#"
                class="btn btn-danger my-3"
              >
                LIVE <i class="fa-solid fa-circle-dot"></i>
              </a>
            </div>
          </div>
          <div class="card my-5 project" style={{ width: "23rem", height: "27rem" }}>
            <img
              src="Amazon.jpg"
              style={{ height: "12rem", width: "23rem" }}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Amazon Shopping</h5>
              <p class="card-text">
              global e-commerce giant, offering a vast range of products and services, including online retail, streaming, and web services.
              </p>
              
              <button type="button" class="btn btn-primary btn-sm">
                JS
              </button>
              <button type="button" class="btn btn-primary btn-sm mx-1">
                HTML
              </button>
              <button type="button" class="btn btn-primary btn-sm">
                CSS
              </button>
              <br></br>
              <a
                href="#"
                class="btn btn-danger my-3"
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

export default ProjectsPage;
