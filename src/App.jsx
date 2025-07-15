import "./App.css";

const cardData = [
  {
    key: "ai-tutor",
    className: "card card-ai-tutor",
    icon: "✨",
    title: "AI Tutor Vin",
    desc: "Your adaptive learning companion that provides personalized guidance and feedback.",
    link: "#",
    linkText: "Learn more",
    arrow: "→",
  },
  {
    key: "self-learn",
    className: "card card-self-learn",
    icon: "🟢",
    title: "Self Learn",
    desc: "Independently explore and master concepts at your own pace with interactive guidance from Vin.",
    link: "#",
    linkText: "Learn more",
    arrow: "→",
  },
  {
    key: "revision",
    className: "card card-revision",
    icon: "🔄",
    title: "Revision",
    desc: "Structured practice and reinforcement for exam preparation with personalised revision plans.",
    link: "#",
    linkText: "Learn more",
    arrow: "→",
  },
  {
    key: "ask-vin",
    className: "card card-ask-vin",
    icon: "❓",
    title: "Ask Vin",
    desc: "Get immediate clarification on any academic question or concept with step-by-step explanations from Vin.",
    link: "#",
    linkText: "Learn more",
    arrow: "→",
  },
  {
    key: "advanced-learning",
    className: "card card-advanced-learning",
    icon: "🏆",
    title: "Advanced Learning",
    desc: "Challenge yourself with advanced content and prepare for competitive exams with expert guidance.",
    link: "#",
    linkText: "Learn more",
    arrow: "→",
  },
  {
    key: "portfolio",
    className: "card card-portfolio",
    icon: "📎",
    title: "Student Portfolio",
    desc: "Showcase your achievements and learning journey with a comprehensive digital portfolio.",
    link: "#",
    linkText: "Learn more",
    arrow: "→",
  },
  {
    key: "homework-formats",
    className: "card card-homework-formats",
    icon: "📖",
    title: "Homework Formats",
    desc: "Multiple approaches to homework including Guided Practice, Assessment Practice.",
    link: "#",
    linkText: "Learn more",
    arrow: "→",
  },
  {
    key: "experiential-learning",
    className: "card card-experiential-learning",
    icon: "📘",
    title: "Experiential Learning",
    desc: "Multiple approaches to homework including Guided Practice, Assessment Practice, and Experiential Learning.",
    link: "#",
    linkText: "Learn more",
    arrow: "→",
  },
];

function App() {
  return (
    <div className="main-container">
      <div className="grid-container">
        {cardData.map((card) => (
          <div className={card.className} key={card.key}>
            <div className="icon-title-row">
              <span className="icon">{card.icon}</span>
              <span className="card-title">{card.title}</span>
            </div>
            <div className="card-desc">{card.desc}</div>
            <a className="learn-more" href={card.link}>
              {card.linkText} <span className="arrow">{card.arrow}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
