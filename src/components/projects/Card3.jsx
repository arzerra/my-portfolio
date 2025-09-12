import React from 'react';
import styled from 'styled-components';

const Card3 = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <img src="images/projects/3.png" alt="" />
        <div className="card__content">
          <p className="card__title">VCBA Website</p>
          <p className="card__description">Developed the school’s official website with responsive UI, intuitive navigation, and content management for announcements, programs, and enrollment.</p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 300px;
    height: 200px;
    background-color: #f2f2f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 0 0 5px #ffffff80;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    font-family: "Quicksand", sans-serif;
  }

  .card svg {
    width: 48px;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }

  .card__content {
    backface-visibility: hidden;
    transform: rotateX(-90deg) translateZ(0);
    -webkit-font-smoothing: antialiased;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #f2f2f2;
    will-change: transform;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    /* Center content */
    display: flex;
    flex-direction: column; /* stack title & description */
    justify-content: center; /* vertical center */
    align-items: center; /* horizontal center */
    text-align: center;
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    margin: 0;
    font-size: 24px;
    color: #333;
    font-weight: 700;
    text-align: center;
  }

  .card:hover svg {
    scale: 0;
  }

  .card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: black;
    line-height: 1.4;
    text-align: justify;
    padding: 5px;
  }
`;


export default Card3;
