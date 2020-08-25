import React from 'react';
import { useStaticQuery, graphql, PageProps } from 'gatsby';

import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';

import './Layout.scss';
import { Helmet } from 'react-helmet';

interface LayoutQuery {
  site: {
    siteMetadata: {
      title: string;
      version: string;
      description: string;
      siteUrl: string;
      author: string;
    };
  };
}

interface Props {
  children: React.ReactChild;
}

export const Layout = ({ children }: Props) => {
  const query = useStaticQuery<LayoutQuery>(graphql`
    query {
      site {
        siteMetadata {
          title
          version
          description
          siteUrl
          author
        }
      }
    }
  `);
  const {
    site: {
      siteMetadata: { version, title, description, siteUrl, author },
    },
  } = query;

  return (
    <main className="Layout">
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href={siteUrl} />
        <meta name="description" content={description} />
        <meta name="keywords" content="Tony Kallan Cool" />
        <meta name="author" content={author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <Header />

      {children}

      <Footer version={version} />
    </main>
  );
};
