import React from 'react';
import Nav from './Nav';
import AboutPage from '../about/AboutPage';

function HomeMain(props) {
  return (
    <>
      <div className="row">
        <div className="col-4 bg p-5 mt-3 fs-5 homemaindisplay">
          <img
            src="dp2.jpg"
            className="rounded-circle"
            style={{ width: "65%" }}
          />
          <h2 className="px-4 pt-3">Sneha Bhayana</h2>
          <p className="px-4 opacity-50">
            snehabhayana19@gmail.com <br></br>
            Web Developer from India, trying to be the best version of myself by
            being persistent, consistent & passionate.
          </p>
          <a
            class="btn btn-primary btn-lg px-3 mx-4 my-2"
            href="https://www.linkedin.com/in/sneha-bhayana19/"
            role="button"
          >
            Follow +
          </a>
          <ul className="keyPoints mt-4 mb-5">
            <li>
              <a>
                <i class="fa-solid fa-location-dot px-1"></i> India &nbsp;
              </a>
              <img src="flag.svg" style={{ width: "8%" }} />
            </li>
            <li>
              <a>
                <i class="fa-solid fa-graduation-cap"></i> MDU, Rohtak
              </a>
            </li>
            <li>
              <a>
                <i class="fa-solid fa-envelope"></i>&nbsp;
                snehabhayana19@gmail.com
              </a>
            </li>
            <li>
              <a href="https://github.com/Sneha-Bhayana">
                <i class="fa-brands fa-github"></i>&nbsp; Sneha-Bhayana
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/sneha-bhayana19/">
                <i class="fa-brands fa-linkedin-in"></i>&nbsp; snehabhayana
              </a>
            </li>
          </ul>
        </div>
        <div
          className="col-7 border border-secondary border-1 rounded-4 mt-5 homemainnav"
          style={{ width: "64%" }}
        >
          <Nav />
          <AboutPage/>
        </div>
      </div>
    </>
  );
  
}

export default HomeMain;


 
