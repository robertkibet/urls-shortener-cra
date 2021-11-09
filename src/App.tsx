import React from 'react';
import Layout from './Layout';
import UrlShortener from './Screens/UrlShortener';
import UrlListing from './Screens/UrlsListing';

interface AppProps {
  data: {
    url?: string; // I assume ID is defined elsewhere
  }[];
}
const App: React.FC<AppProps> = (props) => {
  const { data } = props;
  return (
    <Layout>
      <UrlShortener />
      <UrlListing urlHistory={data} />
    </Layout>
  );
};

export default App;
