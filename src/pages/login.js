import { getProviders, signIn, useSession } from "next-auth/client";

export default function SignInPage({ providers }) {
  return (
    <>
      <div className="login-page-container">
        <h1>ورود به دولاگر</h1>
        {Object.values(providers).map((provider) => {
          return (
            <OAuthLoginBtn
              key={provider.id}
              providerId={provider.id}
              providerName={provider.name}
            />
          );
        })}
      </div>
      <style jsx>{`
        .login-page-container {
          max-width: 80%;
          margin: 20px auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

/**
 *
 * @param {{providerName: string, providerId: any}} props
 * @returns
 */
export const OAuthLoginBtn = ({ providerName, providerId }) => {
  const validProviders = {
    Google: {
      title: "ورود با Google",
      bgColor: "#de5246",
    },
    GitHub: {
      title: "ورود با Github",
      bgColor: "#000000",
    },
  };

  return (
    <>
      <button
        onClick={() => signIn(providerId)}
        className="login-btn"
        style={{ background: `${validProviders[`${providerName}`].bgColor}` }}
      >
        {validProviders[`${providerName}`].title}
      </button>
      <style jsx>{`
        .login-btn {
          margin: 10px;
          /* background: #de5246; */
          color: #fff;
          padding: 8px 30px;
          width: 200px;
          border: none;
          border-radius: 5px;
          posotion: relative;
          text-align: center;
        }
      `}</style>
    </>
  );
};
