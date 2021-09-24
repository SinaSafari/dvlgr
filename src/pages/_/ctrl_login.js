import { useRouter } from "next/router";
import { useState } from "react";

export default function AdminDashboardPannel(props) {
  const router = useRouter();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(state);
    const fetchRes = await fetch("http://localhost:3000/api/auth", {
      method: "POST",
      body: JSON.stringify({ email: state.email, password: state.password }),
    });
    const res = await fetchRes.json();
    if (res.success) {
      router.push("/_/ctrl_panel");
    } else {
      setError(res);
    }
  };

  return (
    <>
      {error && <>{JSON.stringify(error)}</>}
      <form onSubmit={submitHandler}>
        <input
          type="email"
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />
        <input
          type="password"
          value={state.password}
          onChange={(e) => setState({ ...state, password: e.target.value })}
        />
        <input type="submit" value={"login"} />
      </form>
    </>
  );
}

/**
 *
 * @param {import('next').GetServerSidePropsContext} ctx
 * @returns {import('next').GetServerSidePropsResult}
 */
export async function getServerSideProps(ctx) {
  return {
    props: {},
  };
}
