import React from "react";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        color: "white",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1000px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ maxWidth: "500px" }}>
          <h1 style={{ fontSize: "42px", marginBottom: "15px" }}>
            Hi, I'm{" "}
            <span style={{ color: "#00c6ff" }}>
              Shubham Ugale
            </span>
          </h1>

          <h3 style={{ color: "#cccccc", marginBottom: "20px" }}>
            Game Developer
          </h3>

          <p style={{ marginBottom: "25px", lineHeight: "1.6" }}>
            Passionate Game Developer focused on building immersive,
            realistic, and interactive gaming experiences using
            modern technologies.
          </p>

          <button
            style={{
              background: "#00c6ff",
              border: "none",
              padding: "12px 25px",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            View Projects
          </button>
        </div>

        <div style={{ marginTop: "20px" }}>
          <img
            src="/profile.jpg"
            alt="Shubham Ugale"
            style={{
              width: "280px",
              borderRadius: "50%",
              border: "4px solid #00c6ff",
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;