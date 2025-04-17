import Layout from "../Layout";
import Header from "../Sections/Header/Header";

import CryptoOneBanner from "../Sections/Banner/CryptoOneBanner/CryptoOneBanner";
import NewsletterTemplate from "../Sections/Newsletter/NewsletterTemplate/NewsletterTemplate";
import CryptoWalletOneFooter from "../Sections/Footer/CryptoWalletOneFooter";
import UserFeedback from "../Sections/CryptoWallet/UserFeedback/UserFeedback";
import DefiPartners from "../Sections/Defi/DefiPartners/DefiPartners";
import EcoSystem from "../Sections/Defi/EcoSystem/EcoSystem";
import Metaverse from "../Sections/Defi/Metaverse/Metaverse";

const Home = () => {
  return (
    <Layout pageTitle="TIW Network - A Business Network Where Opportunities Flourish" scrollVariant={"crypto"}>
      <div className="crypto-wallet-body">
        <Header variant="crypto" />
        <CryptoOneBanner />
        <NewsletterTemplate />
        <Metaverse />
        <EcoSystem />
        <DefiPartners />
        <UserFeedback />
        <CryptoWalletOneFooter />
      </div>
    </Layout>
  );
};

export default Home;
