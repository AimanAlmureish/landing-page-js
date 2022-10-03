const Hero = ({ myState }) => {
  console.log(myState);
  const boolean = false;
  if (boolean === true) {
    console.log("true is true");
  } else {
    console.log("false is false");
  }
  return (
    <div id="wholeHero" className="wholeHero">
      <div className="heroDetails">
        <h1>
          My{" "}
          <span style={{ color: boolean === false ? "#ffffff" : "#000000" }}>
            AMAZING {myState}
          </span>{" "}
          hero
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          dolor.
        </p>
      </div>
    </div>
  );
};

const styles = {
  color: "#000000",
};

export default Hero;
