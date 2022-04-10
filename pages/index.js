import { signIn } from "next-auth/react";

export default function Home() {
  async function handleLogin(e) {
    e.preventDefault();
    const formElement = document.getElementById("login");
    const form = new FormData(formElement);
    console.log("form", form.get("email"), form.get("pass"));
    const req = await signIn("credentials", {
      email: form.get("email"),
      password: form.get("pass"),
      redirect: false,
    });
    console.log("res....", await req.json());
  }
  return (
    <>
      <h2>Login Page</h2>
      <br />
      <div className="login">
        <form id="login" method="post" onSubmit={handleLogin}>
          <label>
            <b>User Name</b>
          </label>
          <input
            type="email"
            name="email"
            id="Uname"
            placeholder="test@gmail"
          />
          <br />
          <br />
          <label>
            <b>Password</b>
            <input
              type="Password"
              name="pass"
              id="Pass"
              placeholder="Password"
            />
          </label>
          <br />
          <br />
          <input type="checkbox" id="check" />
          <span>Remember me</span>
          <br />
          <br />
          <button type="submit" name="log" id="log">
            Log In Here
          </button>
          <br />
          <br />
          <a href="#">Forgot Password</a>
        </form>
      </div>
    </>
  );
}
