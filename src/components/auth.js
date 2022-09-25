import "./auth.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
export default function Auth({ message, close, closes, opensignup, openchat }) {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const signupfetch = async (e) => {
    e.preventDefault();
    const registers = await fetch("/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.fullname,
        email: data.email,
        password: data.password,
      }),
    });
    const result = await registers.json();
    if (result) {
      localStorage.setItem("name", result.name);
      localStorage.setItem("email", result.email);
      localStorage.setItem("token", result.token);
      setData({
        fullname: "",
        email: "",
        password: "",
      });
      openchat();
      closes();
    } else {
      setData({
        fullname: "",
        email: "",
        password: "",
      });
    }
  };

  const signinfetch = async (e) => {
    e.preventDefault();
    const login = await fetch("/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });
    const result = await login.json();
    if (result) {
      if (result === "User is not exists please register first.") {
        return opensignup();
      }
      localStorage.setItem("name", result.name);
      localStorage.setItem("email", result.email);
      localStorage.setItem("token", result.token);
      setData({
        fullname: "",
        email: "",
        password: "",
      });
      openchat();
      closes();
    } else {
      setData({
        fullname: "",
        email: "",
        password: "",
      });
    }
  };

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
              <input
                type="text"
                name="fullname"
                value={data.fullname}
                onChange={(e) =>
                  setData((val) => ({
                    ...val,
                    fullname: e.target.value,
                  }))
                }
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={(e) =>
                  setData((val) => ({
                    ...val,
                    email: e.target.value,
                  }))
                }
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={(e) =>
                  setData((val) => ({
                    ...val,
                    password: e.target.value,
                  }))
                }
              />
            </div>
            <div className="submit">
              <button type="submit" onClick={signupfetch}>
                Submit
              </button>
            </div>
          </form>
        )}
        {message === "sign in" && (
          <form className="forms">
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={(e) =>
                  setData((val) => ({
                    ...val,
                    email: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={(e) =>
                  setData((val) => ({
                    ...val,
                    password: e.target.value,
                  }))
                }
              />
            </div>
            <div className="submit">
              <button type="submit" onClick={signinfetch}>
                Submit
              </button>
            </div>
            <div className="account">
              <span>Don't have any account ?</span>
              <button onClick={opensignup}>Sign Up</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
