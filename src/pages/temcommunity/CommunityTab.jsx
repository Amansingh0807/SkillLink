import React, { useState } from "react";
import "./CommunityTab.scss";

const CommunityTab = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What skills are essential for tech freelancing?",
      answers: [
        { id: 1, text: "Strong technical skills in coding, with expertise in React, JavaScript, TypeScript, Node.js, and databases like MySQL and MongoDB. Proficient in programming languages such as C++, C, Python, and JavaScript, with hands-on experience in data structures, algorithms, and full-stack development.", upvotes: 10, downvotes: 1 },

        { id: 2, text: "Soft skills like communication and networking are essential for success in any field. They can help you build strong relationships, resolve conflicts, and advance your career.", upvotes: 8, downvotes: 2 },

        { id: 3, text: "A well-crafted portfolio showcasing diverse projects, including full-stack applications, responsive web designs, and open-source contributions. Highlights include innovative solutions in hackathons, UI/UX designs, and impactful collaborations, reflecting technical expertise, creativity, and problem-solving skills.", upvotes: 15, downvotes: 0 },

        { id: 4, text: "Exceptional time management and self-discipline, balancing academics, project work, open-source contributions, and event organizing. Demonstrated ability to prioritize tasks effectively, meet deadlines, and maintain consistent productivity, ensuring quality outcomes in all endeavors.", upvotes: 5, downvotes: 0 },
      ],
    },

    {
      id: 2,
      question: "How do freelancers find clients?",
      answers: [
        { id: 1, text: "Join platforms like SkillLink to showcase your skills, gain real-world experience, and connect with potential clients. Utilize these opportunities to build a strong professional network, enhance your expertise, and grow your career.", upvotes: 12, downvotes: 0 },

        { id: 2, text: "Establish a strong professional presence on LinkedIn by showcasing your skills, achievements, and projects. Regularly share updates, engage with industry professionals, and build meaningful connections to expand your network and open doors to new opportunities.", upvotes: 18, downvotes: 1 },

        { id: 3, text: "Participate in networking events to connect with industry professionals, exchange ideas, and explore collaboration opportunities. These interactions can provide valuable insights, mentorship, and pathways to advance your career and knowledge.", upvotes: 10, downvotes: 0 },

        { id: 4, text: "Develop a personal website to showcase your work, skills, and achievements. Include a portfolio of projects, a professional bio, and contact information to create a strong online presence and attract opportunities.", upvotes: 6, downvotes: 2 },
      ],
    },

    {
      id: 3,
      question: "What tech trends should freelancers focus on?",
      answers: [
        { id: 1, text: "Explore emerging technologies like Artificial Intelligence and Web3 to stay ahead in the tech landscape. Gain expertise in AI-driven solutions and decentralized applications to contribute to innovative and future-focused projects..", upvotes: 25, downvotes: 1 },

        { id: 2, text: "Develop expertise in cloud computing and mobile app development to build scalable, efficient solutions. Leverage cloud platforms for deployment and focus on creating user-friendly mobile applications that address real-world challenges.", upvotes: 22, downvotes: 0 },

        { id: 3, text: "Gain expertise in cybersecurity and blockchain to ensure secure, decentralized solutions. Focus on protecting data integrity, building robust systems, and leveraging blockchain technology for innovative and tamper-proof applications.", upvotes: 20, downvotes: 1 },

        { id: 4, text: "Explore AR/VR technologies to create immersive, interactive experiences. Develop skills in designing and building applications that blend the virtual and real worlds, enhancing user engagement and offering innovative solutions across various industries.", upvotes: 15, downvotes: 2 },
      ],
    },
  ]);
  const [newQuestion, setNewQuestion] = useState("");

  const addQuestion = () => {
    if (newQuestion.trim()) {
      setQuestions([
        ...questions,
        {
          id: Date.now(),
          question: newQuestion,
          answers: [],
        },
      ]);
      setNewQuestion("");
    }
  };

  const addAnswer = (id, answer) => {
    setQuestions(
      questions.map((q) =>
        q.id === id
          ? {
              ...q,
              answers: [
                ...q.answers,
                {
                  id: Date.now(),
                  text: answer,
                  upvotes: 0,
                  downvotes: 0,
                },
              ],
            }
          : q
      )
    );
  };

  const updateVotes = (questionId, answerId, type) => {
    setQuestions(
      questions.map((q) =>
        q.id === questionId
          ? {
              ...q,
              answers: q.answers.map((a) =>
                a.id === answerId
                  ? {
                      ...a,
                      upvotes: type === "upvote" ? a.upvotes + 1 : a.upvotes,
                      downvotes:
                        type === "downvote" ? a.downvotes + 1 : a.downvotes,
                    }
                  : a
              ),
            }
          : q
      )
    );
  };

  const shareAnswer = (answerText) => {
    navigator.clipboard.writeText(answerText);
    alert("Answer copied to clipboard for sharing!");
  };

  return (
    <div className="community-tab">
      <div className="side-bar left">
        <ul>
          <li>Web Development</li>
          <li>AI Engineer</li>
          <li>Web3</li>
          <li>Copywriting</li>
          <li>WordPress</li>
          <li>Machine Learning</li>
          <li>Blockchain</li>
          <li>SEO</li>
          <li>Data Science</li>
          <li>UI/UX Design</li>
        </ul>
      </div>

      <div className="main-content">
        <h1 className="header">Ask your Queries</h1>

        {/* Add Question */}
        <div className="question-box">
          <input
            type="text"
            placeholder="Ask a question..."
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
          />
          <button onClick={addQuestion}>Post</button>
        </div>

        {/* Display Questions */}
        {questions.map((q) => (
          <div key={q.id} className="question-card">
            <h3>{q.question}</h3>
            <AnswerList
              questionId={q.id}
              answers={q.answers}
              addAnswer={addAnswer}
              updateVotes={updateVotes}
              shareAnswer={shareAnswer}
            />
          </div>
        ))}
      </div>

      <div className="side-bar right">
        <h4>Related Questions</h4>
        <ul>
          <li>What are the best tools for web development?</li>
          <li>How to start freelancing as a web designer?</li>
          <li>What skills are needed for a successful AI career?</li>
          <li>How to get clients for tech freelancing?</li>
          <li>Best practices for developing Web3 apps.</li>
        </ul>
      </div>
    </div>
  );
};

