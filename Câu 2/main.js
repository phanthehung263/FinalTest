function numberOneTriangle() {
    let triangleDiv = document.querySelector('.triangle');
    triangleDiv.innerHTML = '';
    let num = parseInt(document.getElementById('number-input').value);
    for (let i = 1; i <= num; i++) {
      let rowDiv = document.createElement('div');
      rowDiv.classList.add('triangle-row');
      for (let j = 1; j <= i; j++) {
        let blockDiv = document.createElement('div');
        blockDiv.classList.add('triangle-block');
        rowDiv.appendChild(blockDiv);
      }
      triangleDiv.appendChild(rowDiv);
    }
  }