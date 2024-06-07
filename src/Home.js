const Home = () => {
  var text = ['C','o','k','e','l','e','y'];




  return(
    <div class='name-container'>
      <div class='line'></div>
      <div class="name">
        {text.map((item) => (
          <span id={item}>{item}</span>
        ))}
      </div>
      <div class='line reverse'></div>
    </div>
  );
};

export default Home;
