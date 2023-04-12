function numberOneTriangle() {
    // Clear previous triangle if any
    let triangleDiv = document.querySelector('.triangle');
    triangleDiv.innerHTML = '';

    // Get user input
    let num = parseInt(document.getElementById('number-input').value);

    // Create rows of blocks
    for (let i = 1; i <= num; i++) {
      let rowDiv = document.createElement('div');
      rowDiv.classList.add('triangle-row');

      // Create blocks for each row
      for (let j = 1; j <= i; j++) {
        let blockDiv = document.createElement('div');
        blockDiv.classList.add('triangle-block');
        rowDiv.appendChild(blockDiv);
      }

      triangleDiv.appendChild(rowDiv);
    }
  }