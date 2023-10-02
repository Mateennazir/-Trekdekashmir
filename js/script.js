var currentQuestion = 1;
var totalQuestions = 9; 


function openPopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'flex';
  setTimeout(function () {
    popup.classList.remove('fade-out');
    popup.classList.add('fade-in');
  }, 10);
  updateNavigationButtons();
}

function closePopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
}

function nextQuestion(questionNumber) {
  var answer = document.querySelector('input[name="q' + currentQuestion + '"]:checked');


  var popup = document.getElementById('popup');
  popup.classList.remove('fade-in');
  popup.classList.add('fade-out');
  setTimeout(function () {
    if (questionNumber <= totalQuestions) {
      currentQuestion = questionNumber;
      popup.innerHTML = `
        ${getQuestionHTML(questionNumber)}
        <div class="navigation-btns">
          <button onclick="previousQuestion(${questionNumber - 1})">Previous</button>
          <button onclick="closePopup()">Close</button>
          <button onclick="nextQuestion(${questionNumber + 1})">Next</button>
        </div>
      `;
      setTimeout(function () {
        popup.classList.remove('fade-out');
        popup.classList.add('fade-in');
      }, 10);
      updateNavigationButtons();
    } else {
      popup.style.display = 'none';
      alert('Thank you');
    }
  }, 300); 
}

function previousQuestion(questionNumber) {
  nextQuestion(questionNumber);
}

function updateNavigationButtons() {
  var previousButton = document.querySelector('button[onclick^="previousQuestion"]');
  var nextButton = document.querySelector('button[onclick^="nextQuestion"]');

  if (currentQuestion === 1) {
    previousButton.style.display = 'none';
  } else {
    previousButton.style.display = 'block';
  }

  if (currentQuestion === totalQuestions) {
    nextButton.textContent = 'Submit';
  } else {
    nextButton.textContent = 'Next';
  }
}

