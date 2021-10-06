import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import SearchEmployee from "./SearchEmployee";
import { Modal, ModalBody, ModalHeader, Button, Form } from "reactstrap";
import ProfileView from "./ProfileView";
import { Switch, Route, Redirect,withRouter } from 'react-router-dom';
import Footer from "./FooterComponent";
import Register from "./RegisterComponent";
class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ishomeModalOpen: false,
      skills: {
        c: false,
        cpp: false,
        java: false,
        python: false,
        nodejs: false,
        reactjs: false,
        rubyonrails: false,
        angularjs: false,
        devops: false,
      },
      employee: [
        {
          id: 1,
          name: "Dipankar Mishra",
          image: "/assets/images/6.png",
          address: "Kolkata,India",
          phone: "+916291362392",
          email: "mishradipankar61@gmail.com",
          designation: "Software Developer",
          experience: [
            {
              name: "XYZ Limited",
              startyear: "Jan 2016",
              endyear: "Current",
              description:
                "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.",
            },
            {
              name: "TechSolutions Limited",
              startyear: "Jun 2014",
              endyear: "Jan 2016",
              description:
                "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.",
            },
          ],
          projects: [
            {
              name: "Weather App",
              link: "https://link1.com",
              description:
                "Describing the project...Describing the project...Describing the project...Describing the project...",
            },
          ],
          education: [
            {
              name: "JSCS high school",
              degree: "High School",
              startyear: "2015",
              endyear: "2017",
            },
            {
              name: "Techology of College",
              degree: "BTech",
              startyear: "2018",
              endyear: "2022",
            },
          ],
          bio:
            "This is a test bio of a Employee.This is a test bio of a Employee.This is a test bio of a Employee.",
          skills: [
            { id: 1, type: "C++", rating: 90 },
            { id: 2, type: "reactjs", rating: 40 },
            { id: 3, type: "nodejs", rating: 30 },
          ],
        },
        {
          id: 2,
          name: "John Snow",
          image: "/assets/images/2.png",
          address: "Delhi,India",
          phone: "+917743214924",
          email: "hanhgmnandgupta@gmail.com",
          designation: "Software Developer",
          experience: [
            {
              name: "XYZ Limited",
              startyear: "Jan 2016",
              endyear: "Current",
              description:
                "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.",
            },
            {
              name: "TechSolutions Limited",
              startyear: "Jun 2014",
              endyear: "Jan 2016",
              description:
                "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.",
            },
          ],
          projects: [
            {
              name: "Weather App",
              link: "https://link1.com",
              description:
                "Describing the project...Describing the project...Describing the project...Describing the project...",
            },
            {
              name: "Health Shopping",
              link: "https://link2.com",
              description:
                "Describing the project...Describing the project...Describing the project...Describing the project...",
            },
          ],
          education: [
            {
              name: "Delhi Public School",
              degree: "High School",
              startyear: "2014",
              endyear: "2016",
            },
            {
              name: "Techology of College",
              degree: "BTech",
              startyear: "2016",
              endyear: "2020",
            },
          ],
          bio:
            "This is a test bio of a Employee.This is a test bio of a Employee.This is a test bio of a Employee.",
          skills: [
            { id: 1, type: "cpp", rating: 90 },
            { id: 2, type: "java", rating: 40 },
            { id: 3, type: "reactjs", rating: 30 },
          ],
        },
        {
          id: 3,
          name: "Mary Rose",
          image: "/assets/images/1.png",
          address: "Kolkata,India",
          phone: "+91453214924",
          email: "dfsfdfndgupta@gmail.com",
          designation: "Software Developer II",
          experience: [
            {
              name: "XYZ Limited",
              startyear: "Jan 2016",
              endyear: "Current",
              description:
                "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.",
            },
            {
              name: "TechSolutions Limited",
              startyear: "Jun 2014",
              endyear: "Jan 2016",
              description:
                "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.",
            },
          ],
          projects: [
            {
              name: "Cab App",
              link: "https://link1.com",
              description:
                "Describing the project...Describing the project...Describing the project...Describing the project...",
            },
            {
              name: "Health Shopping",
              link: "https://link2.com",
              description:
                "Describing the project...Describing the project...Describing the project...Describing the project...",
            },
          ],
          education: [
            {
              name: "National Public School",
              degree: "High School",
              startyear: "2014",
              endyear: "2016",
            },
            {
              name: "College of Engginering",
              degree: "BTech",
              startyear: "2016",
              endyear: "2020",
            },
          ],
          bio:
            "This is a test bio of a Employee.This is a test bio of a Employee.This is a test bio of a Employee.",
          skills: [
            { id: 1, type: "c", rating: 90 },
            { id: 2, type: "cpp", rating: 40 },
            { id: 3, type: "python", rating: 30 },
          ],
        },
        {
          id: 4,
          name: "Josepina Albert",
          image: "/assets/images/4.png",
          address: "Kolkata,India",
          phone: "+911403214924",
          email: "harhiupta@gmail.com",
          designation: "Software Developer",
          experience: [
            {
              name: "XYZ Limited",
              startyear: "Jan 2016",
              endyear: "Current",
              description:
                "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.",
            },
            {
              name: "TechSolutions Limited",
              startyear: "Jun 2014",
              endyear: "Jan 2016",
              description:
                "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.",
            },
          ],
          projects: [
            {
              name: "Weather App",
              link: "https://link1.com",
              description:
                "Describing the project...Describing the project...Describing the project...Describing the project...",
            },
            {
              name: "Health Shopping",
              link: "https://link2.com",
              description:
                "Describing the project...Describing the project...Describing the project...Describing the project...",
            },
          ],
          education: [
            {
              name: "Delhi Public School",
              degree: "High School",
              startyear: "2014",
              endyear: "2016",
            },
            {
              name: "Techology of College",
              degree: "BTech",
              startyear: "2016",
              endyear: "2020",
            },
          ],
          bio:
            "This is a test bio of a Employee.This is a test bio of a Employee.This is a test bio of a Employee.",
          skills: [
            { id: 1, type: "devops", rating: 90 },
            { id: 2, type: "rubyonrails", rating: 40 },
            { id: 3, type: "C", rating: 30 },
          ],
        },
        {
          id: 5,
          name: "Doe Bravo",
          image: "/assets/images/5.png",
          address: "Kolkata,India",
          phone: "+917003214924",
          email: "harshitanandgupta@gmail.com",
          designation: "Software Developer",
          experience: [
            {
              name: "XYZ Limited",
              startyear: "Jan 2016",
              endyear: "Current",
              description:
                "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.",
            },
            {
              name: "TechSolutions Limited",
              startyear: "Jun 2014",
              endyear: "Jan 2016",
              description:
                "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.",
            },
          ],
          projects: [
            {
              name: "Weather App",
              link: "https://link1.com",
              description:
                "Describing the project...Describing the project...Describing the project...Describing the project...",
            },
            {
              name: "Health Shopping",
              link: "https://link2.com",
              description:
                "Describing the project...Describing the project...Describing the project...Describing the project...",
            },
          ],
          education: [
            {
              name: "Delhi Public School",
              degree: "High School",
              startyear: "2014",
              endyear: "2016",
            },
            {
              name: "Techology of College",
              degree: "BTech",
              startyear: "2016",
              endyear: "2020",
            },
          ],
          bio:
            "This is a test bio of a Employee.This is a test bio of a Employee.This is a test bio of a Employee.",
          skills: [
            { id: 1, type: "nodejs", rating: 90 },
            { id: 2, type: "reactjs", rating: 40 },
            { id: 3, type: "angularjs", rating: 30 },
          ],
        },
      ],
    };
    this.changeSkill = this.changeSkill.bind(this);
    this.toggleHomeModal = this.toggleHomeModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.register = this.register.bind(this);
  }
  register(new_employee) {
    new_employee.id = this.state.employee.length + 1;
    new_employee.image = "/assets/images/default.png";
    const temp_emp = this.state.employee;
    temp_emp.push(new_employee);
    // console.log(temp_emp);

    this.setState({
      employee: temp_emp,
    });
    // console.log(this.state.employee);
  }
  changeSkill(updatedskill) {
    this.setState({
      skills: updatedskill,
    });
  }
  toggleHomeModal() {
    this.setState({
      ishomeModalOpen: !this.state.ishomeModalOpen,
    });
    // console.log(this.state.ishomeModalOpen)
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.checked;
    const name = target.name;
    this.changeSkill({ ...this.state.skills, [name]: value });
  }
  handleSubmit(event) {
    this.toggleHomeModal();
    // alert(`C:${this.state.c} CPP : ${this.state.cpp}`);
    event.preventDefault();
    this.render();
  }
  render() {
    const Profile = ({ match }) => {
      return (
        <ProfileView
          emp={
            this.state.employee.filter(
              (item) => item.id === parseInt(match.params.id, 10)
            )[0]
          }
        />
      );
    };
    return (
      <div>
        <HeaderComponent />
        <Modal
          isOpen={this.state.ishomeModalOpen}
          toggle={this.toggleHomeModal}
        >
          <ModalHeader toggle={this.toggleHomeModal}>ADD SKILLS</ModalHeader>
          <ModalBody className="modal-bdy">
            <Form
              className="form"
              onSubmit={(values) => this.handleSubmit(values)}
            >
              <div>
                <div className="inputGroup">
                  <input
                    id="c"
                    name="c"
                    type="checkbox"
                    onChange={this.handleInputChange}
                    defaultChecked={this.state.skills.c}
                  />
                  <label htmlFor="c">C</label>
                </div>

                <div className="inputGroup">
                  <input
                    id="cpp"
                    name="cpp"
                    type="checkbox"
                    onChange={this.handleInputChange}
                    defaultChecked={this.state.skills.cpp}
                  />
                  <label htmlFor="cpp">C++</label>
                </div>
                <div className="inputGroup">
                  <input
                    id="python"
                    name="python"
                    type="checkbox"
                    onChange={this.handleInputChange}
                    defaultChecked={this.state.skills.python}
                  />
                  <label htmlFor="python">Python</label>
                </div>
                <div className="inputGroup">
                  <input
                    id="java"
                    name="java"
                    type="checkbox"
                    onChange={this.handleInputChange}
                    defaultChecked={this.state.skills.java}
                  />
                  <label htmlFor="java">Java</label>
                </div>
                <div className="inputGroup">
                  <input
                    id="reactjs"
                    name="reactjs"
                    type="checkbox"
                    onChange={this.handleInputChange}
                    defaultChecked={this.state.skills.reactjs}
                  />
                  <label htmlFor="reactjs">React JS</label>
                </div>
                <div className="inputGroup">
                  <input
                    id="angularjs"
                    name="angularjs"
                    type="checkbox"
                    onChange={this.handleInputChange}
                    defaultChecked={this.state.skills.angularjs}
                  />
                  <label htmlFor="angularjs">Angular JS</label>
                </div>
                <div className="inputGroup">
                  <input
                    id="nodejs"
                    name="nodejs"
                    type="checkbox"
                    onChange={this.handleInputChange}
                    defaultChecked={this.state.skills.nodejs}
                  />
                  <label htmlFor="nodejs">Node JS</label>
                </div>
                <div className="inputGroup">
                  <input
                    id="devops"
                    name="devops"
                    type="checkbox"
                    onChange={this.handleInputChange}
                    defaultChecked={this.state.skills.devops}
                  />
                  <label htmlFor="devops">DevOps</label>
                </div>
                <div className="inputGroup">
                  <input
                    id="rubyonrails"
                    name="rubyonrails"
                    type="checkbox"
                    onChange={this.handleInputChange}
                    defaultChecked={this.state.skills.rubyonrails}
                  />
                  <label htmlFor="rubyonrails">Ruby on Rails</label>
                </div>
              </div>
              <Button type="submit" color="primary">
                Add
              </Button>
            </Form>
          </ModalBody>
        </Modal>
        <Switch>
          <Route
            path="/home"
            component={() => (
              <SearchEmployee
                skills={this.state.skills}
                employee={this.state.employee}
                changeSkill={this.changeSkill}
                toggleModal={this.toggleHomeModal}
                isModalopen={this.state.ishomeModalOpen}
              />
            )}
          />
          <Route exact path="/profile/:id" component={Profile} />
          <Route
            exact
            path="/register"
            component={() => <Register signup={this.register} />}
          />

          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default MainComponent;
