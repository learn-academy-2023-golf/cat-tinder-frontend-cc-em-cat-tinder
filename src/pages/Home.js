const Home = () => {
  return (
    <div className="home" style={{ position: "relative" }}>
      <h1
        className="text-center"
        style={{
          position: "absolute",
          left: "50%",
          top: "30%",
          transform: "translate(-50%, -30%)",
          opacity: "0.5",
          paddingTop: "2rem",
          width: "100%",
          height: "100%",
        }}
      >
        Cat Tinder
      </h1>
    </div>
  );
};

export default Home;
