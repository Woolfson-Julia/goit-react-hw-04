import ClipLoader from "react-spinners/ClipLoader";

export default function Loader() {
  return (
    <div>
      <ClipLoader
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
