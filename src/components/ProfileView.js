import React from "react";

function ProfileView({ emp }) {
  const empskills = emp.skills.map((item) => {
    return (
      <div className="mt-2">
        <p>{item.type.toUpperCase()}</p>
        <div className="w3-light-grey w3-round-xlarge w3-small mt-2">
          <div
            className="w3-container w3-center w3-round-xlarge w3-teal"
            style={{ width: `${item.rating}%` }}
          >
            {item.rating}%
          </div>
        </div>
      </div>
    );
  });
  const empexp = emp.experience.map((item) => {
    return (
      <div className="w3-container">
        <h5 className="w3-opacity">
          <b>{item.name}</b>
        </h5>
        <h6 className="w3-text-teal">
          <i className="fa fa-calendar fa-fw w3-margin-right"></i>
          {item.startyear} - {item.endyear}
        </h6>
        <p>{item.description}</p>
        <hr />
      </div>
    );
  });
  const empedu = emp.education.map((item) => {
    return (
      <div className="w3-container">
        <h5 className="w3-opacity">
          <b>{item.name}</b>
        </h5>
        <h6 className="w3-text-teal">
          <i className="fa fa-calendar fa-fw w3-margin-right"></i>
          {item.startyear} - {item.endyear}
        </h6>
        <p>{item.degree}</p>
        <hr />
      </div>
    );
  });
  const emppro = emp.projects.map((item) => {
    return (
      <div className="w3-container">
        <h5 className="w3-opacity">
          <b>{item.name}</b>
        </h5>
        <h6>
          <span className="w3-opacity">Repository Link : </span>
          <a href={item.link}>
            <span className="w3-text-blue">{item.link}</span>
          </a>
        </h6>
        <p>{item.description}</p>
        <hr />
      </div>
    );
  });
  return (
    <div>
      <div className="w3-content w3-margin-top" style={{ maxWidth: "1400px" }}>
        <div className="w3-row-padding">
          <div className="w3-third">
            <div className="w3-white w3-text-grey w3-card-4">
              <div className="w3-display-container">
                <img
                  src={emp.image}
                  style={{ width: "100%", height: "350px" }}
                  alt="Avatar"
                />
                <div className="w3-display-bottomleft w3-container w3-text-black">
                  <strong>
                    <h2>{emp.name}</h2>
                  </strong>
                </div>
              </div>
              <div className="w3-container mt-2">
                <p>
                  <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>
                  {emp.designation}
                </p>
                <p>
                  <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>
                  {emp.address}
                </p>
                <p>
                  <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>
                  {emp.email}
                </p>
                <p>
                  <i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>
                  {emp.phone}
                </p>
                <p>
                  <strong>About Me:</strong>
                  {emp.bio}
                </p>
                <hr />
                <p className="w3-large">
                  <b>
                    <i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>
                    Skills
                  </b>
                </p>

                {empskills}
                <br />

                <p className="w3-large w3-text-theme">
                  <b>
                    <i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>
                    Languages
                  </b>
                </p>
                <p>English</p>
                <div className="w3-light-grey w3-round-xlarge">
                  <div
                    className="w3-round-xlarge w3-teal"
                    style={{ height: "24px", width: "100%" }}
                  ></div>
                </div>
                <p>Hindi</p>
                <div className="w3-light-grey w3-round-xlarge">
                  <div
                    className="w3-round-xlarge w3-teal"
                    style={{ height: "24px", width: "55%" }}
                  ></div>
                </div>
                <p>Bengali</p>
                <div className="w3-light-grey w3-round-xlarge">
                  <div
                    className="w3-round-xlarge w3-teal"
                    style={{ height: "24px", width: "25%" }}
                  ></div>
                </div>
                <br />
              </div>
            </div>
            <br />
          </div>
          <div className="w3-twothird">
            <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2 className="w3-text-grey w3-padding-16">
                <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                Work Experience
              </h2>
              {empexp}
            </div>

            <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2 className="w3-text-grey w3-padding-16">
                <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                Education
              </h2>
              {empedu}
            </div>

            <div className="w3-container w3-card w3-white">
              <h2 className="w3-text-grey w3-padding-16">
                <i className="fa fa-tasks fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                Projects
              </h2>
              {emppro}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileView;
