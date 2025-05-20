export default function Spinner({ size = 40, color = "#007aff" }) {
  const containerStyle = {
    position: "relative",
    width: size,
    height: size,
  };

  const lineStyleBase = {
    position: "absolute",
    width: size / 10,
    height: size / 3.5,
    backgroundColor: color,
    borderRadius: size / 20,
    top: 0,
    left: "50%",
    transformOrigin: "center bottom",
    opacity: 0.25,
    animation: "fadeSpin 1.2s linear infinite",
  };

  const lines = Array.from({ length: 12 }).map((_, i) => (
    <div
      key={i}
      style={{
        ...lineStyleBase,
        transform: `rotate(${i * 30}deg) translateX(-50%)`,
        animationDelay: `${i * 0.1}s`,
        opacity: 1 - i * 0.07,
      }}
    />
  ));

  return (
    <>
      <style>
        {`
          @keyframes fadeSpin {
            0%, 39%, 100% { opacity: 0.25; }
            40% { opacity: 1; }
          }
        `}
      </style>
      <div style={containerStyle}>{lines}</div>
    </>
  );
}
