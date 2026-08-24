"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomeClient() {
  const router = useRouter();
  // Starts hidden so there's no flash of the homepage before the redirect
  // check below resolves.
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("introPlayed")) {
      setReady(true);
    } else {
      router.replace("/intro");
    }
  }, [router]);

  if (!ready) return null;

  return (
    <>
      <style>{`
        .coming-soon-body {
          position: fixed;
          inset: 0;
          margin: 0;
          padding: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          background-color: #0f172a;
          color: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100vw;
          height: 100vh;
          text-align: center;
        }
        .coming-soon-container {
          max-width: 600px;
          padding: 40px;
          background-color: #1e293b;
          border-radius: 12px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        .coming-soon-container h1 {
          font-size: 3rem;
          margin-top: 0;
          margin-bottom: 10px;
          color: #38bdf8;
          letter-spacing: -1px;
        }
        .coming-soon-container p {
          font-size: 1.1rem;
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 30px;
        }
        .coming-soon-btn {
          display: inline-block;
          background-color: #38bdf8;
          color: #0f172a;
          padding: 12px 28px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          transition: background-color 0.2s ease;
        }
        .coming-soon-btn:hover {
          background-color: #0ea5e9;
        }
      `}</style>
      <div className="coming-soon-body">
        <div className="coming-soon-container">
          <h1>Welcome</h1>
          <p>
            The site is currently being built so stay tuned
          </p>
          <a href="mailto:hello@nourr.xyz" className="coming-soon-btn">
            Get in Touch
          </a>
        </div>
      </div>
    </>
  );
}