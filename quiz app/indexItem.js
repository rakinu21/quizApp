



 export function EndexOfQuestion(questions ,currentIndexOfQuiz ,startQuiz ,selectedAnswers, showAnswers, showTheCorrectanswer ) {

    const itemsQuestionContainer = document.querySelector('.items-question');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    // Dynamically create and append items based on the questions array
    
    nextBtn.addEventListener('click', function showNextQuestion() {
      // Check if any checkbox is checked
      const prev_and_next_container = document.querySelector('.question-next-pre')
      const checkboxes = document.querySelectorAll('.list-of-answer input[type="checkbox"]');
      const anyCheckboxChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
  
  
  
      if (!anyCheckboxChecked && currentIndexOfQuiz !== questions.length) {
          // Display a warning message or take appropriate action
          alert('Please select an answer before moving to the next question.');
          return; // Do not proceed if no checkbox is checked
      }
   
  
      if (currentIndexOfQuiz < questions.length - 1) {
          currentIndexOfQuiz++;
          startQuiz(questions ,currentIndexOfQuiz,selectedAnswers);
      } else {
          // Quiz is finished, show correct and wrong answers
          showAnswers(questions,selectedAnswers,currentIndexOfQuiz,showTheCorrectanswer );
        
          // Optionally, you can add additional logic here (e.g., showing a score)
          showTheCorrectanswer(questions ,selectedAnswers ,currentIndexOfQuiz)
          prev_and_next_container.remove();
          nextBtn.remove();
          prevBtn.remove()
      }
  
     
  });
  

  prevBtn.addEventListener ('click',function showPrevQuestion() {
   if (currentIndexOfQuiz > 0) {
       
       currentIndexOfQuiz--;
       startQuiz(questions ,currentIndexOfQuiz,selectedAnswers);
   }
} ) 

 
questions.forEach((question, index) => {
   const item = document.createElement('div');
   item.classList.add('items');
   item.textContent = index + 1;  // Display item number (1-indexed)

   // Set data attribute to store the corresponding question index
   item.setAttribute('data-question-index', index);

   // Add click event listener to each item

   item.addEventListener('click', () => {

      if (question === questions.length -1 )  {
         nextBtn.innerHTML = `Submit`;
        
       
     } else {
         nextBtn.innerHTML = 'NEXT';
     }
 
     
       const questionIndex = parseInt(item.dataset.questionIndex);
       currentIndexOfQuiz = questionIndex;

       startQuiz(questions,currentIndexOfQuiz,selectedAnswers);
      

      console.log('click');
   });

   // Append the item to the container
   itemsQuestionContainer.appendChild(item);
});
}
