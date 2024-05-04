import { ThreeDots } from "react-loader-spinner";

const Loader = ({ color, width, height, parentHeight }) => {
  return (
    <div>
      <ThreeDots
        visible={true}
        height={height || "80"}
        width={width || "80"}
        color={color || "#161a30"}
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: parentHeight || "auto",
        }}
      />
    </div>
  );
};

export default Loader;
