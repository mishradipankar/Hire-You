import React, { Component } from "react";
import { Badge, Media } from "reactstrap";
import { Stagger, Fade } from "react-animation-components";
import { Link } from "react-router-dom";
function RenderEmployee({ employee }) {
  const top_skills = employee.skills.map((item, index) => {
    if (index <= 2 && employee.skills[index])
      return (
        <li key={index}>
          <strong>{item.type.toUpperCase()}</strong>
        </li>
      );
    else return <div></div>;
  });
  return (
    <Fade in>
      <div
        key={employee.id}
        className="w3-container w3-margin-bottom empmedia mb-4"
      >
        <div className="w3-quarter mt-3">
          <img
            src={employee.image}
            alt={employee.name}
            className="empimg rounded-circle w3-card-4 ml-3"
          />
        </div>
        <div className="w3-threequarter">
          <div className="w3-half mb-2">
            <h3>{employee.name}</h3>
            <h5>Top Skills of the employee</h5>
            <ul className="empskill">{top_skills}</ul>
          </div>
          <div className="w3-half">
            <Link to={`/profile/${employee.id}`}>
              <button className="button m-2 mt-5 mr-4 w3-right">
                <span>View Profile</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
}

class SearchEmployee extends Component {
  isanyFilter(req_skill) {
    var ret = false;
    Object.keys(req_skill).forEach((skill) => {
      if (req_skill[skill] === true) ret = true;
    });
    return ret;
  }
  matchedSkillCount(empskill, req_skill) {
    let count = 0;
    Object.keys(req_skill).forEach((skill) => {
      if (req_skill[skill] === true) {
        empskill.forEach((item) => {
          if (item.type === skill) count = count + 1;
        });
      }
    });
    return count;
  }
  compare(a, b) {
    let comparison = 0;
    if (a.count > b.count) comparison = -1;
    else comparison = 1;

    return comparison;
  }
  render() {
    const state_keys = Object.keys(this.props.skills).map((item) => {
      if (this.props.skills[item] === true)
        return (
          <h3 className="pr-2">
            <Badge color="info" pill>
              {item.toUpperCase()}
            </Badge>
          </h3>
        );
      return <div></div>;
    });
    // console.log(this.matchedSkillCount(this.props.employee[0].skills,this.props.skills))
    console.log(this.isanyFilter(this.props.skills));
    var result = [];
    if (this.isanyFilter(this.props.skills) === true) {
      this.props.employee.forEach((item) => {
        var ret = this.matchedSkillCount(item.skills, this.props.skills);
        if (ret > 0) result.push({ ...item, count: ret });
      });
      result.sort(this.compare);
    } else result = this.props.employee;
    var emplist;
    if (result.length === 0)
      emplist = <h3>Sorry , No Registered Employee has this skill!</h3>;
    else
      emplist = result.map((item) => {
        return <RenderEmployee employee={item} />;
      });
    return (
      <div>
        <div className="container">
          <div className="row pt-4">
            <span className="plus">
              <i
                className="fa fa-plus-circle plus-1"
                onClick={this.props.toggleModal}
              ></i>{" "}
              Add skills to filter
            </span>
          </div>
        </div>

        <div className="container">
          <div className="row pt-1">{state_keys}</div>
        </div>
        <div className="container">
          <div className="row row-content pt-1">
            <div className="col-12">
              <Stagger in>
                <Media list>{emplist}</Media>
              </Stagger>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SearchEmployee;
