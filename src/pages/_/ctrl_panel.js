import { parseCookie } from "@/lib/http/cookie";
export default function AdminDashboardPannel(props) {
  return <>pannel index</>;
}

/**
 *
 * @param {import('next').GetServerSidePropsContext} ctx
 * @returns {import('next').GetServerSidePropsResult}
 */
export async function getServerSideProps(ctx) {
  const { req } = ctx;
  const { token } = parseCookie(req);
  if (!token) {
    return {
      redirect: {
        destination: "/_/ctrl_login",
      },
    };
  }
  return {
    props: {},
  };
}
