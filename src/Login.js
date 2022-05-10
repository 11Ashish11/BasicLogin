import "./App.css";

export const Login = () => {
  return (
    <div>
      <div className="divBox">
        <div> Username </div>
        <input type="text" placeholder="UserName Here" ></input>
      </div>
      <div className="divBox">
        <div> Password </div>
        <input type="text" placeholder="Password Here"></input>
      </div>
      <button> Hello </button>
    </div>
  );
};

export default Login;
