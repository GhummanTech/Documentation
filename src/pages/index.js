import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)} style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <Heading as="h1" className="hero__title" style={{ color: '#2d3748', fontSize: '3rem', fontWeight: 700 }}>
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle" style={{ color: '#4a5568', fontSize: '1.5rem', marginTop: '1rem' }}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--lg"
            to="/Documentation/docs/docs/WelcomeDoc"
            style={{
              backgroundColor: 'red',
              color: 'white',
              fontWeight: 600,
              border: 'none',
              borderRadius: '8px',
              padding: '12px 24px',
              fontSize: '1.1rem',
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: 'darkred',
              },
            }}
          >
            Get Started
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
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}