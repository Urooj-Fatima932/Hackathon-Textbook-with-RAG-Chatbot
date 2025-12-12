import React from 'react';
import { useDoc } from '@docusaurus/theme-common';
import Heading from '@theme/Heading'; // Assuming Heading is correctly imported now
import Link from '@docusaurus/Link';

export default function ChapterInfoDisplay(): JSX.Element | null {
  const { metadata } = useDoc();
  const { title, breadcrumbs } = metadata;

  // Find Module and Week from breadcrumbs
  // Breadcrumbs format: [{ label: 'Docs', permalink: '/docs' }, { label: 'Module X', permalink: '/docs/Module-X' }, { label: 'Week Y', permalink: '/docs/Module-X/Week-Y' }, { label: 'Chapter Title', permalink: '/docs/Module-X/Week-Y/Chapter-Title' }]

  let moduleInfo: { label: string; permalink: string } | undefined;
  let weekInfo: { label: string; permalink: string } | undefined;

  // We are looking for the breadcrumb item that has 'Module-' in its label
  // and the breadcrumb item that has 'Week-' in its label.
  for (let i = 0; i < breadcrumbs.length; i++) {
    if (breadcrumbs[i].label.startsWith('Module-')) {
      moduleInfo = breadcrumbs[i];
    }
    if (breadcrumbs[i].label.startsWith('Week-')) {
      weekInfo = breadcrumbs[i];
    }
  }

  // If we can't find module or week info, don't render this component.
  // Or render a more generic header. For now, let's render a simpler header.
  if (!moduleInfo && !weekInfo) {
    return (
      <header>
        <Heading as="h1">{title}</Heading>
      </header>
    );
  }

  return (
    <header>
      {moduleInfo && (
        <p className="margin-bottom--none">
          <small>
            <Link to={moduleInfo.permalink}>{moduleInfo.label}</Link>
            {weekInfo && (
              <>
                {' '}
                &raquo;{' '}
                <Link to={weekInfo.permalink}>{weekInfo.label}</Link>
              </>
            )}
          </small>
        </p>
      )}
      <Heading as="h1">{title}</Heading>
    </header>
  );
}
