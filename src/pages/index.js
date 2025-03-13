import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

// Import MUI Icons
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import { keyframes } from '@emotion/react';

// Define animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx('hero', styles.heroBanner)}
      style={{
        backgroundColor: 'var(--ifm-hero-background-color)', // Adapt to dark mode
        padding: '4rem 0',
        textAlign: 'center',
      }}
    >
      <div className="container">
        <Heading
          as="h1"
          className="hero__title"
          style={{
            color: 'var(--ifm-hero-text-color)', // Adapt to dark mode
            fontSize: '3.5rem',
            fontWeight: 800,
            marginBottom: '1rem',
            animation: `${fadeIn} 1s ease-out, ${bounce} 2s ease-in-out 1s`, // Combined animations
          }}
        >
          {siteConfig.title}
        </Heading>
        <p
          className="hero__subtitle"
          style={{
            color: 'var(--ifm-hero-text-color)', // Adapt to dark mode
            fontSize: '1.75rem',
            marginBottom: '2rem',
            animation: `${fadeIn} 1.5s ease-out`,
          }}
        >
          {siteConfig.tagline}
        </p>
        <div
          className={styles.buttons}
          style={{ animation: `${fadeIn} 2s ease-out` }}
        >
          <Link
            className="button button--lg"
            to="/Documentation/docs/docs/WelcomeDoc"
            style={{
              backgroundColor: '#e53e3e', // Red color
              color: 'white',
              fontWeight: 600,
              border: 'none',
              borderRadius: '8px',
              padding: '14px 28px',
              fontSize: '1.25rem',
              transition: 'background-color 0.3s ease, transform 0.3s ease',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              ':hover': {
                backgroundColor: '#c53030', // Darker red on hover
                transform: 'scale(1.05)',
              },
            }}
          >
            Get Started
            <ArrowForwardIcon style={{ fontSize: '1.5rem' }} /> {/* MUI Icon */}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Your gateway to learning and mastering modern technologies."
    >
      <HomepageHeader />
      <main style={{ padding: '4rem 0', backgroundColor: 'var(--ifm-background-color)' }}> {/* Adapt to dark mode */}
        <HomepageFeatures />
      </main>
    </Layout>
  );
}