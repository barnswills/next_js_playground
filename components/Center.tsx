import { FlexDirection } from "../models/models";

interface ICenterProps {
  direction?: FlexDirection;
}

const Center: React.FC<ICenterProps> = ({ children, direction = "column" }) => {
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
