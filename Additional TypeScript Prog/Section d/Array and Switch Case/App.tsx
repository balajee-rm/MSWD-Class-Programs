import React from 'react';
import PropTypes from "prop-types";
import './App.css';

interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartOne extends CoursePartBase {
  name: "Fundamentals";
  description: string;
}

interface CoursePartTwo extends CoursePartBase {
  name: "Using props to pass data";
  groupProjectCount: number;
}

interface CoursePartThree extends CoursePartBase {
  name: "Deeper type usage";
  description: string;
  exerciseSubmissionLink: string;
}

type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree;

const courseParts = [
  {
    name: "Fundamentals",
    exerciseCount: 10,
    description: "This is an awesome course part"
  },
  {
    name: "Using props to pass data",
    exerciseCount: 7,
    groupProjectCount: 3
  },
  {
    name: "Deeper type usage",
    exerciseCount: 14,
    description: "Confusing description",
    exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev"
  }
];

const Entries: CoursePart [] = courseParts.map(obj => {
  const object = obj as CoursePart;
  return object;
});

const assertNever = (value: any): any => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const Welcome = (entry: CoursePart[] ) => {
  var key: string;
  var part: any;
  for([key, part] of Object.entries(entry)) {
    switch (part.name) {
      case "Fundamentals":
        console.log (part.name);
        break;
      case "Using props to pass data":
        console.log (part.name);
        break;
      case "Deeper type usage":
        console.log (part.name);
        break;
      default:
        console.log(assertNever(part));
    }
  }
  return <h1>The Last Statement</h1>;
};

function App() {
  return (
    <div>
      <Welcome { ...Entries } />
    </div>
  );
}

export default App;
