/*
  This file allows us to add things like a header that will appear on every page.
*/

function MyApp({ Component, pageProps }) {
  const Header = Component.Header ? Component.Header : React.Fragment;

  return (
    <Header>
      <Component {...pageProps} />
    </Header>
  );
}

export default MyApp;
