import { ThreeDots } from "react-loader-spinner";

const Loader = ({ color, width, height }) => {
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
          alignItems: "start",
          justifyContent: "center",
          width: "100%",
        }}
      />
    </div>
  );
};

export default Loader;
