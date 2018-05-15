import React, { Component, Fragment } from 'react';
import '../css/style.css';


class App extends Component {

  componentDidMount = () => {
    this.results = {};
  }
  
  roll = () => {
    const ANGLE = {
      1: {
          x: -10,
          y: -10,
          z: 0
      },
      2: {
          x: -10,
          y: 260,
          z: 0
      },
      3: {
          x: 80,
          y: 0,
          z: 10
      },
      4: {
          x: 260,
          y: 0,
          z: -10
      },
      5: {
          x: 260,
          y: 0,
          z: 80
      },
      6: {
          x: -10,
          y: 170,
          z: 90
      }
  }
  
  let dices = Array.prototype.slice.call(document.querySelectorAll('.cubic'));
  let speed = 1000;
  
  let angleGenerator = () => {
      let factor = Math.floor(1 + Math.random() * 6);
      let { x, y, z } = ANGLE[factor];
      return {
          x: x + 3600,
          y: y + 3600,
          z: z + 3600,
          result: factor
      };
  };
  
  let roll = () => {
      dices.forEach((dice) => {
          let { x, y, z, result } = angleGenerator();
          const color = dice.dataset.color;
          this.results[color] = result; 
        
          dice.style.cssText = `
              -webkit-transform: none;
                      transform: none;
          `;
  
          setTimeout(() => {
              // request render
              dice.style.cssText = `
                  -webkit-transition-duration: ${speed}ms;
                          transition-duration: ${speed}ms;
                  -webkit-transform: rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg);
                          transform: rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg);
              `;
          }, 10);
      });
  };
  
  document.querySelector('#roll').addEventListener('click', roll);
  };

  render() {
    return (
    <Fragment>
      <div className="dice-wrapper">
        <div className="cubic black" data-color="black">
            <div className="front"></div>
            <div className="right"></div>
            <div className="bottom"></div>
            <div className="top"></div>
            <div className="left"></div>
            <div className="back"></div>
        </div>
        <div className="cubic green" data-color="green">
            <div className="front"></div>
            <div className="right"></div>
            <div className="bottom"></div>
            <div className="top"></div>
            <div className="left"></div>
            <div className="back"></div>
        </div>
        <div className="cubic red" data-color="red">
            <div className="front"></div>
            <div className="right"></div>
            <div className="bottom"></div>
            <div className="top"></div>
            <div className="left"></div>
            <div className="back"></div>
        </div>
        <div className="cubic blue" data-color="blue">
            <div className="front"></div>
            <div className="right"></div>
            <div className="bottom"></div>
            <div className="top"></div>
            <div className="left"></div>
            <div className="back"></div>
        </div>
        <div className="cubic" data-color="white">
            <div className="front"></div>
            <div className="right"></div>
            <div className="bottom"></div>
            <div className="top"></div>
            <div className="left"></div>
            <div className="back"></div>
        </div>
        <div className="cubic yellow" data-color="yellow">
            <div className="front"></div>
            <div className="right"></div>
            <div className="bottom"></div>
            <div className="top"></div>
            <div className="left"></div>
            <div className="back"></div>
        </div>
      </div>
      <footer id="ctrl">
        <button id="roll" onClick={() => {
          this.roll()
          this.audio.play();
        }}>Biu</button>
      </footer>
      {/* <Music/> */}
      <audio ref={(element) => { this.audio = element; }} src="sounds/dice.mp3"></audio>
      
    </Fragment>
    );
  }
}

export default App;
