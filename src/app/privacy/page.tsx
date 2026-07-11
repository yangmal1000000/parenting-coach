export const metadata = {
  title: "Privacy Policy — Calm Parent",
  description: "How Calm Parent handles your data.",
};

export default function PrivacyPage() {
  return (
    <div style={{
      background: "var(--bg)",
      color: "var(--text)",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      minHeight: "100vh",
      padding: "40px 24px",
    }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Privacy Policy</h1>
        <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 32 }}>Last updated: July 2026</p>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Overview</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-muted)" }}>
            Calm Parent is an AI-powered parenting coach. We take your privacy seriously.
            This policy explains what data we collect, how we use it, and your rights.
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>What We Collect</h2>
          <ul style={{ fontSize: 15, lineHeight: 1.8, color: "var(--text-muted)", paddingLeft: 20 }}>
            <li><strong>Child profiles:</strong> Name/nickname, age or birth date, temperament tags, conditions, and notes you choose to add. This is stored on your device and optionally synced to your account via Supabase.</li>
            <li><strong>Questions and advice:</strong> When you ask for advice, your query and the AI-generated response are saved to your session history on your device and optionally in the cloud.</li>
            <li><strong>Voice recordings:</strong> If you use the voice feature, audio is sent to OpenAI's Whisper API for transcription and immediately discarded. We do not store audio recordings.</li>
            <li><strong>Feedback:</strong> When you rate advice (👍/👎) or provide feedback reasons, this is logged for product improvement.</li>
            <li><strong>Account info:</strong> If you sign in with Google, we store your email address and Google ID for authentication and cloud sync.</li>
          </ul>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>How We Use Your Data</h2>
          <ul style={{ fontSize: 15, lineHeight: 1.8, color: "var(--text-muted)", paddingLeft: 20 }}>
            <li>To generate personalised parenting advice using AI (OpenAI GPT models)</li>
            <li>To retrieve relevant research from our knowledge base of 1,300+ sources</li>
            <li>To sync your sessions and profiles across devices (if signed in)</li>
            <li>To improve advice quality through aggregated, anonymised feedback</li>
          </ul>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>What We Don't Do</h2>
          <ul style={{ fontSize: 15, lineHeight: 1.8, color: "var(--text-muted)", paddingLeft: 20 }}>
            <li>We do <strong>not</strong> sell your data to third parties</li>
            <li>We do <strong>not</strong> share your child's information with advertisers</li>
            <li>We do <strong>not</strong> store voice audio after transcription</li>
            <li>We do <strong>not</strong> train AI models on your personal data</li>
          </ul>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Third-Party Services</h2>
          <ul style={{ fontSize: 15, lineHeight: 1.8, color: "var(--text-muted)", paddingLeft: 20 }}>
            <li><strong>OpenAI:</strong> Powers the advice generation (GPT-4o) and voice transcription (Whisper). Your query text and child context are sent to OpenAI's API for processing. OpenAI does not use this data for training.</li>
            <li><strong>Supabase:</strong> Provides authentication and cloud database for syncing profiles and sessions across devices. Data is encrypted in transit and at rest.</li>
            <li><strong>Vercel:</strong> Hosts the web application. Standard server logs are retained for 30 days.</li>
          </ul>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Data Storage & Security</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-muted)" }}>
            Your data is stored locally on your device by default. If you create an account,
            your profiles and sessions are synced to a secure Supabase database with row-level
            security — only you can access your data. All data in transit is encrypted via TLS/SSL.
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Your Rights</h2>
          <ul style={{ fontSize: 15, lineHeight: 1.8, color: "var(--text-muted)", paddingLeft: 20 }}>
            <li><strong>Access:</strong> You can view all your data in the app at any time</li>
            <li><strong>Delete:</strong> You can delete individual sessions or your entire account at any time. This permanently removes your data from our servers.</li>
            <li><strong>Export:</strong> Your session history is available in the app and can be shared manually</li>
            <li><strong>Opt-out:</strong> You can use the app without creating an account — all data stays on your device</li>
          </ul>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Children's Privacy</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-muted)" }}>
            Calm Parent is designed for parents and caregivers, not children. We do not knowingly
            collect data directly from children under 13. The child profile information is provided
            by the parent for the purpose of receiving parenting advice.
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Educational Disclaimer</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-muted)" }}>
            Calm Parent provides educational guidance, not medical advice. Always consult your
            pediatrician or a qualified professional for concerns about your child's health or development.
          </p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Contact</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-muted)" }}>
            Questions about privacy? Email us at <a href="mailto:support@calmparent.app" style={{ color: "var(--primary)" }}>support@calmparent.app</a>
          </p>
        </section>

        <p style={{ fontSize: 13, color: "var(--text-muted)", opacity: 0.6, marginTop: 40 }}>
          © 2026 Calm Parent. All rights reserved.
        </p>
      </div>
    </div>
  );
}
