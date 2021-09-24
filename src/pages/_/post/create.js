import { parseCookie } from "@/lib/http/cookie";
import { useState } from "react";

export default function AdminDashboardPannel(props) {
  const [formState, setFormState] = useState({
    title: "",
    conten: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", formState.title);
    formData.append("content", formState.conten);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="title"
          value={formState.title}
          onChange={(e) =>
            setFormState({ ...formState, title: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="content"
          value={formState.content}
          onChange={(e) =>
            setFormState({ ...formState, content: e.target.value })
          }
        />
        <input type="submit" value="submit" />
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
  //   const { req } = ctx;
  //   const { token } = parseCookie(req);
  //   if (!token) {
  //     return {
  //       redirect: {
  //         destination: "/_/ctrl_login",
  //       },
  //     };
  //   }
  return {
    props: {},
  };
}
