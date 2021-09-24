import BackgroundAnimate from "@/components/header/backgroundAnimate.component";
import HeaderContent from "@/components/header/headerContent.component";
import logos from "@/lib/logos";

export default function Home({ logos }) {
  return (
    <>
      <BackgroundAnimate logos={logos} />
      <HeaderContent />
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
    props: {
      logos: logos.sort(() => Math.random() - 0.5),
    },
  };
}
