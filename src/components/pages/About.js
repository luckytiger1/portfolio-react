import React from 'react';

export default function About() {
  return (
    <React.Fragment>
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '100px 0',
        }}
      >
        <div className="about-container" style={{ flex: '1' }}>
          <h1>About me</h1>
          <br />
          <h3 style={{ maxWidth: '800px', margin: '0 auto' }}>
            Hello! My name is Daniyar Ketebay, I'm a passionate Front-End
            Developer who strives to learn new things and ready to collaborate
            with other developers and become better at web development!{' '}
          </h3>
        </div>
      </section>
    </React.Fragment>
  );
}
