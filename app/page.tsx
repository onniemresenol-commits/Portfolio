import ImageGrid from "./components/ImageGrid";

const teambrain_images = [
  { src: "/images/login.png", alt: "TeamBrain login screen" },
  { src: "/images/graph.png", alt: "TeamBrain knowledge graph" },
  { src: "/images/connect.png", alt: "TeamBrain connect integrations" },
  { src: "/images/promt1.png", alt: "TeamBrain prompt example 1" },
  { src: "/images/promt2.png", alt: "TeamBrain prompt example 2" },
];

export default function Home() {
  return (
    <main
      style={{
        maxWidth: 640,
        margin: "0 auto",
        paddingTop: 48,
        paddingBottom: 48,
        paddingLeft: 32,
        paddingRight: 32,
      }}
    >
      {/* Header */}
      <h1 style={{ fontSize: 32, fontWeight: 600, lineHeight: 1.2 }}>
        Onni Emre Senol
      </h1>
      <p style={{ fontSize: 14, color: "#666", marginTop: 8 }}>
        Business student at Hanken School of Economics · Co-founder of HankAI
      </p>
      <div style={{ display: "flex", gap: 16, marginTop: 12 }}>
        <a
          href="https://www.linkedin.com/in/onni-senol-338277224/"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
          style={{ fontSize: 14 }}
        >
          LinkedIn →
        </a>
        <a
          href="https://github.com/onniemresenol-commits"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
          style={{ fontSize: 14 }}
        >
          GitHub →
        </a>
        <a
          href="https://team-knowledge-base-eta.vercel.app/login"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
          style={{
            fontSize: 14,
            fontWeight: 600,
            border: "1px solid currentColor",
            borderRadius: 4,
            padding: "2px 8px",
          }}
        >
          Live demo →
        </a>
      </div>

      {/* Divider */}
      <hr
        style={{
          border: "none",
          borderTop: "1px solid #eee",
          marginTop: 32,
          marginBottom: 32,
        }}
      />

      {/* Projects section */}
      <p
        style={{
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "#999",
        }}
      >
        Projects
      </p>

      {/* TeamBrain */}
      <div style={{ marginTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600 }}>TeamBrain</h2>
        <p style={{ fontSize: 14, color: "#444", lineHeight: 1.6, marginTop: 8 }}>
          Inspired by Andrej Karpathy&apos;s ideas on LLMs as knowledge organizers, I built TeamBrain to solve a problem I experienced running HankAI: teams constantly lose knowledge across Slack, meetings, and notes with no connection between them. The insight was simple, instead of asking teams to organize their knowledge, build something that lives inside their daily conversations and does it automatically.
        </p>
        <p style={{ fontSize: 14, color: "#444", lineHeight: 1.6, marginTop: 10 }}>
          TeamBrain connects to Slack, accepts voice notes, and captures manual notes, then uses AI to organize everything into a living knowledge graph. It detects contradictions between sources, extracts action items with owners and deadlines, and answers questions in plain language with cited sources. It&apos;s not another note-taking app. It&apos;s your team&apos;s second brain, built from the conversations you&apos;re already having.
        </p>
        <p style={{ fontSize: 14, color: "#444", lineHeight: 1.6, marginTop: 10 }}>
          Throughout building this I developed hands-on understanding of:
        </p>
        <ul style={{ fontSize: 14, color: "#444", lineHeight: 1.6, marginTop: 8, paddingLeft: 20 }}>
          <li><strong>RAG architecture:</strong> designing retrieval pipelines with semantic search, embedding-based deduplication, confidence scoring, and graph-aware retrieval using pgvector</li>
          <li><strong>LLM prompt engineering:</strong> building grounded, citation-enforced prompts that prevent hallucination and handle conflict detection across sources</li>
          <li><strong>Data pipeline design:</strong> event-driven ingestion, batch synthesis queues, and async processing across multiple data sources</li>
          <li><strong>Multi-tenant security:</strong> row-level security in Postgres, workspace isolation, rate limiting, and prompt injection defense</li>
          <li><strong>Full-stack product development:</strong> shipping a complete SaaS product from database schema to deployed frontend, including OAuth integrations, real-time UI, and graph visualization with D3.js</li>
        </ul>
        <ImageGrid images={teambrain_images} />
        <div style={{ display: "flex", gap: 16, marginTop: 12 }}>
          <a
            href="https://team-knowledge-base-eta.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Live demo →
          </a>
          <a
            href="https://github.com/onniemresenol-commits/Team-Knowledge-base"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
            style={{ fontSize: 13 }}
          >
            GitHub →
          </a>
        </div>
      </div>

      {/* Coming soon */}
      <div style={{ marginTop: 32, opacity: 0.4 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, color: "#999" }}>
          Coming soon
        </h2>
        <p style={{ fontSize: 14, color: "#999", lineHeight: 1.6, marginTop: 8 }}>
          Another project is on the way.
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
          <div
            style={{
              flex: 1,
              height: 160,
              background: "#f5f5f5",
              border: "1px solid #eee",
              borderRadius: 4,
            }}
          />
          <div
            style={{
              flex: 1,
              height: 160,
              background: "#f5f5f5",
              border: "1px solid #eee",
              borderRadius: 4,
            }}
          />
        </div>
      </div>

      {/* Footer */}
      <p style={{ fontSize: 12, color: "#999", marginTop: 64 }}>
        © 2026 Onni Emre Senol
      </p>
    </main>
  );
}
