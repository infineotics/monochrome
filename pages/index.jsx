import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>MonoChrome</title>
      </Head>

      <header className="header">Hello</header>

      <main className="content">
        <div className="badge">asd</div>
        <div className="badge-secondary">fgh</div>
        <div className="badge-oversized">jkl</div>
      </main>

      <footer className="footer">qwerty</footer>
    </div>
  );
}
