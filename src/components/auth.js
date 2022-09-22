import "./auth.scss";
import { AiFillCloseCircle } from "react-icons/ai";
export default function Auth({ message, close }) {
  return (
    <div className="background-popup">
      <div className="background" onClick={() => close()}></div>
      <div className={message === "sign in" ? "model modelwidth" : "model"}>
        <AiFillCloseCircle className="cross" onClick={() => close()} />
        <div className="headings">
          {message === "sign in" && "Sign In"}
          {message === "sign up" && "Sign Up"}
        </div>
        {message === "sign up" && (
          <form className="forms">
            <div>
              <label htmlFor="fullname">Full Name</label>
              <input type="text" name="fullname" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
            </div>
            <div className="submit">
              <button type="submit">Submit</button>
            </div>
          </form>
        )}
        {message === "sign in" && (
          <form className="forms">
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
            </div>
            <div className="submit">
              <button type="submit">Submit</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
