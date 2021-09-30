import { useRouter } from "next/dist/client/router";

export default function BlogDetailsPage(props) {
  const router = useRouter();
  return <>query: {JSON.stringify(router.query, null, 4)}</>;
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
