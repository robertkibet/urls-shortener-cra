import React from 'react';
import Layout from './Layout';
import UrlShortener from './Screens/UrlShortener';
import UrlListing from './Screens/UrlsListing';

const App: React.FC = () => {
  return (
    <Layout>
      <UrlShortener />
      <UrlListing />
    </Layout>
  );
};

export default App;
