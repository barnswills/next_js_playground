const Center = ({ children, direction = "column" }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {children}
    </div>
  );
};

export default Center;
