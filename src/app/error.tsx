"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      background: "var(--bg, #FAF6F0)",
      color: "var(--text, #1F1814)",
    }}>
      <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
        Something went wrong
      </h1>
      <p style={{ fontSize: 14, color: "var(--text-muted, #6B5D52)", marginBottom: 24, textAlign: "center", maxWidth: 400 }}>
        We hit an unexpected error. Your data is safe.
      </p>
      <button
        onClick={reset}
        style={{
          padding: "12px 28px",
          borderRadius: 999,
          background: "var(--primary, #4A7C6A)",
          color: "#fff",
          fontSize: 14,
          fontWeight: 600,
          border: "none",
          cursor: "pointer",
        }}
      >
        Try Again
      </button>
    </div>
  );
}
