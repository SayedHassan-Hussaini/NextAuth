import { useState } from "react";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import Yap from  'Yap'

function Home({ data }) {
  const router = useRouter();
  const [error, setError] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    const formElement = document.getElementById("login");
    const form = new FormData(formElement);
    const req = await signIn("credentials", {
      email: form.get("email"),
      password: form.get("pass"),
      redirect: false,
    });
    if (req.status == 200) {
      router.push("/dashboard");
    } else {
      setError(true);
    }
  }

  return (
    <>
      <h2>Login Page</h2>
      <br />
      <div className="login">
        <Formik
          initialValues={{
            email: "test@gmail.com",
            pass: "1234",
          }}
          
        >
          {(formik) => {
            <Form id="login" onSubmit={handleLogin}>
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
                  placeholder="1234"
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
              {error ? (
                <div className="error">Invaled Email or Password.</div>
              ) : (
                ""
              )}
            </Form>;
          }}
        </Formik>
      </div>
    </>
  );
}
export async function getServerSideProps(cxt) {
  const session = await getSession(cxt);
  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
      },
    };
  } else {
    return {
      props: {},
    };
  }
}
export default Home;