const AnswerList = ({ questionId, answers, addAnswer, updateVotes, shareAnswer }) => {
  const [newAnswer, setNewAnswer] = useState("");
  const [showAllAnswers, setShowAllAnswers] = useState(false);

  const submitAnswer = () => {
    if (newAnswer.trim()) {
      addAnswer(questionId, newAnswer);
      setNewAnswer("");
    }
  };

  const toggleAnswers = () => {
    setShowAllAnswers((prev) => !prev);
  };

  const displayedAnswers = showAllAnswers ? answers : answers.slice(0, 3);

  return (
    <div>
      {/* Add Answer */}
      <div className="answer-box">
        <input
          type="text"
          placeholder="Write an answer..."
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
        />
        <button onClick={submitAnswer}>Submit</button>
      </div>

      {/* List Answers */}
      <div className="answers">
        {displayedAnswers.map((a) => (
          <div key={a.id} className="answer-card">
            <p>{a.text}</p>
            <div className="answer-actions">
              <button onClick={() => updateVotes(questionId, a.id, "upvote")}>
                👍 {a.upvotes}
              </button>
              <button onClick={() => updateVotes(questionId, a.id, "downvote")}>
                👎 {a.downvotes}
              </button>
              <button onClick={() => shareAnswer(a.text)}>🔗 Share</button>
            </div>
          </div>
        ))}
      </div>

      {answers.length > 3 && (
        <button onClick={toggleAnswers} className="toggle-answers">
          {showAllAnswers ? "Show Less" : "See More Answers"}
        </button>
      )}
    </div>
  );
};

export default CommunityTab;