function getQuestionHTML(questionNumber) {
  switch (questionNumber) {
    case 1:
      return `
      <h2>Which Destinations you Want to Explore?</h2>
      <div class="option-container">
      <div  class="option-label">
      <label for="q${questionNumber}_option1">
      <input type="radio" id="q${questionNumber}_option1" name="q${questionNumber}" value="Option 1"> <img class="img-option"  src="image1.png" alt="Image 1">
        </label>
        <span>Kashmir</span> 
      </div>
      <div  class="option-label">
        <label for="q${questionNumber}_option2">
          <input type="radio" id="q${questionNumber}_option2" name="q${questionNumber}" value="Option 2"> <img class="img-option"  src="image1.png" alt="Image 2">
        </label>
        <span>Sample</span> 
      </div>
      <div  class="option-label">
        <label for="q${questionNumber}_option3">
          <input type="radio" id="q${questionNumber}_option3" name="q${questionNumber}" value="Option 3"> <img class="img-option"  src="image1.png" alt="Image 3">
        </label>
        <span>Sample</span> 
      </div>
      <div  class="option-label">
        <label for="q${questionNumber}_option4">
          <input type="radio" id="q${questionNumber}_option4" name="q${questionNumber}" value="Option 4"> <img class="img-option"  src="image1.png" alt="Image 4">
        </label>
        <span>Sample</span> 
      </div>
    </div>
      `;
      case 2:
        return `
        <h2>Which Category Hotel You Want?</h2>
        <div class="option-container">
          <div  class="option-label">
          <label for="q${questionNumber}_option1">
          <input type="radio" id="q${questionNumber}_option1" name="q${questionNumber}" value="Option 1"> <img class="img-option"  src="./img/1-star.png" alt="Image 1">
            </label>
          </div>
          <div  class="option-label">
            <label for="q${questionNumber}_option2">
              <input type="radio" id="q${questionNumber}_option2" name="q${questionNumber}" value="Option 2"> <img class="img-option"  src="./img/2-star.png" alt="Image 2">
            </label>
          </div>
          <div  class="option-label">
            <label for="q${questionNumber}_option3">
              <input type="radio" id="q${questionNumber}_option3" name="q${questionNumber}" value="Option 3"> <img class="img-option"  src="./img/3-star.png" alt="Image 3">
            </label>
          </div>
          <div  class="option-label">
            <label for="q${questionNumber}_option4">
              <input type="radio" id="q${questionNumber}_option4" name="q${questionNumber}" value="Option 4"> <img class="img-option"  src="./img/4-star.png" alt="Image 4">
            </label>
          </div>
          <div  class="option-label">
            <label for="q${questionNumber}_option5">
              <input type="radio" id="q${questionNumber}_option5" name="q${questionNumber}" value="Option 5"> <img class="img-option"  src="./img/5-star.png" alt="Image 4">
            </label>
          </div>
        </div>
        `;
    case 3:
      return `
      <h2>Have You Booked Flight / Train?</h2>
      <div class="option-container yes-no">
        <div  class="option-label">
          <label for="q${questionNumber}_option1">
        <input type="radio" id="q${questionNumber}_option1" name="q${questionNumber}" value="Option 1"> <img class="img-option"  src="./img/yes.png" alt="Image 1">
          </label>
        </div>
        <div  class="option-label">
          <label for="q${questionNumber}_option2">
            <input type="radio" id="q${questionNumber}_option2" name="q${questionNumber}" value="Option 2"> <img class="img-option"  src="./img/no.png" alt="Image 2">
          </label>
        </div>
      </div>
      `;
      case 4:
        return `
        <h2>Select your Departure Date</h2>
        <div class="option-container date-option">
          <label for="q${questionNumber}_datepicker">Select a Date:  </label>
          <input type="date" id="q${questionNumber}_datepicker" name="q${questionNumber}_datepicker">
          </div>
        `;
    case 5:
      return `
      <h2>How Long Will Be Your Holiday?</h2>
      <div class="option-container holiday-length">
        <div  class="option-label">
          <label for="q${questionNumber}_option1">
            <input type="radio" id="q${questionNumber}_option1" name="q${questionNumber}" value="Option 1">
            <span>1 Day</span> 
          </label><br>
        </div>
        <div  class="option-label">
          <label for="q${questionNumber}_option2">
            <input type="radio" id="q${questionNumber}_option2" name="q${questionNumber}" value="Option 2"> <span>2 Days</span>
          </label><br>
        </div>
        <div  class="option-label">
          <label for="q${questionNumber}_option3">
            <input type="radio" id="q${questionNumber}_option3" name="q${questionNumber}" value="Option 2"> <span>3 Days</span>
          </label><br>
        </div>
        <div  class="option-label">
          <label for="q${questionNumber}_option4">
            <input type="radio" id="q${questionNumber}_option4" name="q${questionNumber}" value="Option 2"> <span>4 Days</span>
          </label><br>
        </div>
        <div  class="option-label">
          <label for="q${questionNumber}_option5">
            <input type="radio" id="q${questionNumber}_option5" name="q${questionNumber}" value="Option 2"> <span>5 Days</span>
          </label><br>
        </div>
        <div  class="option-label">
          <label for="q${questionNumber}_option6">
            <input type="radio" id="q${questionNumber}_option6" name="q${questionNumber}" value="Option 2"> <span>6 Days</span>
          </label><br>
        </div>
        <div  class="option-label">
          <label for="q${questionNumber}_option7">
            <input type="radio" id="q${questionNumber}_option7" name="q${questionNumber}" value="Option 2"> <span>7 Days</span>
          </label><br>
        </div>
        <div  class="option-label">
          <label for="q${questionNumber}_option8">
            <input type="radio" id="q${questionNumber}_option8" name="q${questionNumber}" value="Option 2"> <span>8 Days</span>
          </label><br>
        </div>
        <div  class="option-label">
          <label for="q${questionNumber}_option9">
            <input type="radio" id="q${questionNumber}_option9" name="q${questionNumber}" value="Option 2"> <span>9 Days</span>
          </label><br>
        </div>
        <div  class="option-label">
          <label for="q${questionNumber}_option10">
            <input type="radio" id="q${questionNumber}_option10" name="q${questionNumber}" value="Option 2"> <span>10 Days</span>
          </label><br>
        </div>
        <div  class="option-label">
          <label for="q${questionNumber}_option11">
            <input type="radio" id="q${questionNumber}_option11" name="q${questionNumber}" value="Option 2"> <span>10+ Days</span>
          </label><br>
        </div>
      </div>
      `;
      case 6:
        return `
        <h2>Let us know your holiday planning status</h2>
        <div class="option-container">
          <div  class="option-label">
          <label for="q${questionNumber}_option1">
          <input type="radio" id="q${questionNumber}_option1" name="q${questionNumber}" value="Option 1"> <img class="img-option img-option-square"  src="./img/not-sure.png" alt="Image 1">
            </label>
            <span></span> 
          </div>
          <div  class="option-label">
            <label for="q${questionNumber}_option2">
              <input type="radio" id="q${questionNumber}_option2" name="q${questionNumber}" value="Option 2"> <img class="img-option img-option-square"  src="./img/definitely.png" alt="Image 2">
            </label>
            <span></span> 
          </div>
          <div  class="option-label">
            <label for="q${questionNumber}_option3">
              <input type="radio" id="q${questionNumber}_option3" name="q${questionNumber}" value="Option 3"> <img class="img-option img-option-square"  src="./img/destination-decided.png" alt="Image 3">
            </label>
            <span></span> 
          </div>
          <div  class="option-label">
            <label for="q${questionNumber}_option4">
              <input type="radio" id="q${questionNumber}_option4" name="q${questionNumber}" value="Option 4"> <img class="img-option img-option-square"  src="./img/flight-booked.png" alt="Image 4">
            </label>
            <span></span> 
          </div>
        </div>
        `;
    case 7:
      return `
      <h2>I will book this Holiday In</h2>
      <div class="option-container">
          <div  class="option-label">
            <label for="q${questionNumber}_option1">
              <input type="radio" id="q${questionNumber}_option1" name="q${questionNumber}" value="Option 1">
              <span>Not Now</span> 
            </label><br>
          </div>
          <div  class="option-label">
            <label for="q${questionNumber}_option2">
              <input type="radio" id="q${questionNumber}_option2" name="q${questionNumber}" value="Option 2"> <span>1-3 Days</span>
            </label><br>
          </div>
          <div  class="option-label">
            <label for="q${questionNumber}_option3">
              <input type="radio" id="q${questionNumber}_option3" name="q${questionNumber}" value="Option 2"> <span>This Week</span>
            </label><br>
          </div>
          <div  class="option-label">
            <label for="q${questionNumber}_option4">
              <input type="radio" id="q${questionNumber}_option4" name="q${questionNumber}" value="Option 2"> <span>This Month</span>
            </label><br>
          </div>
          <div  class="option-label">
            <label for="q${questionNumber}_option5">
              <input type="radio" id="q${questionNumber}_option5" name="q${questionNumber}" value="Option 2"> <span>Just Checking Price</span>
            </label><br>
          </div>
      </div>
        <!-- Add more text radio options here -->
      `;
    case 8:
      return `
      <h2>How many people are Traveling?</h2>
      <div class="option-container traveller-info">
      <div  class="option-label">
        <label for="q${questionNumber}_input1">Adults (12+ Years) :
          <input type="number" class="traveller-detail" id="q${questionNumber}_input1" name="q${questionNumber}_input1">
        </label><br>
        </div>
        <div  class="option-label">
        <label for="q${questionNumber}_input2">Children (0 to 5 Years):
          <input type="number" class="traveller-detail" id="q${questionNumber}_input2" name="q${questionNumber}_input2">
        </label><br>
        </div>
        <div  class="option-label">
        <label for="q${questionNumber}_input3">Children (5 to 12 Years):
          <input type="number" class="traveller-detail" id="q${questionNumber}_input3" name="q${questionNumber}_input3">
        </label><br>
        </div>
      </div>
      `;
    case 9:
      return `
      <h2>Please Share Your Contact Details so We Can Arrange Best Holiday Quotes For You ASAP. Thanks.</h2>
      <div class="option-container contact-detail">
      <div  class="option-label contact-option ">
          <label for="name">Name:</label> <br>
          <input type="text" id="name" name="name"><br>
        </div>
        <div  class="option-label contact-option ">
          <label for="email">Email:</label> <br>
          <input type="email" id="email" name="email"><br>
        </div>
        <div  class="option-label contact-option ">
          <label for="phone">Phone Number:</label> <br>
          <input type="tel" id="phone" name="phone"><br>
        </div>
        <div  class="option-label contact-option ">
          <label for="phone">Depature City</label> <br>
          <input type="tel" id="phone" name="phone"><br>
        </div>
      </div>
      `;
    default:
      return '';
  }
}