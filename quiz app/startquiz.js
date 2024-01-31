


export default function startQuiz(questions, currentIndexOfQuiz,selectedAnswers) {
   
    const list_item = document.querySelector('.container-quiz');
    const nextBtn = document.querySelector('.next');
   
    const question = document.querySelector('.question')
     
    let current_question = questions[currentIndexOfQuiz];


    if (currentIndexOfQuiz === questions.length -1)  {
        nextBtn.innerHTML = `Submit`;
  
      
    } else {
        nextBtn.innerHTML = 'NEXT';
    }

    let questionNumber = currentIndexOfQuiz + 1;
    question.innerHTML = `Question ${questionNumber}. <h3 class="question-text">${current_question.question}</h3>`

    list_item.innerHTML = ''; // Clear previous answers

    current_question.answers.forEach((answer, index) => {
        // console.log(index , answer);
        const list = document.createElement('li');
        const checkboxId = `answer-${index}`;
        console.log(checkboxId); // Check if this answer was selected previously

        const isChecked = selectedAnswers[currentIndexOfQuiz] === index;

  
  
        list.innerHTML = `<input type="checkbox" id="${checkboxId}" data-index="${index}" ${isChecked ? 'checked' : ''}> ${answer.text}` 
        list.className = 'list-of-answer';
        list_item.appendChild(list);
    });

    updateCheckboxesEventListeners(selectedAnswers,currentIndexOfQuiz);

    
}

function updateCheckboxesEventListeners(selectedAnswers,currentIndexOfQuiz) {
    let checkboxes = document.querySelectorAll('.list-of-answer input[type="checkbox"]');

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            checkboxes.forEach(function(innerCheckbox) {
                if (innerCheckbox !== checkbox) {
                    innerCheckbox.checked = false;
                }
            });

            // Check if the selected answer is correct
          
            if (checkbox.checked) {
           
                // Store the selected answer index
                selectedAnswers[currentIndexOfQuiz] = parseInt(checkbox.getAttribute('data-index'));
                highlightQuestionIndex(currentIndexOfQuiz);
            } else {
                // Clear the stored answer if unchecked
                selectedAnswers[currentIndexOfQuiz] = undefined;
                removeHighlightQuestionIndex(currentIndexOfQuiz);
            }
        });
    });
}

function highlightQuestionIndex(index) {
    const questionItems = document.querySelectorAll('.items');
    questionItems[index].style.backgroundColor = '#f6f1f4';
}

function removeHighlightQuestionIndex(index) {
    const questionItems = document.querySelectorAll('.items');
    questionItems[index].style.backgroundColor = '';
}

