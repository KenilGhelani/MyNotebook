import React from "react";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
    <div className="mx-auto px-2">
      <h1 className="text-center mb-4 text-decoration-underline">
        <strong>About Us</strong>
      </h1>
      
      <div
        class="card m-auto my-3 rounded-4"
        style={{ maxWidth: "58rem", maxHeight: "auto", backgroundColor: "#b9b2b2" }}
      >
        <div class="card-body">
          <h5 class="card-title text-decoration-underline mb-4">
            <h3>
              <strong>
                Welcome to <strong>MyNotebook</strong>
              </strong>
            </h3>
          </h5>
          <p class="card-text">
            <h6>
              <div className="my-3">
                On behalf of the entire <strong>MyNotebook</strong> team, I am
                thrilled to extend a warm welcome to you! We are delighted to
                have you join our family and embark on this exciting journey
                together.
              </div>
              <div className="mb-3">
                The primary mission of <strong>MyNotebook</strong>, referred to
                as a note-taking application, revolves around providing users
                with a versatile, secure and efficient platform for organizing,
                managing, and accessing their notes from any device with an
                internet connection.
              </div>
              <div className="d-flex justify-content-end">
                <h6>
                  <strong>- Kenil Ghelani & Team</strong>
                </h6>
              </div>
            </h6>
          </p>
        </div>
      </div>
      <div
        class="card m-auto my-3 rounded-4"
        style={{ maxWidth: "58rem", maxHeight: "auto", backgroundColor: "#b9b2b2" }}
      >
        <div class="card-body">
          <h5 class="card-title text-decoration-underline mb-3">
            <h3>
              <strong>
                Features
              </strong>
            </h3>
          </h5>
          <p class="card-text">
            <h6>
              <strong>MyNotebook</strong> focuses on delivering a seamless user
              experience while prioritizing the following key functionalities:
              <div className="my-3">
                <strong> 1. User Authentication: </strong>
              </div>
              <div>
                <i
                  class="fa-regular fa-hand-point-right"
                  style={{ color: "#000000" }}
                ></i>
                &nbsp; Implement a robust user authentication system to ensure
                the security and privacy of user data.
              </div>
              <div>
                <i
                  class="fa-regular fa-hand-point-right"
                  style={{ color: "#000000" }}
                ></i>
                &nbsp; Users will have individual accounts, requiring secure
                login credentials to access their personalized note-taking
                space.
              </div>
              <div className="my-3">
                <strong>2. Note Creation, Updation And Deletion:</strong>
              </div>
              <div>
                <i
                  class="fa-regular fa-hand-point-right"
                  style={{ color: "#000000" }}
                ></i>
                &nbsp; Enable users to effortlessly create new notes,
                facilitating quick and intuitive note-taking.
              </div>
              <div>
                <i
                  class="fa-regular fa-hand-point-right"
                  style={{ color: "#000000" }}
                ></i>
                &nbsp; Implement an easy-to-use interface for updating existing
                notes, allowing users to modify and enhance their content as
                needed.
              </div>
              <div>
                <i
                  class="fa-regular fa-hand-point-right"
                  style={{ color: "#000000" }}
                ></i>
                &nbsp; Provide a simple process for users to delete notes they
                no longer require, ensuring a clutter-free and organized note
                repository.
              </div>
              <div className="my-3">
                <strong>3. Cloud-Based Storage:</strong>
              </div>
              <div>
                <i
                  class="fa-regular fa-hand-point-right"
                  style={{ color: "#000000" }}
                ></i>
                &nbsp; Utilize cloud infrastructure to securely store user
                notes, allowing seamless access from any device with an internet
                connection.
              </div>
              <div>
                <i
                  class="fa-regular fa-hand-point-right"
                  style={{ color: "#000000" }}
                ></i>
                &nbsp; Emphasize data synchronization to ensure that changes
                made on one device are reflected across all platforms, promoting
                a consistent user experience.
              </div>
              <div className="my-3">
                <strong>4. User-Friendly Interface:</strong>
              </div>
              <div>
                <i
                  class="fa-regular fa-hand-point-right"
                  style={{ color: "#000000" }}
                ></i>
                &nbsp; Design an intuitive and user-friendly interface, ensuring
                that users can navigate effortlessly and focus on their
                note-taking tasks without unnecessary complexity.{" "}
              </div>
              <div className="my-3">
                <strong>5. Data Security and Privacy:</strong>
              </div>
              <div>
                <i
                  class="fa-regular fa-hand-point-right"
                  style={{ color: "#000000" }}
                ></i>
                &nbsp; Implement robust security measures to protect user data,
                including encryption and secure transmission protocols.
              </div>
              <div>
                <i
                  class="fa-regular fa-hand-point-right"
                  style={{ color: "#000000" }}
                ></i>
                &nbsp; Prioritize user privacy by adhering to best practices and
                compliance standards, instilling confidence in users regarding
                the safety of their information.
              </div>
            </h6>
          </p>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
