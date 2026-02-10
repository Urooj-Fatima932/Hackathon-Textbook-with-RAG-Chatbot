import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={clsx('container', styles.heroContainer)}>
        <div className={styles.heroText}>
          <Heading as="h1" className={styles.heroTitle}>
            Master the Future of{' '}
            <span className={styles.heroAccent}>Physical AI</span> &amp; Robotics
          </Heading>
          <p className={styles.heroSubtitle}>
            A comprehensive 13-week journey through ROS2, digital twins, NVIDIA Isaac, and vision-language-action systems. Build intelligent robots from the ground up.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Start Learning
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/Module-1-ROS2/Week-1/digital-vs-physical-ai">
              Explore Modules
            </Link>
          </div>
        </div>
        <BrowserOnly fallback={<div style={{width: 440, height: 440}} />}>
          {() => {
            const HeroVisual = require('../components/HeroVisual').default;
            return <HeroVisual />;
          }}
        </BrowserOnly>
      </div>
    </header>
  );
}

function StatsBar() {
  return (
    <section className={styles.statsBar}>
      <div className="container">
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>13</span>
            <span className={styles.statLabel}>Weeks of Content</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>4</span>
            <span className={styles.statLabel}>Core Modules</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>55+</span>
            <span className={styles.statLabel}>Lessons</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>AI</span>
            <span className={styles.statLabel}>Powered Chatbot</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const modules = [
  {
    number: '01',
    title: 'ROS2 Foundations',
    description: 'Learn the fundamentals of ROS2, the open-source framework powering modern robotics systems.',
    link: '/docs/Module-1-ROS2/Week-1/digital-vs-physical-ai',
  },
  {
    number: '02',
    title: 'Digital Twin',
    description: 'Create and use digital twins for simulation, testing, and virtual prototyping of robots.',
    link: '/docs/Module-2-Digital-Twin/Week-4/setting-up-gazebo-humanoid-simulation',
  },
  {
    number: '03',
    title: 'NVIDIA Isaac',
    description: 'Explore NVIDIA Isaac for AI-powered navigation, reinforcement learning, and synthetic data.',
    link: '/docs/Module-3-NVIDIA-Isaac/Week-7/generating-synthetic-data-training',
  },
  {
    number: '04',
    title: 'Vision-Language-Action',
    description: 'Dive into multimodal AI models that combine vision, language, and action for robotics.',
    link: '/docs/Module-4-Vision-Language-Action/Week-10/building-high-level-cognitive-execution-pipeline',
  },
];

function HomepageModules() {
  return (
    <section className={styles.modulesSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Course Modules</h2>
        <p className={styles.sectionSubtitle}>
          Four progressive modules taking you from foundations to cutting-edge AI robotics.
        </p>
        <div className={styles.modules}>
          {modules.map((mod, idx) => (
            <div key={idx} className={styles.moduleCard}>
              <span className={styles.moduleNumber}>{mod.number}</span>
              <h3 className={styles.moduleCardTitle}>{mod.title}</h3>
              <p className={styles.moduleCardDesc}>{mod.description}</p>
              <Link className={styles.moduleCardLink} to={mod.link}>
                Start Module &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const concepts = [
  {
    icon: '\u{1F9E0}',
    title: 'Embodied Intelligence',
    description: 'The intersection of body and mind in AI, enabling robots to learn and interact with the physical world.',
    link: '/docs/Module-1-ROS2/Week-1/embodied-intelligence-concepts',
  },
  {
    icon: '\u{1F504}',
    title: 'Sim-to-Real Transfer',
    description: 'Training AI models in simulation and transferring that knowledge to real-world robots.',
    link: '/docs/Module-3-NVIDIA-Isaac/Week-9/techniques-sim-to-real-transfer',
  },
  {
    icon: '\u{2699}\u{FE0F}',
    title: 'Cognitive Planning',
    description: 'Enabling robots to reason, plan, and execute complex tasks in dynamic environments.',
    link: '/docs/Module-4-Vision-Language-Action/Week-10/building-high-level-cognitive-execution-pipeline',
  },
  {
    icon: '\u{1F91D}',
    title: 'Human-Robot Interaction',
    description: 'Designing safe, intuitive, and effective collaboration between humans and robots.',
    link: '/docs/Module-2-Digital-Twin/Week-5/building-human-robot-interaction-interface-unity',
  },
];

function KeyConcepts() {
  return (
    <section className={styles.keyConceptsContainer}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Key Concepts</h2>
        <p className={styles.sectionSubtitle}>
          Core ideas that connect every module in the curriculum.
        </p>
        <div className={styles.keyConceptsGrid}>
          {concepts.map((concept, index) => (
            <div key={index} className={styles.keyConceptCard}>
              <span className={styles.conceptIcon}>{concept.icon}</span>
              <h3>{concept.title}</h3>
              <p>{concept.description}</p>
              <Link className={styles.conceptLink} to={concept.link}>
                Learn more &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>Ready to build intelligent robots?</h2>
          <p className={styles.ctaDesc}>
            Start with Module 1 and work your way through 13 weeks of hands-on robotics content.
          </p>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Learn Physical AI and Humanoid Robotics - ROS2, Digital Twins, NVIDIA Isaac, and Vision-Language-Action Systems">
      <HomepageHeader />
      <main>
        <StatsBar />
        <HomepageModules />
        <KeyConcepts />
        <CtaSection />
      </main>
    </Layout>
  );
}
