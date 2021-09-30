import React from "react";
import { signIn, getProviders } from "next-auth/client";

export const AuthenticationBar = () => {
  return (
    <>
      <div className="login-page-container">
        <h1>ورود به دولاگر</h1>
        {Object.values(providers).map((provider) => {
          return (
            <SocialLoginBtn
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
};

/**
 *
 * @param {{providerName: string, providerId: any}} props
 */
export const SocialLoginBtn = ({ providerName, providerId }) => {
  const validProviders = {
    Google: {
      title: "ورود با Google",
      bgColor: "#de5246",
      logo: <GoogleSvgLogo />,
    },
    GitHub: {
      title: "ورود با Github",
      bgColor: "#000000",
      logo: <GithubSvgLogo />,
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
        <span className="logo_container">
          {validProviders[`${providerName}`].logo}
        </span>
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
          position: relative;
          text-align: center;
        }

        .logo_container {
          position: absolute;
          top: 50%;
          left: 5%;
          transform: translateY(-50%);
          width: 28px;
          height: 28px;
          background: #fff;
          border-radius: 5px;
        }
      `}</style>
    </>
  );
};

/**
 * this component returns an svg of github logo.
 * the size is customizable but by default it's 24*24
 *
 * @returns {JSX.Element}
 */
const GithubSvgLogo = ({ size = "24" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ verticalAlign: "baseline-middle" }}
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
};

/**
 * this component returns an svg of google logo.
 * the size is customizable but by default it's 24*24
 *
 * @returns {JSX.Element}
 */
const GoogleSvgLogo = ({ size = "24" }) => {
  return (
    <svg
      width={size}
      height={size}
      className="oc od s"
      style={{ verticalAlign: "baseline-middle" }}
    >
      <g fill="none" fillRule="evenodd">
        <path
          d="M20.66 12.7c0-.61-.05-1.19-.15-1.74H12.5v3.28h4.58a3.91 3.91 0 0 1-1.7 2.57v2.13h2.74a8.27 8.27 0 0 0 2.54-6.24z"
          fill="#4285F4"
        ></path>
        <path
          d="M12.5 21a8.1 8.1 0 0 0 5.63-2.06l-2.75-2.13a5.1 5.1 0 0 1-2.88.8 5.06 5.06 0 0 1-4.76-3.5H4.9v2.2A8.5 8.5 0 0 0 12.5 21z"
          fill="#34A853"
        ></path>
        <path
          d="M7.74 14.12a5.11 5.11 0 0 1 0-3.23v-2.2H4.9A8.49 8.49 0 0 0 4 12.5c0 1.37.33 2.67.9 3.82l2.84-2.2z"
          fill="#FBBC05"
        ></path>
        <path
          d="M12.5 7.38a4.6 4.6 0 0 1 3.25 1.27l2.44-2.44A8.17 8.17 0 0 0 12.5 4a8.5 8.5 0 0 0-7.6 4.68l2.84 2.2a5.06 5.06 0 0 1 4.76-3.5z"
          fill="#EA4335"
        ></path>
      </g>
    </svg>
  );
};
