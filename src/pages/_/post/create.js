import { parseCookie } from "@/lib/http/cookie";
import axios from "axios";
import Editor from "@/components/editor/Editor";

export default function AdminDashboardPannel(props) {
  const { pageData } = props;

  return (
    <>
      <h2 className="text-center my-5">پست جدید!!!</h2>
      <Editor tags={pageData.tags} categories={pageData.categories} />
    </>
  );
}

/**
 *
 * @param {import('next').GetServerSidePropsContext} ctx
 * @returns {import('next').GetServerSidePropsResult}
 */
export async function getServerSideProps(ctx) {
  const { data } = await axios.get("http://localhost:3000/api/posts/create");
  console.log(data);
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
    props: {
      pageData: data.data,
    },
  };
}
