import React from 'react';
import './App.css';

function App() {
  let mouse = {
    x: 0,
    y: 0,
    startX: 0,
    startY: 0
  };
  let element = null;

  function onMouseClick(e) {
    let canvas = document.getElementById('canvas');
    if (element !== null) {
      element = null;
      canvas.style.cursor = "default";
      console.log("finsihed.");
    } else {
      console.log("begun.");
      mouse.startX = mouse.x;
      mouse.startY = mouse.y;
      element = document.createElement('div');
      element.className = 'rectangle';
      element.style.left = mouse.x + 'px';
      element.style.top = mouse.y + 'px';
      drawCoords(element);
      canvas.appendChild(element);
      canvas.style.cursor = "crosshair";
    }
  }

  function drawCoords(rectElement){
    let coordsEl = document.createElement('span');
    coordsEl.className = 'coords';
    coordsEl.innerText = `(${mouse.startX},${mouse.startY},${mouse.x},${mouse.y})`
    rectElement.appendChild(coordsEl);
  }

  function onMouseMove(e) {
    setMousePosition(e);
    if (element !== null) {
      element.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
      element.style.height = Math.abs(mouse.y - mouse.startY) + 'px';
      element.style.left = (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px';
      element.style.top = (mouse.y - mouse.startY < 0) ? mouse.y + 'px' : mouse.startY + 'px';
      const x1 = mouse.x - mouse.startX < 0 ? mouse.x : mouse.startX;
      const y1 = mouse.y - mouse.startY < 0 ? mouse.y : mouse.startY;
      const x2 = mouse.x - mouse.startX >= 0 ? mouse.x : mouse.startX;
      const y2 = mouse.y - mouse.startY >= 0 ? mouse.y : mouse.startY;
      element.getElementsByClassName('coords')[0].innerText = `(${x1},${y1},${x2},${y2})`;
    }
  }

  function setMousePosition(e) {

    var ev = e || window.event; //Moz || IE
    if (ev.pageX) { //Moz
      mouse.x = ev.pageX + window.pageXOffset;
      mouse.y = ev.pageY + window.pageYOffset;
    } else if (ev.clientX) { //IE
      mouse.x = ev.clientX + document.body.scrollLeft;
      mouse.y = ev.clientY + document.body.scrollTop;
    }
  };

  return (
    <div
     onMouseMove={onMouseMove}
     id={'canvas'}
     onClick={onMouseClick}
    ></div>
  );
}

export default App;
