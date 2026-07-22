const FallbackLoader = () => {
  return (
    <>
      <style>{`
        .splash-loader {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #F2F2F2;
          transition: opacity 0.4s ease;
        }

        @media (prefers-color-scheme: dark) {
          .splash-loader {
            background-color: #030303;
          }
        }

        html.dark .splash-loader {
          background-color: #030303;
        }

        .splash-logo-light {
          display: block;
        }
        .splash-logo-dark {
          display: none;
        }

        @media (prefers-color-scheme: dark) {
          .splash-logo-light {
            display: none;
          }
          .splash-logo-dark {
            display: block;
          }
        }

        html.dark .splash-logo-light {
          display: none;
        }
        html.dark .splash-logo-dark {
          display: block;
        }

        .splash-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #3F3F3E;
          animation: splash-bounce 1s ease-in-out infinite;
        }

        @media (prefers-color-scheme: dark) {
          .splash-dot {
            background-color: #F9F9F9;
          }
        }

        html.dark .splash-dot {
          background-color: #F9F9F9;
        }

        .splash-dot:nth-child(2) {
          animation-delay: 0.15s;
        }
        .splash-dot:nth-child(3) {
          animation-delay: 0.3s;
        }

        @keyframes splash-bounce {
          0%, 80%, 100% {
            transform: scale(0.6);
            opacity: 0.4;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .splash-text {
          margin-top: 24px;
          font-size: 13px;
          letter-spacing: 3px;
          text-transform: uppercase;
          font-weight: 600;
          color: #3F3F3E;
        }

        @media (prefers-color-scheme: dark) {
          .splash-text {
            color: #F9F9F9;
          }
        }

        html.dark .splash-text {
          color: #F9F9F9;
        }
      `}</style>
      <div className="splash-loader">
        {/* Light mode logo */}
        <img
          className="splash-logo-light mb-8 h-14 w-auto md:h-20"
          src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-logos/logo-black.webp"
          alt="PrimeX Capital"
          loading="eager"
        />
        {/* Dark mode logo */}
        <img
          className="splash-logo-dark mb-8 h-14 w-auto md:h-20"
          src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-logos/logo-white.webp"
          alt="PrimeX Capital"
          loading="eager"
        />
        {/* Animated dots */}
        <div className="flex items-center gap-2">
          <div className="splash-dot" />
          <div className="splash-dot" />
          <div className="splash-dot" />
        </div>
        <p className="splash-text">Loading</p>
      </div>
    </>
  );
};

export default FallbackLoader;
