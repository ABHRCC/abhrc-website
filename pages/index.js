
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>ABHRC - American Business & Human Rights Consultation Center</title>
      </Head>
      <header style={{ backgroundColor: '#002244', padding: 20, color: '#fff' }}>
        <h1>American Business & Human Rights Consultation Center</h1>
      </header>
      <main style={{ padding: 30 }}>
        <section>
          <h2>Welcome</h2>
          <p>
            We specialize in enhancing business operations with a human rights-based approach through training,
            coaching, and institutional consultation.
          </p>
        </section>

        <section>
          <h2>Courses Offered</h2>
          <ul>
            <li>Human Rights Guidance Program</li>
            <li>Executive Leadership Development Program</li>
            <li>Advanced Leadership Development Program</li>
            <li>Employee Relations Coaching Program</li>
            <li>Career Coaching Program</li>
            <li>Business Strategy Course</li>
            <li>Employee Duties & Rights</li>
          </ul>
        </section>

        <section>
          <h2>Services Provided</h2>
          <ul>
            <li>Financial Consultation</li>
            <li>Application for a US Green Card</li>
            <li>Operational Analysis</li>
            <li>Business Analytics Report</li>
            <li>Business Plan Review</li>
          </ul>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>Email: info@abhrc.org</p>
        </section>
      </main>
    </>
  );
}
