import reactLogo from "../assets/react.svg"

export function LoadingScreen() {
  return (
    <>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h2>Loading, please wait.</h2>
    </>
  )
}

export default LoadingScreen;
