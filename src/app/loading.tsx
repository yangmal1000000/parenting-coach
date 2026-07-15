export default function Loading() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--bg, #FAF6F0)",
    }}>
      <div style={{
        width: 48,
        height: 48,
        borderRadius: "50%",
        background: "var(--primary, #4A7C6A)",
        opacity: 0.3,
        animation: "breathe 1.6s ease-in-out infinite",
      }} />
      <style>{`
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.15); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
