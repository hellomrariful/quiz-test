import { useState } from "react";

const Home = () => {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "How old are you?",
      options: [
        { id: 0, text1: "Less then 18 years", isCorrect: false },
        { id: 1, text1: "18-29 years", isCorrect: false },
        { id: 2, text2: "30-49 years", isCorrect: false },
        { id: 3, text2: "50-80 years", isCorrect: true },
      ],
    },
    {
      text: "How do you make a living?",
      options: [
        { id: 0, text1: "I work", isCorrect: false },
        { id: 1, text1: "I am self-employed", isCorrect: false },
        { id: 2, text2: "I am unemployed", isCorrect: false },
        { id: 3, text2: "I am a job student", isCorrect: true },
      ],
    },
    {
      text: "What is your average income per year?",
      options: [
        { id: 0, text1: "Less then $10,000", isCorrect: false },
        { id: 1, text1: "$10,000-$30,000", isCorrect: false },
        { id: 2, text2: "$30,000-$50,000", isCorrect: false },
        { id: 3, text2: "More than $50,000", isCorrect: true },
      ],
    },
    {
      text: "What is your financial goal for the next 5 years?",
      options: [
        { id: 0, text1: "Buy a super car", isCorrect: false },
        { id: 1, text1: "Buy an apartment", isCorrect: false },
        { id: 2, text2: "Start my own business", isCorrect: false },
        { id: 3, text2: "Visit every country", isCorrect: true },
      ],
    },
    {
      text: "How much you invest right now to get reach at your financial goal?",
      options: [
        { id: 0, text1: "Less then $500", isCorrect: false },
        { id: 1, text1: "$500-$1000", isCorrect: false },
        { id: 2, text2: "$1000-$2000", isCorrect: false },
        { id: 3, text2: "More than $3000", isCorrect: true },
      ],
    },
    {
      text: "Do you have any experience in Bitcoin trading?",
      options: [
        { id: 0, text1: "No, I never heard it", isCorrect: false },
        { id: 1, text1: "No, but I have interest", isCorrect: false },
        { id: 2, text2: "Yes, I am a beginner", isCorrect: false },
        {
          id: 3,
          text2: "Yes, I have professionally experience",
          isCorrect: true,
        },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="px-32 text-white">
      <div className="flex text-center mx-auto justify-center mt-10 gap-4 items-center">
        <img
          className="w-7 h-fit text-white bg-slate-100 rounded p-[1px]"
          src="/icon.jpeg"
          alt=""
        />

        <a className="text-white text-3xl" href="/">
          Online Test
        </a>
      </div>

      <div className="text-white text-center mt-10">
        <h1 className="text-4xl font-bold">
          Would You Make A Great Career Online And Become A Millionaire By 2024?
        </h1>
        <p className="text-2xl mt-3">
          Take this FREE test and find out how you can make money on the
          Internet.
        </p>
      </div>

      <div className=" text-center mt-10 text-white">
        {/* 3. Show results or show the question game  */}
        {showResults ? (
          /* 4. Final Results */

          <div className="bg-[#322f2f] p-10">
            <h1 className="text-2xl font-bold uppercase">Thank You</h1>
            <h2>
              Your Test Result:{" "}
              <span className="text-red-600 uppercase">Excellent</span> (100 out
              of 92)
            </h2>
            <p className="mt-3">
              You are an ideal person for making money online,
            </p>
            <p>
              You may have a chance to earn MUCH MORE THAN{" "}
              <span className="text-red-600">$5,000</span> daily!
            </p>
            <p>
              We have selected for you{" "}
              <span className="text-red-600">4 offers</span> for fast online
              money making.
            </p>
            <p>
              Click the <span className="text-red-600">GET OFFER</span> button
              to go to the best offer immediately!
            </p>
            <button className="bg-[#ffba5e] px-32 py-4 rounded text-xl uppercase mt-3 text-black">
              Get Offer
            </button>
          </div>
        ) : (
          /* 5. Question Card  */
          <div>
            {/* Current Question  */}
            <div className="flex mx-auto text-center justify-center items-center gap-1">
              <h3 className="text-2xl font-bold">
                {questions[currentQuestion].text}
              </h3>
              <h2 className="text-xl">
                ({currentQuestion + 1} out of {questions.length})
              </h2>
            </div>

            {/* List of possible answers  */}
            <ul className="mt-2 mx-36 text-xl text-black">
              <div className="grid grid-cols-2 gap-5">
                {/* First option on the left side */}
                {questions[currentQuestion].options
                  .slice(0, 2)
                  .map((option) => (
                    <li
                      key={option.id}
                      className="bg-[#ffba5e] hover:bg-[#e49328] cursor-pointer p-2 rounded"
                      onClick={() => optionClicked(option.isCorrect)}
                    >
                      {option.text1 || option.text2}
                    </li>
                  ))}

                {/* Last two options on the right side */}
                {questions[currentQuestion].options.slice(2).map((option) => (
                  <li
                    key={option.id}
                    className="bg-[#ffba5e] hover:bg-[#e49328] cursor-pointer p-2 rounded"
                    onClick={() => optionClicked(option.isCorrect)}
                  >
                    {option.text1 || option.text2}
                  </li>
                ))}
              </div>
            </ul>
          </div>
        )}
      </div>

      <div className="mt-20">
        <div className="flex justify-between mb-3">
          <h1>59 comments</h1>
          <p>Sort by: Top</p>
        </div>
        <hr />

        <div>
          <div className="flex gap-2 mt-3">
            <div className=" ">
              <img className="w-14 h-13 rounded" src="photo-01.jpeg" alt="" />
            </div>

            <div className="w-full ">
              <div className="bg-[#474747] rounded-lg p-3 ">
                <h1 className="font-bold">Jhon Doe</h1>
                <p className="text-sm">Wow, Thanks Man😱</p>
              </div>
              <p className="flex gap-3 text-sm mt-1">
                <span>like</span>
                <span> 20k </span>
                <span>1hrs</span>
              </p>
            </div>
          </div>

          <div className="flex gap-2 mt-3">
            <div className=" ">
              <img className="w-14 h-13 rounded" src="photo-01.jpeg" alt="" />
            </div>

            <div className="w-full ">
              <div className="bg-[#474747] rounded-lg p-3 ">
                <h1 className="font-bold">Jhon Doe</h1>
                <p className="text-sm">Wow, Thanks Man😱</p>
              </div>
              <p className="flex gap-3 text-sm mt-1">
                <span>like</span>
                <span> 20k </span>
                <span>1hrs</span>
              </p>
            </div>
          </div>

          <div className="flex gap-2 mt-3">
            <div className=" ">
              <img className="w-14 h-13 rounded" src="photo-01.jpeg" alt="" />
            </div>

            <div className="w-full ">
              <div className="bg-[#474747] rounded-lg p-3 ">
                <h1 className="font-bold">Jhon Doe</h1>
                <p className="text-sm">Wow, Thanks Man😱</p>
              </div>
              <p className="flex gap-3 text-sm mt-1">
                <span>like</span>
                <span> 20k </span>
                <span>1hrs</span>
              </p>
            </div>
          </div>

          <div className="flex gap-2 mt-3 ml-16">
            <div className=" ">
              <img className="w-14 h-13 rounded" src="photo-01.jpeg" alt="" />
            </div>

            <div className="w-full ">
              <div className="bg-[#474747] rounded-lg p-3 ">
                <h1 className="font-bold">Jhon Doe</h1>
                <p className="text-sm">Wow, Thanks Man😱</p>
              </div>
              <p className="flex gap-3 text-sm mt-1">
                <span>like</span>
                <span> 20k </span>
                <span>1hrs</span>
              </p>
            </div>
          </div>

          <div className="flex gap-2 mt-3">
            <div className=" ">
              <img className="w-14 h-13 rounded" src="photo-01.jpeg" alt="" />
            </div>

            <div className="w-full ">
              <div className="bg-[#474747] rounded-lg p-3 ">
                <h1 className="font-bold">Jhon Doe</h1>
                <p className="text-sm">Wow, Thanks Man😱</p>
              </div>
              <p className="flex gap-3 text-sm mt-1">
                <span>like</span>
                <span> 20k </span>
                <span>1hrs</span>
              </p>
            </div>
          </div>
          <div className="flex gap-2 mt-3">
            <div className=" ">
              <img className="w-14 h-13 rounded" src="photo-01.jpeg" alt="" />
            </div>

            <div className="w-full ">
              <div className="bg-[#474747] rounded-lg p-3 ">
                <h1 className="font-bold">Jhon Doe</h1>
                <p className="text-sm">Wow, Thanks Man😱</p>
              </div>
              <p className="flex gap-3 text-sm mt-1">
                <span>like</span>
                <span> 20k </span>
                <span>1hrs</span>
              </p>
            </div>
          </div>
          <div className="flex gap-2 mt-3">
            <div className=" ">
              <img className="w-14 h-13 rounded" src="photo-01.jpeg" alt="" />
            </div>

            <div className="w-full ">
              <div className="bg-[#474747] rounded-lg p-3 ">
                <h1 className="font-bold">Jhon Doe</h1>
                <p className="text-sm">Wow, Thanks Man😱</p>
              </div>
              <p className="flex gap-3 text-sm mt-1">
                <span>like</span>
                <span> 20k </span>
                <span>1hrs</span>
              </p>
            </div>
          </div>
          <div className="flex gap-2 mt-3">
            <div className=" ">
              <img className="w-14 h-13 rounded" src="photo-01.jpeg" alt="" />
            </div>

            <div className="w-full ">
              <div className="bg-[#474747] rounded-lg p-3 ">
                <h1 className="font-bold">Jhon Doe</h1>
                <p className="text-sm">Wow, Thanks Man😱</p>
              </div>
              <p className="flex gap-3 text-sm mt-1">
                <span>like</span>
                <span> 20k </span>
                <span>1hrs</span>
              </p>
            </div>
          </div>

          <div className="flex gap-2 mt-3">
            <div className=" ">
              <img className="w-14 h-13 rounded" src="photo-01.jpeg" alt="" />
            </div>

            <div className="w-full ">
              <div className="bg-[#474747] rounded-lg p-3 ">
                <h1 className="font-bold">Jhon Doe</h1>
                <p className="text-sm">Wow, Thanks Man😱</p>
              </div>
              <p className="flex gap-3 text-sm mt-1">
                <span>like</span>
                <span> 20k </span>
                <span>1hrs</span>
              </p>
            </div>
          </div>

          <div className="flex gap-2 mt-3">
            <div className=" ">
              <img className="w-14 h-13 rounded" src="photo-01.jpeg" alt="" />
            </div>

            <div className="w-full ">
              <div className="bg-[#474747] rounded-lg p-3 ">
                <h1 className="font-bold">Jhon Doe</h1>
                <p className="text-sm">Wow, Thanks Man😱</p>
              </div>
              <p className="flex gap-3 text-sm mt-1">
                <span>like</span>
                <span> 20k </span>
                <span>1hrs</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mx-auto text-sm mb-5 mt-5">
        <div className="">
          <span>Affiliate Program</span> | <span>Privacy Policy</span> |{" "}
          <span>Cookie Policy</span>
        </div>
        &#169; 2024
      </div>
    </div>
  );
};

export default Home;
