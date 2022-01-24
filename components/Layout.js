import Head from "../components/Head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Alert from "../components/Alert";

const Layout = ({ children, locale, locales, defaultLocale, preview }) => (
  <div className="bg-gray-300">
    <Head />
    <Alert preview={preview} />
    <Navigation
      locale={locale}
      locales={locales}
      defaultLocale={defaultLocale}
    />
    {children}
    <Footer />
  </div>
);

export default Layout;
