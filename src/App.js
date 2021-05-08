import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which of the following is observed as Sports Day every year?",
      answers: [
        {
          text: "29 August",
          correct: true,
        },
        {
          text: "22 April",
          correct: false,
        },
        {
          text: "26 July",
          correct: false,
        },
        {
          text: "2 October",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "A coin of what value is called as “Athhanni”?",
      answers: [
        {
          text: "1 Rupee",
          correct: false,
        },
        {
          text: "50 Paise",
          correct: true,
        },
        {
          text: "25 Paise",
          correct: false,
        },
        {
          text: "2 Rupees",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which glacier is the primary source of the river Ganga?",
      answers: [
        {
          text: "Gangotri",
          correct: true,
        },
        {
          text: "Godwin-Austen",
          correct: false,
        },
        {
          text: "Pindari",
          correct: false,
        },
        {
          text: " Siachen",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "What is Balushahi a type of?",
      answers: [
        {
          text: "Turban",
          correct: false,
        },
        {
          text: "paper Art",
          correct: false,
        },
        {
          text: "Sweet",
          correct: true,
        },
        {
          text: "Dance Form",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which of the following gods is also known as ‘Gauri Nandan’?",
      answers: [
        {
          text: "Agni",
          correct: false,
        },
        {
          text: "Ganesha",
          correct: true,
        },
        {
          text: "Indra",
          correct: false,
        },
        {
          text: "Hanuman",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Which of these terms can only be used for women?",
      answers: [
        {
          text: "Dirghaayu",
          correct: false,
        },
        {
          text: "Suhagan",
          correct: true,
        },
        {
          text: "Chiranjeevi",
          correct: false,
        },
        {
          text: "Sushil",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Where was the BRICS summit held in 2014?",
      answers: [
        {
          text: "Brazil",
          correct: true,
        },
        {
          text: "India",
          correct: false,
        },
        {
          text: "Russia",
          correct: false,
        },
        {
          text: "China",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Which of these are names of national parks located in Madhya Pradesh?",
      answers: [
        {
          text: "Krishna and Kanhaiya",
          correct: false,
        },
        {
          text: "Kanha and Madhav",
          correct: true,
        },
        {
          text: "Ghanshyam and Murari",
          correct: false,
        },
        {
          text: "Girdhar and Gopal",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "In the game of ludo the discs or tokens are of how many colours?",
      answers: [
        {
          text: "One",
          correct: false,
        },
        {
          text: "Two",
          correct: false,
        },
        {
          text: "Three",
          correct: false,
        },
        {
          text: "Four",
          correct: true,
        },
      ],
    },
    {
      id: 12,
      question: "Which day is observed as the World Standards Day?",
      answers: [
        {
          text: "June 26",
          correct: false,
        },
        {
          text: "Oct 14",
          correct: true,
        },
        {
          text: "Nov 15",
          correct: false,
        },
        {
          text: "Dec 2",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "The Indian National Calendar is based on",
      answers: [
        {
          text: "Christian era",
          correct: false,
        },
        {
          text: "Vikram era",
          correct: false,
        },
        {
          text: "Saka era",
          correct: true,
        },
        {
          text: "Hijji era",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Which of the followiing is a folk dance of India?",
      answers: [
        {
          text: "Kathakali",
          correct: false,
        },
        {
          text: "Garba",
          correct: true,
        },
        {
          text: "Mohiniattam",
          correct: false,
        },
        {
          text: "Manipuri",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "The dance encouraged and performed from the temple of Tanjore was",
      answers: [
        {
          text: "Odissi",
          correct: false,
        },
        {
          text: "Bharatnatyam",
          correct: true,
        },
        {
          text: "Kathakali",
          correct: false,
        },
        {
          text: "Mohiniattam",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;