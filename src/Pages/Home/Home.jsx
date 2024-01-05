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
    <div className="lg:px-32 px-10 text-white">
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

      <div className="text-white text-center md:mt-10 mt-5">
        <h1 className="lg:text-4xl md:text-3xl text-xl font-bold">
          Would You Make A Great Career Online And Become A Millionaire By 2024?
        </h1>
        <p className="md:text-2xl text-[18px] mt-3">
          Take this FREE test and find out how you can make money on the
          Internet.
        </p>
      </div>

      <div className="text-center md:mt-10 mt-7 text-white">
        {/* 3. Show results or show the question game  */}
        {showResults ? (
          /* 4. Final Results */

          <div className="bg-[#322f2f] md:p-10 p-4">
            <h1 className="text-2xl font-bold uppercase">Thank You</h1>
            <h2>
              Your Test Result:
              <span className="text-red-600 uppercase"> Excellent</span> (100
              out of 92)
            </h2>
            <p className="mt-3">
              You are an ideal person for making money online,
            </p>
            <p>
              You may have a chance to earn more than
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
            <button className="bg-[#ffba5e] md:px-32 md:py-4 rounded md:text-xl uppercase mt-3 text-black py-3 px-7">
              Get Offer
            </button>
          </div>
        ) : (
          /*Question Card*/
          <div>
            {/* Current Question  */}
            <div className="flex mx-auto text-center justify-center items-center gap-1">
              <h3 className="md:text-2xl text-xl font-bold">
                {questions[currentQuestion].text}
              </h3>
              <h2 className="text-xl hidden md:block">
                ({currentQuestion + 1} out of {questions.length})
              </h2>
            </div>

            {/* List of possible answers  */}
            <ul className="mt-2 md:mx-36 text-xl text-black">
              <div className="md:grid grid-cols-2 gap-5">
                {/* First option on the left side */}
                {questions[currentQuestion].options
                  .slice(0, 2)
                  .map((option) => (
                    <li
                      key={option.id}
                      className="bg-[#ffba5e] hover:bg-[#e49328] cursor-pointer p-2 rounded mt-3 md:mt-0"
                      onClick={() => optionClicked(option.isCorrect)}
                    >
                      {option.text1 || option.text2}
                    </li>
                  ))}

                {/* Last two options on the right side */}
                {questions[currentQuestion].options.slice(2).map((option) => (
                  <li
                    key={option.id}
                    className="bg-[#ffba5e] hover:bg-[#e49328] cursor-pointer p-2 rounded mt-3 md:mt-0"
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

      <div className="md:mt-20 mt-10">
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
                <h1 className="font-bold">Jackson Hayes</h1>
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
              <img
                className="w-14 h-13 rounded"
                src="https://www.maastrichtuniversity.nl/sites/default/files/ppp/70061313/30516371_1641676775900851_872905631365857280_o.jpg"
                alt=""
              />
            </div>

            <div className="w-full ">
              <div className="bg-[#474747] rounded-lg p-3 ">
                <h1 className="font-bold">Benjamin Johnson</h1>
                <p className="text-sm">This is a miracle 🙏</p>
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
              <img
                className="w-14 h-13 rounded"
                src="https://avatars.githubusercontent.com/u/9420872?v=4"
                alt=""
              />
            </div>

            <div className="w-full ">
              <div className="bg-[#474747] rounded-lg p-3 ">
                <h1 className="font-bold">Ethan Mitchell</h1>
                <p className="text-xs text-blue-500">@BH Brouce</p>
                <p className="text-sm">Try this now</p>
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
              <img
                className="w-14 h-13 rounded"
                src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
                alt=""
              />
            </div>

            <div className="w-full ">
              <div className="bg-[#474747] rounded-lg p-3 ">
                <h1 className="font-bold">BH Brouce</h1>
                <p className="text-sm">Thanks a bunch my friend 😃</p>
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
              <img
                className="w-14 h-13 rounded"
                src="https://cdn.openart.ai/uploads/image_random_kl21BrQ9_1667612486229_1024.webp"
                alt=""
              />
            </div>

            <div className="w-full ">
              <div className="bg-[#474747] rounded-lg p-3 ">
                <h1 className="font-bold">Mason Davis</h1>
                <p className="text-sm">Let's gooooo💰</p>
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
              <img
                className="w-14 h-13 rounded"
                src="https://cdn.midjourney.com/98afccce-5a42-4387-a61b-1c35dfa86b9f/grid_0_640_N.webp"
                alt=""
              />
            </div>

            <div className="w-full ">
              <div className="bg-[#474747] rounded-lg p-3 ">
                <h1 className="font-bold">Oliver Turner</h1>
                <p className="text-sm">🥇 TOP</p>
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
              <img
                className="w-14 h-13 rounded"
                src="https://xsgames.co/randomusers/assets/avatars/male/63.jpg"
                alt=""
              />
            </div>

            <div className="w-full ">
              <div className="bg-[#474747] rounded-lg p-3 ">
                <h1 className="font-bold">Liam Parker</h1>
                <p className="text-sm">I can't believe 😱</p>
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
              <img
                className="w-14 h-13 rounded"
                src="https://xsgames.co/randomusers/assets/avatars/male/46.jpg"
                alt=""
              />
            </div>

            <div className="w-full ">
              <div className="bg-[#474747] rounded-lg p-3 ">
                <h1 className="font-bold">Noah Campbell</h1>
                <p className="text-sm">My Score is 96😱</p>
              </div>
              <p className="flex gap-3 text-sm mt-1">
                <span>like</span>
                <span> 20k </span>
                <span>1hrs</span>
              </p>
            </div>
          </div>

          <div className="flex gap-2 mt-3 ml-16">
            <div>
              <img
                className="w-14 h-13 rounded"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4bxv_2whDpQagGtPptWTamKmYAbeWkfjgh37VfZg89LV1WVLkhOgni5anwUzvdQj8JLo&usqp=CAU"
                alt=""
              />
            </div>

            <div className="w-full ">
              <div className="bg-[#474747] rounded-lg p-3 ">
                <h1 className="font-bold">Jameson Bennett</h1>
                <p className="text-sm">I just missed 100 for 3 point.</p>
              </div>
              <p className="flex gap-3 text-sm mt-1">
                <span>like</span>
                <span> 20k </span>
                <span>1hrs</span>
              </p>
            </div>
          </div>

          <div className="flex gap-2 mt-3 ml-32">
            <div className=" ">
              <img
                className="w-14 h-13 rounded"
                src="https://avatars.githubusercontent.com/u/31961792?v=4"
                alt=""
              />
            </div>

            <div className="w-full ">
              <div className="bg-[#474747] rounded-lg p-3 ">
                <h1 className="font-bold">Alexander Rogers</h1>
                <p className="text-sm">My score is 100 and I get offer 😁</p>
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
              <img
                className="w-14 h-13 rounded"
                src="https://msgilliamswebpage.weebly.com/uploads/1/1/8/9/118947166/dusk-profile-3_2.jpg"
                alt=""
              />
            </div>

            <div className="w-full">
              <div className="bg-[#474747] rounded-lg p-3 ">
                <h1 className="font-bold">Alexander Rogers</h1>
                <p className="text-sm">Is this real?</p>
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
              <img
                className="w-14 h-13 rounded"
                src="https://bpconf.com/wp-content/uploads/profile/1011.jpg"
                alt=""
              />
            </div>

            <div className="w-full ">
              <div className="bg-[#474747] rounded-lg p-3 ">
                <h1 className="font-bold">Alexander Rogers</h1>
                <p className="text-sm">Thanks for this test 😊</p>
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
