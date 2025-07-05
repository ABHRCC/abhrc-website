
import Link from 'next/link';
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
            <li><Link href="/courses/human-rights-guidance">Human Rights Guidance Program</Link></li>
            <li><Link href="/courses/executive-leadership">Executive Leadership Development Program</Link></li>
            <li><Link href="/courses/advanced-leadership">Advanced Leadership Development Program</Link></li>
            <li><Link href="/courses/employee-relations-coaching">Employee Relations Coaching Program</Link></li>
            <li><Link href="/courses/career-coaching">Career Coaching Program</Link></li>
            <li><Link href="/courses/business-strategy">Business Strategy Course</Link></li>
            <li><Link href="/courses/employee-duties-rights">Employee Duties & Rights</Link></li>
          </ul>
        </section>

        <section>
          <h2>Services Provided</h2>
          <ul>
            <li><Link href="/services/financial-consultation">Financial Consultation</Link></li>
            <li><Link href="/services/green-card-application">Application for a US Green Card</Link></li>
            <li><Link href="/services/operational-analysis">Operational Analysis</Link></li>
            <li><Link href="/services/business-analytics-report">Business Analytics Report</Link></li>
            <li><Link href="/services/business-plan-review">Business Plan Review</Link></li>
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
