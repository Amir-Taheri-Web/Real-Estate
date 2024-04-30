import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#161a30"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      />
    </div>
  );
};

export default Loader;
