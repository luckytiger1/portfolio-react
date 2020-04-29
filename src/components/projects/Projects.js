import React from 'react';
import './Project.scss';
import { projectImgs, descriptions } from '../variables';

export default function Projects(props) {
  return (
    <section className="projects">
      <div className="projects__title text-center">Projects</div>
      <div className="projects_wrapper container">
        {props.projects.map((title, i) => {
          return (
            <div key={i} className="project">
              <div title={title}>
                <picture>
                  <source
                    className="project__img"
                    media="(min-width: 800px)"
                    srcSet={projectImgs[i]}
                  />

                  <img
                    className="project__img"
                    src={projectImgs[i]}
                    alt={title}
                  />
                </picture>
              </div>
              <div className="project__props">
                <h2 className="project__title">{title}</h2>
                <ul className="project__props--list">
                  {descriptions[i].props.map((el, i) => (
                    <li className="project__prop" key={i}>
                      {el}
                    </li>
                  ))}
                </ul>
                <h3 className="project__links">Links:</h3>
                <ul className="project__props--list">
                  <li className="project__prop">
                    <a
                      className="project__link"
                      href={`${descriptions[i].links[0]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Technical requirements
                    </a>
                  </li>
                  <li className="project__prop">
                    <a
                      className="project__link"
                      href={`${descriptions[i].links[2]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Repository
                    </a>
                  </li>
                  <li className="project__prop">
                    <a
                      className="project__link"
                      href={`${descriptions[i].links[1]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Deploy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
