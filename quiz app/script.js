
import { questions } from "./question.js";
import { shuffleArray } from "./shuffle.js";
import startQuiz from "./startquiz.js";
import { showTheCorrectanswer } from "./correctAnswer.js";
import { EndexOfQuestion } from "./indexItem.js";
import { showAnswers } from "./showAnswer.js";


// ,selectedAnswersShuffle the questiselectedAnswers,ons array before starting the quiz
shuffleArray(questions);




let currentIndexOfQuiz = 0;
let selectedAnswers = new Array(questions.length) // Array to store user-selected answers


// restart;



startQuiz(questions, currentIndexOfQuiz,selectedAnswers);


EndexOfQuestion(questions ,currentIndexOfQuiz ,startQuiz , selectedAnswers, showAnswers,showTheCorrectanswer);


