import React from 'react';
import '../stylesheets/Landing.css';
import { useHistory } from 'react-router-dom';

interface LandingProps {}

const Landing = (props: LandingProps): JSX.Element => {
  const history = useHistory();

  const goToMemberPage = () => {
      history.push('/member/123')
  };
  return (
    <div>
      <div>
        <h1>Welcome to Vaccine Registration Center!</h1>
      </div>
      <div className="flex-container">
        <img src="vaccine.jpg" alt="vaccine.jpg" className="img" />
      </div>
      <div>
        <button
          onClick={() => {
            alert("login!");
            goToMemberPage();
          }}>
          login
        </button>
        <button
          onClick={() => {
            alert("logout!");
          }}>
          sign up
        </button>
      </div>
    </div>
  );
};

export default Landing;
