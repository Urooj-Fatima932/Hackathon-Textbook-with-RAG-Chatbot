import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContainer)}>
        <div className={styles.heroText}>
          <Heading as="h1" className="hero__title">
            Physical and Humanoid Robotics
          </Heading>
          <p className="hero__subtitle">
            An introductory course to the world of physical AI and humanoid robotics. Learn the fundamentals of ROS2, digital twins, and how to build intelligent robots.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro">
              Start Reading
            </Link>
          </div>
        </div>
        <img src="/img/robot.jpg" className={styles.placeholderImage} alt="Robot" />
      </div>
    </header>
  );
}

function HomepageLogos() {
  return (
    <section className={clsx('container', styles.logosContainer)}>
      <div className={styles.logos}>
      </div>
    </section>
  )
}

const modules = [
  {
    title: 'Module 1: ROS2',
    description: 'Learn the fundamentals of ROS2, the open-source framework for robotics.',
    link: '/docs/Module-1-ROS2/Week-1/digital-vs-physical-ai',
  },
  {
    title: 'Module 2: Digital Twin',
    description: 'Understand how to create and use digital twins for simulation and testing.',
    link: '/docs/Module-2-Digital-Twin/Week-4/setting-up-gazebo-humanoid-simulation',
  },
  {
    title: 'Module 3: NVIDIA Isaac',
    description: 'Explore the NVIDIA Isaac SDK for AI-powered robotics.',
    link: '/docs/Module-3-NVIDIA-Isaac/Week-7/generating-synthetic-data-training',
  },
  {
    title: 'Module 4: Vision Language Action',
    description: 'Dive into the world of vision, language, and action models for robotics.',
    link: '/docs/Module-4-Vision-Language-Action/Week-10/building-high-level-cognitive-execution-pipeline',
  },
];

function HomepageModules() {
  return (
    <section className={styles.modulesSection}>
      <div className="container">
        <Heading as="h2" className="text--center">Course Modules</Heading>
        <div className={styles.modules}>
          {modules.map((module, idx) => (
            <div key={idx} className={clsx('card', styles.moduleCard)}>
              <div className="card__header">
                <h3>{module.title}</h3>
              </div>
              <div className="card__body">
                <p>{module.description}</p>
              </div>
              <div className="card__footer">
                <Link
                  className="button button--primary button--block"
                  to={module.link}>
                  Go to Module
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ... (keep existing code)

const concepts = [
  {
    title: 'Embodied Intelligence',
    description: 'The intersection of body and mind in AI, enabling robots to learn and interact with the physical world.',
    link: '/docs/Module-1-ROS2/Week-1/embodied-intelligence-concepts',
  },
  {
    title: 'Sim-to-Real Transfer',
    description: 'Training AI models in simulation and transferring that knowledge to real-world robots.',
    link: '/docs/Module-3-NVIDIA-Isaac/Week-9/techniques-sim-to-real-transfer',
  },
  {
    title: 'Cognitive Planning',
    description: 'Enabling robots to reason, plan, and execute complex tasks in dynamic environments.',
    link: '/docs/Module-4-Vision-Language-Action/Week-10/building-high-level-cognitive-execution-pipeline',
  },
  {
    title: 'Human-Robot Interaction',
    description: 'Designing safe, intuitive, and effective collaboration between humans and robots.',
    link: '/docs/Module-2-Digital-Twin/Week-5/building-human-robot-interaction-interface-unity',
  }
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageModules />
        <section className={styles.keyConceptsContainer}>
          <div className="container">
            <Heading as="h2" className="text--center">Key Concepts</Heading>
            <div className={styles.keyConceptsGrid}>
              {concepts.map((concept, index) => (
                <div key={index} className={clsx('card', styles.keyConceptCard)}>
                  <div>
                    <h3>{concept.title}</h3>
                    <p>{concept.description}</p>
                  </div>
                  <div className="card__footer">
                    <Link
                      className="button button--primary button--block"
                      to={concept.link}>
                      Go to Concept
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <HomepageLogos />
      </main>
    </Layout>
  );
}
