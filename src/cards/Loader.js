import Loader from "react-loader-spinner";
function Spinner({ name }) {
  return (
    <Loader
      type="Puff"
      color="#353b48"
      height={60}
      width={60}
      timeout={5000} //3 secs
    />
  );
}

export default Spinner;
