(function(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: 
      "1. Sparas referenstyper i Heapen eller Stacken?  (L3)",
      answers: {
        a: "Heap",
        b: "Stack",
      },
      correctAnswer: "a"
    },
    {
      question: "2. Vilket av följande omvandlar en typ till ett 16-bitars heltal i C #?",
      answers: {
        a: "ToDecimal",
        b: "ToInt16",
        c: "int.Parse",
        d: "ToDouble"
      },
      correctAnswer: "b"
    },
    {
      question: "3. Vilket av följande är standardåtkomstspecifikatorn för en klassmedelsvariabel? ",
      answers: {
        a: "Private",
        b: "Protected",
        c: "public"
      },
      correctAnswer: "a"
    },
    {
      question: "4. Vad står LINQ för?",
      answers: {
        a: "Language Integrated Notation Query",
        b: "Lists In new Query",
        c: "Language Integrated Query",
        d: "Vet ej"
      },
      correctAnswer: "c"
    },
    {
      question: "5. Vilken av följande operatorer kan du använda för komma åt en metod av en klass?",
      answers: {
        a: ":",
        b: "::",
        c: ".",
        d: "#"
      },
      correctAnswer: "c"
    },
    {
      question: "6. Hur många Konstruktorer kan man definera i en klass?",
      answers: {
        a: "Två är max.",
        b: "Tre om man lägger in parametrar.",
        c: "Endast en per klass.",
        d: "Hur många du vill."
      },
      correctAnswer: "d"
    },

    {
      question: "7. Vad är det binartalet 0110 1000 i heltal?",
      answers: {
        a: "255",
        b: "128",
        c: "104",
        d: "69",
        e: "Vet ej"
      },
      correctAnswer: "c"
    },
    {
      question: "8. Om man vill initiera ett nytt object, hur gör man då?",
      answers: {
        a: "Skriver new följt av klassens namn",
        b: "Det går inte.",
        c: "Man skriver en ny funktion",
        d: "Man får använda sig av Add funktion",
      },
      correctAnswer: "a"
    },
    {
      question: "9. Vilken av följande Operator har högsta företrädesnivå?",
      answers: {
        a: "switch",
        b: "a[i] och new",
        c: "x ^ y",
        d: "x || y",
        e: "x + y",
        f: "x * y"
      },
      correctAnswer: "b"
    },
    {
      question: "10. Hur definierar man ett tvådimensionellt fält?",
      answers: {
        a: "int[]",
        b: "int[,,]",
        c: "int[,]",
      },
      correctAnswer: "c"
    },
    {
      question: "11. Hur många klasser kan en klass ärva?",
      answers: {
        a: "1",
        b: "Inga",
        c: "Hur många som helst",
        d: "Vet inte",
      },
      correctAnswer: "a"
    },
    {
      question: "12. Vilket av följande är en tilldelning?",
      answers: {
        a: "*=",
        b: "==",
        c: "+",
        d: ">=",
      },
      correctAnswer: "a"
    },
    {
      question: "13. Vilken av följande syntax är rätt om man inte vill returnera något värde?",
      answers: {
        a: "public int ReturneraVärde()",
        b: "public return ReturneraVärde()  ",
        c: "public ReturneraVärde()",
        d: "public void ReturneraVärde()",
      },
      correctAnswer: "d"
    },
    {
      question: "14. Vad står OOP för?",
      answers: {
        a: "Organiserad Orienterad Programmering.",
        b: "Orienterad Objekteringsprogrammering.",
        c: "Object-Orienterad Programmering.",
      },
      correctAnswer: "c"
    },
    {
      question: "15. Vad är den binäratalet 1000 0001?",
      answers: {
        a: "234.",
        b: "23",
        c: "129",
        d: "154",
      },
      correctAnswer: "c"
    },
    {
      question: "16. Om en för lång kedja använder upp allt minne, vad får man då?",
      answers: {
        a: "OutOfMemoryException",
        b: "StackOverflowException",
        c: "InvalidCastException",
        d: "IndexOutOfRangeException"
      },
      correctAnswer: "b"
    },
    {
      question: "17. Hur många gränssnitt(Interfaces) kan man implementera hos en klass?",
      answers: {
        a: "Precis som arv, endast en.",
        b: "Ingen.",
        c: "Två.",
        d: "Flera."
      },
      correctAnswer: "d"
    },
    {
      question: "18. Om man har en sträng och vill ha ut en del av denna vad använder man då?",
      answers: {
        a: ".Split(' ')",
        b: ".Substring(0, 3)",
        c: ".Trim()",
      },
      correctAnswer: "b"
    },
    {
      question: "19. Vad får du ut om du skriver:  var emailsToYoungPeople = from c in contacts where c.Age < 25 select c.Email;",
      answers: {
        a: "Alla kontakter där kontakterna är äldre än 25.",
        b: "Alla kontakter där kontakterna är yngre än 25.",
        c: "Alla Email från kontakter. ",
      },
      correctAnswer: "b"
    },
    {
      question: "20. Vad i Decimaltal med basen 10 är Hex F?",
      answers: {
        a: "16",
        b: "24",
        c: "13",
        d: "15",
        e: "17"
      },
      correctAnswer: "d"
    },
    {
      question: "21. Vilken av följande åtkomstmodiferare har högsta begränsingen?",
      answers: {
        a: "internal",
        b: "private",
        c: "private protected",
        d: "public",
        e: "protected"
      },
      correctAnswer: "c"
    },
    {
      question: "22. Vad står CLR för?",
      answers: {
        a: "Common Language Running",
        b: "Common Language Run",
        c: "Common Language RunTime",
      },
      correctAnswer: "c"
    },
    {
      question: "23. Vad är Git?",
      answers: {
        a: "Versionshantering",
        b: "Databas",
        c: "Hemsida enbart för .NET"
      },
      correctAnswer: "a"
    },
  ];

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
