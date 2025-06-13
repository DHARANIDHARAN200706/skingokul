// /pages/index.js
import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    });

    const data = await res.json();
    setResponse(data.reply);
    setLoading(false);
  };

  return (
    <div className="container">
      <Head>
        <style>{`
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background: radial-gradient(circle at top left, #f0f4ff, #dfe9f3);
  }

  .container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0 1rem;
  }

  nav {
    width: 100%;
    background: #4b0082;
    color: white;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
    box-shadow: 0 6px 12px rgba(75, 0, 130, 0.2);
  }

  nav ul {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  nav li {
    cursor: pointer;
    font-weight: 500;
    transition: color 0.2s, transform 0.2s;
  }

  nav li:hover {
    color: #ffd700;
    transform: scale(1.1);
  }

  .main-content {
    padding-top: 110px;
    text-align: center;
    width: 95%;
    max-width: 850px;
  }

  h2 {
    font-size: 2.75rem;
    color: #4b0082;
    font-weight: 700;
    margin-bottom: 1.2rem;
    animation: fadeSlideDown 0.9s ease-out;
  }

  @keyframes fadeSlideDown {
    from { opacity: 0; transform: translateY(-40px); }
    to { opacity: 1; transform: translateY(0); }
  }

  textarea {
    width: 100%;
    padding: 1rem;
    border: 2px solid #b39ddb;
    border-radius: 0.75rem;
    margin-bottom: 1.25rem;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    resize: vertical;
    box-shadow: 0 4px 8px rgba(0,0,0,0.05);
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  textarea:focus {
    outline: none;
    border-color: #4b0082;
    box-shadow: 0 0 10px rgba(75,0,130,0.3);
  }

  button {
    background: linear-gradient(135deg, #6a5acd, #7b68ee);
    color: white;
    padding: 0.8rem 2.2rem;
    font-weight: 600;
    border-radius: 2rem;
    border: none;
    box-shadow: 0 5px 12px rgba(106, 90, 205, 0.3);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button:hover {
    background: linear-gradient(135deg, #7b68ee, #6a5acd);
    transform: translateY(-2px) scale(1.03);
  }

  .response-box {
    margin-top: 2.5rem;
    background: #ffffff;
    border: 1px solid #ddd6f3;
    padding: 1.75rem;
    border-radius: 1.25rem;
    box-shadow: 0 10px 20px rgba(106, 90, 205, 0.1);
    animation: fadeIn 1s ease-in-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }

  footer {
    margin-top: 3rem;
    padding: 1rem;
    text-align: center;
    color: #6c757d;
    font-size: 0.9rem;
    border-top: 1px solid #b39ddb;
  }
`}</style>

