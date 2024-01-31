


export function showAnswers(questions,selectedAnswers ,currentIndexOfQuiz,showTheCorrectanswer ,startQuiz) {
     
    const questionItems = document.querySelectorAll('.items');
    let correctAnswerscout = 0
    questions.forEach((question, index) => {
        const correctAnswerIndex = question.answers.findIndex(answer => answer.correct);

        // Highlight correct and wrong answers
        if (selectedAnswers[index] !== undefined) {
            if (selectedAnswers[index] === correctAnswerIndex) {
                // Correct answer
              
                questionItems[index].style.backgroundColor = 'lightgreen';
               
             correctAnswerscout ++
                
            } else {
                // Wrong answer
                questionItems[index].style.backgroundColor = 'lightcoral';
            }
        } else {
            // No answer selected
            questionItems[index].style.backgroundColor = 'lightgray';
        }
    });
     
        // show the score
    const your_score = document.querySelector('.scores');
  
    const got_Score = document.createElement('div');
    got_Score.className = 'your-score';

    got_Score.innerHTML = `${correctAnswerscout}/${questions.length}`

    your_score.appendChild(got_Score)
    your_score.style.display = 'flex'
     
   

     questionItems.forEach((items) => {
         items.addEventListener('click', function () {
           
                 
       const questionIndex = parseInt(items.dataset.questionIndex);
       currentIndexOfQuiz = questionIndex;
showTheCorrectanswer(questions, selectedAnswers, currentIndexOfQuiz)
    //    startQuiz(questions,currentIndexOfQuiz,selectedAnswers);
             
    
             
         })
     })
}