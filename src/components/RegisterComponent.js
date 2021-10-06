import React, { Component } from "react";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      email: "",
      phone: "",
      designation: "",
      bio: "",
      skills: {
        default: 50,
      },
      experience: {
        exp1: {
          orgname: "",
          startyear: "",
          endyear: "",
          description: "",
        },
      },
      education: {
        edu1: {
          name: "",
          startyear: "",
          endyear: "",
          degree: "",
        },
      },
      projects: {
        pro1: {
          name: "",
          link: "",
          description: "",
        },
        pro2: {
          name: "",
          link: "",
          description: "",
        },
      },
    };
    this.skillonClick = this.skillonClick.bind(this);
    this.skillselectchange = this.skillselectchange.bind(this);
    this.skillsliderchange = this.skillsliderchange.bind(this);
    this.nameInputChange = this.nameInputChange.bind(this);
    this.exponClick = this.exponClick.bind(this);
    this.orgCross = this.orgCross.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.eduonClick = this.eduonClick.bind(this);
    this.eduCross = this.eduCross.bind(this);
    this.proonClick = this.proonClick.bind(this);
    this.proCross = this.proCross.bind(this);
    this.skillCross = this.skillCross.bind(this);
    this.register = this.register.bind(this);
  }
  compare(a, b) {
    let comparison = 0;
    if (parseInt(a.rating) > parseInt(b.rating)) comparison = -1;
    else comparison = 1;

    return comparison;
  }
  register(event) {
    var error = undefined;
    if (
      this.state.name === "" ||
      this.state.address === "" ||
      this.state.email === "" ||
      this.state.bio === "" ||
      this.state.phone === "" ||
      this.state.designation === ""
    )
      error = "\nPersonal Info Missing";
    event.preventDefault();
    var emp_skills = [],
      emp_expereince = [],
      emp_education = [],
      emp_projects = [];
    var c = 0;
    Object.keys(this.state.skills).forEach((skill) => {
      if (skill !== "default" && this.state.skills[skill] !== undefined) {
        c++;
        var new_skill = {
          id: c,
          type: skill,
          rating: this.state.skills[skill],
        };
        emp_skills.push(new_skill);
      }
      if (emp_skills.length === 0) error += " \nAdd a skill";
    });
    emp_skills.sort(this.compare);
    Object.keys(this.state.experience).forEach((exp) => {
      if (this.state.experience[exp] !== undefined) {
        var new_exp = {
          name: this.state.experience[exp].orgname,
          startyear: this.state.experience[exp].startyear,
          endyear: this.state.experience[exp].endyear,
          description: this.state.experience[exp].description,
        };
        if (
          new_exp.orgname !== "" &&
          new_exp.startyear !== "" &&
          new_exp.endyear !== "" &&
          new_exp.description !== ""
        )
          emp_expereince.push(new_exp);
        else error += " \nExpirence info missing";
      }
    });
    Object.keys(this.state.education).forEach((exp) => {
      if (this.state.education[exp] !== undefined) {
        var new_edu = {
          name: this.state.education[exp].name,
          startyear: this.state.education[exp].startyear,
          endyear: this.state.education[exp].endyear,
          degree: this.state.education[exp].degree,
        };
        if (
          new_edu.name !== "" &&
          new_edu.startyear !== "" &&
          new_edu.endyear !== "" &&
          new_edu.degree !== ""
        )
          emp_education.push(new_edu);
        else error += " \nEducational Details Missing";
      }
    });
    Object.keys(this.state.projects).forEach((exp) => {
      if (this.state.projects[exp] !== undefined) {
        var new_pro = {
          name: this.state.projects[exp].name,
          link: this.state.projects[exp].link,
          description: this.state.projects[exp].description,
        };
        if (
          new_pro.name !== "" &&
          new_pro.link !== "" &&
          new_pro.description !== ""
        )
          emp_projects.push(new_pro);
        else error += " \nProject Details Missing";
      }
    });
    console.log(emp_projects);
    if (error) alert("Please!Fill in all the feilds " + error);
    else {
      var new_employee = {
        name: this.state.name,
        address: this.state.address,
        email: this.state.email,
        phone: this.state.phone,
        bio: this.state.bio,
        designation: this.state.designation,
        skills: emp_skills,
        projects: emp_projects,
        education: emp_education,
        experience: emp_expereince,
      };
      this.props.signup(new_employee);
      console.log(new_employee);
      alert(
        "User Successfully Registered...Go to Home Page to filter Employees"
      );
    }
  }
  skillonClick() {
    this.setState({
      skills: {
        ...this.state.skills,
        default: "50",
      },
    });
  }
  skillselectchange(event) {
    const upd = this.state.skills;
    delete upd.default;
    upd[event.target.value] = "50";
    upd[event.target.id] = undefined;
    this.setState({
      skills: upd,
    });
  }
  skillsliderchange(event) {
    const upd = this.state.skills;
    upd[event.target.id] = event.target.value;
    this.setState({
      skills: upd,
    });
  }
  nameInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  exponClick() {
    const exp_no =
      "exp" + (Object.keys(this.state.experience).length + 1).toString();
    this.setState({
      experience: {
        ...this.state.experience,
        [exp_no]: {
          orgname: "",
          startyear: "",
          endyear: "",
          description: "",
        },
      },
    });
  }
  orgCross(event) {
    this.setState({
      experience: {
        ...this.state.experience,
        [event.target.id]: undefined,
      },
    });
  }
  eduonClick() {
    const edu_no =
      "edu" + (Object.keys(this.state.education).length + 1).toString();
    this.setState({
      education: {
        ...this.state.education,
        [edu_no]: {
          name: "",
          startyear: "",
          endyear: "",
          degree: "",
        },
      },
    });
  }
  eduCross(event) {
    this.setState({
      education: {
        ...this.state.education,
        [event.target.id]: undefined,
      },
    });
  }
  proCross(event) {
    this.setState({
      projects: {
        ...this.state.projects,
        [event.target.id]: undefined,
      },
    });
  }
  skillCross(event) {
    this.setState({
      skills: {
        ...this.state.skills,
        [event.target.id]: undefined,
      },
    });
  }
  proonClick() {
    const pro_no =
      "pro" + (Object.keys(this.state.projects).length + 1).toString();
    this.setState({
      projects: {
        ...this.state.projects,
        [pro_no]: {
          name: "",
          link: "",
          description: "",
        },
      },
    });
  }
  handleInputChange(event) {
    var ret = event.target.id.split("_");
    if (ret[0] === "org") {
      const index = "exp" + ret[2].toString();
      const property = ret[1];
      this.setState({
        experience: {
          ...this.state.experience,
          [index]: {
            ...this.state.experience[index],
            [property]: event.target.value,
          },
        },
      });
    }
    if (ret[0] === "edu") {
      const index = "edu" + ret[2].toString();
      const property = ret[1];
      this.setState({
        education: {
          ...this.state.education,
          [index]: {
            ...this.state.education[index],
            [property]: event.target.value,
          },
        },
      });
    }
    if (ret[0] === "pro") {
      const index = "pro" + ret[2].toString();
      const property = ret[1];
      this.setState({
        projects: {
          ...this.state.projects,
          [index]: {
            ...this.state.projects[index],
            [property]: event.target.value,
          },
        },
      });
    }
  }

  render() {
    console.log(this.state.experience);
    const renderskill = Object.keys(this.state.skills).map((item) => {
      if (this.state.skills[item] !== undefined)
        return (
          <div>
            <i
              className="fa fa-times plus-2 pull-right fa-lg"
              style={{ color: "red" }}
              id={item}
              onClick={this.skillCross}
            ></i>
            <div className="w3-row-padding">
              <div className="w3-third">
                <select
                  className="w3-select"
                  name="option"
                  value={item}
                  onChange={this.skillselectchange}
                  id={item}
                >
                  <option value="default" disabled>
                    Choose
                  </option>
                  <option value="c">C</option>
                  <option value="cpp">C++</option>
                  <option value="java">Java</option>
                  <option value="python">Python</option>
                  <option value="nodejs">Node JS</option>
                  <option value="reactjs">React JS</option>
                  <option value="rubyonrails">RubyOnRails</option>
                  <option value="angularjs">Angular JS</option>
                  <option value="devops">DevOps</option>
                </select>
              </div>
              <div className="w3-twothird pl-2 pt-2">
                <p>
                  Rating :{" "}
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={this.state.skills[item]}
                    id={item}
                    onChange={this.skillsliderchange}
                  />
                </p>
              </div>
            </div>
          </div>
        );
      else return <div></div>;
    });
    var exp_count = 0;
    const renderorg = Object.keys(this.state.experience).map((item) => {
      if (this.state.experience[item] !== undefined) {
        const index = item.charAt(item.length - 1);
        exp_count++;
        return (
          <div className="mb-4">
            <i
              className="fa fa-times plus-2 pull-right fa-lg"
              style={{ color: "red" }}
              id={item}
              onClick={this.orgCross}
            ></i>
            <label htmlFor={`org_orgname_${index}`}>
              <b>{exp_count}. Organisation Name </b>
            </label>
            <input
              id={`org_orgname_${index}`}
              className="w3-input w3-animate-input"
              type="text"
              style={{ width: "50%" }}
              placeholder="Company Name"
              value={this.state.experience[item].orgname}
              onChange={this.handleInputChange}
            ></input>
            <br />
            <div className="w3-half">
              <label htmlFor={`org_startyear_${index}`}>
                <b>Start Year</b>
              </label>
              <input
                name={`org_startyear_${index}`}
                id={`org_startyear_${index}`}
                className="w3-input w3-animate-input"
                type="text"
                placeholder="Month,Year"
                value={this.state.experience[item].startyear}
                style={{ width: "60%" }}
                onChange={this.handleInputChange}
              ></input>
            </div>
            <div className="w3-half">
              <label htmlFor={`org_endyear_${index}`}>
                <b>End Year</b>
              </label>
              <input
                name={`org_endyear_${index}`}
                id={`org_endyear_${index}`}
                className="w3-input w3-animate-input"
                type="text"
                placeholder="Month,Year"
                value={this.state.experience[item].endyear}
                style={{ width: "60%" }}
                onChange={this.handleInputChange}
              ></input>
              <br />
            </div>
            <label htmlFor={`org_description_${index}`}>
              <b>Description</b>
            </label>
            <textarea
              id={`org_description_${index}`}
              className="w3-input w3-animate-input"
              type="text"
              placeholder="Describe Your Role"
              value={this.state.experience[item].description}
              name={`org_description_year${index}`}
              onChange={this.handleInputChange}
            ></textarea>
            <hr />
          </div>
        );
      } else return <div></div>;
    });
    var edu_count = 0;
    const renderedu = Object.keys(this.state.education).map((item) => {
      if (this.state.education[item] !== undefined) {
        const index = item.charAt(item.length - 1);
        edu_count++;
        return (
          <div className="mb-4">
            <i
              className="fa fa-times plus-2 pull-right fa-lg"
              id={item}
              onClick={this.eduCross}
              style={{ color: "red" }}
            ></i>
            <label htmlFor={`edu_name_${index}`}>
              <b>{edu_count}. Institute Name </b>
            </label>
            <input
              id={`edu_name_${index}`}
              className="w3-input w3-animate-input"
              type="text"
              style={{ width: "50%" }}
              placeholder="Institue Name"
              value={this.state.education[item].name}
              onChange={this.handleInputChange}
            ></input>
            <br />
            <div className="w3-half">
              <label htmlFor={`edu_startyear_${index}`}>
                <b>Start Year</b>
              </label>
              <input
                name={`edu_startyear_${index}`}
                id={`edu_startyear_${index}`}
                className="w3-input w3-animate-input"
                type="text"
                placeholder="Year"
                value={this.state.education[item].startyear}
                style={{ width: "60%" }}
                onChange={this.handleInputChange}
              ></input>
            </div>
            <div className="w3-half">
              <label htmlFor={`edu_endyear_${index}`}>
                <b>End Year</b>
              </label>
              <input
                name={`edu_endyear_${index}`}
                id={`edu_endyear_${index}`}
                className="w3-input w3-animate-input"
                type="text"
                placeholder="Year"
                value={this.state.education[item].endyear}
                style={{ width: "60%" }}
                onChange={this.handleInputChange}
              ></input>
              <br />
            </div>
            <label htmlFor={`edu_degree_${index}`}>
              <b>Degree</b>
            </label>
            <input
              id={`edu_degree_${index}`}
              className="w3-input w3-animate-input"
              type="text"
              placeholder="Degree Awarded"
              value={this.state.education[item].degree}
              name={`edu_degree_${index}`}
              onChange={this.handleInputChange}
            ></input>
            <hr />
          </div>
        );
      } else return <div></div>;
    });
    var pro_count = 0;
    const renderpro = Object.keys(this.state.projects).map((item) => {
      if (this.state.projects[item] !== undefined) {
        const index = item.charAt(item.length - 1);
        pro_count++;
        return (
          <div className="mb-4">
            <i
              className="fa fa-times plus-2 pull-right fa-lg"
              id={item}
              onClick={this.proCross}
              style={{ color: "red" }}
            ></i>
            <label htmlFor={`pro_name_${index}`}>
              <b>{pro_count}. Project Name </b>
            </label>
            <input
              id={`pro_name_${index}`}
              className="w3-input w3-animate-input"
              type="text"
              style={{ width: "50%" }}
              placeholder="Project Name"
              value={this.state.projects[item].name}
              onChange={this.handleInputChange}
            ></input>
            <br />

            <label htmlFor={`pro_link_${index}`}>
              <b>Link</b>
            </label>
            <input
              name={`pro_link_${index}`}
              id={`pro_link_${index}`}
              className="w3-input w3-animate-input"
              type="text"
              placeholder="Paste Link"
              value={this.state.projects[item].link}
              style={{ width: "60%" }}
              onChange={this.handleInputChange}
            ></input>
            <br />
            <label htmlFor={`pro_description_${index}`}>
              <b>Description</b>
            </label>
            <textarea
              id={`pro_description_${index}`}
              className="w3-input w3-animate-input"
              type="text"
              placeholder="Describe Your Project"
              value={this.state.projects[item].description}
              name={`pro_description_${index}`}
              onChange={this.handleInputChange}
            ></textarea>
            <hr />
          </div>
        );
      } else return <div></div>;
    });
    return (
      <div className="w3-container">
        <h2 className="w3-text-black w3-center m-4">
          Employee Registration Form
        </h2>
        <div className="w3-third">
          <div className="w3-card-4 w3-margin-right w3-margin-bottom p-3">
            <h2 className="w3-text-grey w3-padding-16">
              <i className="fa fa-user fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
              Personal Info
            </h2>
            <label htmlFor="name">
              <b>Name</b>
            </label>
            <input
              name="name"
              id="name"
              className="w3-input w3-animate-input"
              type="text"
              style={{ width: "50%" }}
              placeholder="Enter Your Name"
              value={this.state.name}
              onChange={this.nameInputChange}
            ></input>
            <br />
            <label htmlFor="address">
              <b>Address</b>
            </label>
            <input
              name="address"
              id="address"
              className="w3-input w3-animate-input"
              value={this.state.address}
              type="text"
              style={{ width: "80%" }}
              placeholder="Enter Your Place"
              onChange={this.nameInputChange}
            ></input>
            <br />
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              name="email"
              id="email"
              className="w3-input w3-animate-input"
              type="text"
              style={{ width: "80%" }}
              value={this.state.email}
              placeholder="Enter Your Email"
              onChange={this.nameInputChange}
            ></input>
            <br />
            <label htmlFor="phone">
              <b>Phone Number</b>
            </label>
            <input
              name="phone"
              id="phone"
              className="w3-input w3-animate-input"
              type="text"
              style={{ width: "50%" }}
              value={this.state.phone}
              placeholder="Enter Your Phone"
              onChange={this.nameInputChange}
            ></input>
            <br />
            <label htmlFor="designation">
              <b>Designation</b>
            </label>
            <input
              name="designation"
              id="designation"
              className="w3-input w3-animate-input"
              type="text"
              style={{ width: "30%" }}
              value={this.state.designation}
              placeholder="Designation"
              onChange={this.nameInputChange}
            ></input>
            <br />
            <label htmlFor="bio">
              <b>Bio</b>
            </label>
            <textarea
              name="bio"
              id="bio"
              className="w3-input w3-animate-input"
              style={{ width: "100%" }}
              value={this.state.bio}
              placeholder="Describe Yourself"
              onChange={this.nameInputChange}
            ></textarea>
          </div>
          <div className="w3-card-4  w3-margin-right w3-margin-bottom p-3">
            <h2 className="w3-text-grey w3-padding-16">
              <i className="fa fa-asterisk  fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
              Skills{" "}
              <i
                className="fa fa-plus-circle plus-2 pull-right"
                onClick={this.skillonClick}
              ></i>
            </h2>
            {renderskill}
          </div>
        </div>
        <div className="w3-third">
          <div className="w3-card-4 w3-margin-bottom w3-margin-right p-3">
            <h2 className="w3-text-grey w3-padding-16">
              <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
              Work Experience{" "}
              <i
                className="fa fa-plus-circle plus-2 pull-right"
                onClick={this.exponClick}
              ></i>
            </h2>
            {renderorg}
          </div>
          <div className="w3-card-4 w3-margin-bottom w3-margin-right p-3">
            <h2 className="w3-text-grey w3-padding-16">
              <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
              Education{" "}
              <i
                className="fa fa-plus-circle plus-2 pull-right"
                onClick={this.eduonClick}
              ></i>
            </h2>
            {renderedu}
          </div>
        </div>
        <div className="w3-third">
          <div className="w3-card-4 w3-margin-bottom w3-margin-right p-3">
            <h2 className="w3-text-grey w3-padding-16">
              <i className="fa fa-tasks fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
              Projects
              <i
                className="fa fa-plus-circle plus-2 pull-right"
                onClick={this.proonClick}
              ></i>
            </h2>
            {renderpro}
          </div>
          <button
            className="button pull-right mb-3 p-2"
            onClick={this.register}
          >
            Register Now
          </button>
        </div>
      </div>
    );
  }
}

export default Register;