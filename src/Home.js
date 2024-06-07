const Home = () => {
  var text = ["C", "o", "k", "e", "l", "e", "y"];

  return (
    <div className="name-container">
      <div className="line"></div>
      <div className="name">
        {text.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div className="line reverse"></div>
      <p className="short-bio">
        My name is Sammy Cokeley, I am a software developer based in Daphne, Alabama.<br />
        I work primarily in End-To-End Automation using DevOps practices.<br />
        I am always looking to learn. Anything. </p>
    </div>
  );
};

export default Home;
