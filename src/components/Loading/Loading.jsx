import { RotatingLines } from "react-loader-spinner";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loaderDiv">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};

export default Loading;
