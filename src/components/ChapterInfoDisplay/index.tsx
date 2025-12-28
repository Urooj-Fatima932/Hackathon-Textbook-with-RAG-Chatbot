import React from 'react';
import { useLocation } from '@docusaurus/router';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

export default function ChapterInfoDisplay(): JSX.Element {
  const location = useLocation();
  // Since useDoc is not available, we'll create a simpler component
  // that extracts module and week information from the URL
  const pathParts = location.pathname.split('/').filter(part => part !== '');

  let modulePart = '';
  let weekPart = '';

  for (const part of pathParts) {
    if (part.includes('Module-')) {
      modulePart = part;
    }
    if (part.includes('Week-')) {
      weekPart = part;
    }
  }

  // Format module and week labels
  const moduleLabel = modulePart.replace(/-/g, ' ');
  const weekLabel = weekPart.replace(/-/g, ' ');

  // Extract title from the last part of the URL
  const pageTitle = pathParts[pathParts.length - 1]?.replace(/-/g, ' ') || 'Untitled';

  return (
    <header>
      {(modulePart || weekPart) && (
        <p className="margin-bottom--none">
          <small>
            {modulePart && (
              <Link to={`/docs/${modulePart}`}>
                {moduleLabel}
              </Link>
            )}
            {weekPart && modulePart && ' \u00BB '}
            {weekPart && (
              <Link to={`/docs/${modulePart}/${weekPart}`}>
                {weekLabel}
              </Link>
            )}
          </small>
        </p>
      )}
      <Heading as="h1">{pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)}</Heading>
    </header>
  );
}
