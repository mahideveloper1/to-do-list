import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-container">
        <h2>About MyTodo App</h2>
        <p>
          MyTodo is a simple and efficient todo list application designed to
          help you organize your tasks effectively. Built using the React.js.
          MyTodo provides a seamless user experience with its intuitive
          interface and powerful features. It also has a pomodoro timer to boost
          your productivity.
        </p>

        <div className="feature">
          <h3>Key Features:</h3>
          <ul>
            <li>
              <span className="feature-title">CRUD Functionality:</span> MyTodo
              allows you to create, read, update, and delete tasks effortlessly.
              With just a few clicks, you can add, edit, or remove tasks from
              your list, ensuring your todo list is always up-to-date.
            </li>

            <li>
              <span className="feature-title">User Authentication:</span> User
              authentication ensures that your data is secure and accessible
              only by you. Sign up, sign in, and start managing your tasks in a
              secure environment.
            </li>

            <li>
              <span className="feature-title">Responsive Design:</span> MyTodo
              is designed to work seamlessly across all devices. Whether you're
              using a desktop, tablet, or smartphone, you can access and manage
              your todo list from anywhere, at any time.
            </li>

            <li>
              <span className="feature-title">Easy to Use:</span> With its clean
              and simple interface, MyTodo makes task management a breeze.
              Whether you're a busy professional, a student, or a homemaker,
              MyTodo helps you stay organized and productive.
            </li>

            <li>
              <span className="feature-title">Fast and Lightweight:</span>{" "}
              MyTodo is built with performance in mind. It's fast, lightweight,
              and responsive, ensuring a smooth and seamless user experience.
            </li>
          </ul>
        </div>

        <h3>About the Developer:</h3>
        <p>
          MyTodo is developed by{" "}
          <span className="developer-name">[Mahesh]</span>, a passionate
          software developer dedicated to creating innovative and user-friendly
          applications. With MyTodo, I aim to simplify task management and help
          users boost their productivity.
        </p>

        <h3>Feedback:</h3>
        <p>
          We are constantly working on improving MyTodo and would love to hear
          your feedback. If you have any suggestions, questions, or concerns,
          please don't hesitate to.
        </p>
      </div>
    </>
  );
};

export default About;
