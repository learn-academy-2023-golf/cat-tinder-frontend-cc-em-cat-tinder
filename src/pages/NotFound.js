const NotFound = () => {
  return (
    <div className="bg-danger" style={{ height: "100vh" }}>
      <h1
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        // className="text-center d-flex justify-content-center align-items-center"
      >
        404 Not Found
      </h1>
    </div>
  );
};

export default NotFound;
