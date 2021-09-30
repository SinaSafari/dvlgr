export default function BlogIndexPage(props) {
  return <>blog index</>;
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
