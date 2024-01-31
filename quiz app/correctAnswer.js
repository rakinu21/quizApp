
export function showTheCorrectanswer(questions ,selectedAnswers ,currentIndexOfQuiz) {
    
    const question = document.querySelector('.question')  
    const list_item = document.querySelector('.container-quiz');
    let current_question = questions[currentIndexOfQuiz];



    let questionNumber = currentIndexOfQuiz + 1;
    question.innerHTML = `Question ${questionNumber}. <h3 class="question-text">${current_question.question}</h3>`

    list_item.innerHTML = ''; // Clear previous answers

    current_question.answers.forEach((answer, index) => {
        // console.log(index , answer);
        const list = document.createElement('li');
        const checkboxId = `answer-${index}`;
        console.log(checkboxId); // Check if this answer was selected previously

        
        const isCorrect = answer.correct;
        const isChecked = selectedAnswers[currentIndexOfQuiz] === index;

        if (isCorrect) {
            // Add an indicator for the correct answer (e.g., checkmark)
            list.style.background = 'green';
        }
   
        list.innerHTML = `<input type="checkbox" id="${checkboxId}" data-index="${index}" ${isChecked ? 'checked' : ''}> ${answer.text}` 
        list.className = 'list-of-answer';
        list_item.appendChild(list);
    });


}