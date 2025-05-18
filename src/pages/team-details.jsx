import Layout from "../Layout";
import Header from "../Sections/Header/Header";


import CryptoWalletOneFooter from "../Sections/Footer/CryptoWalletOneFooter";
import CrossPlatform from "../Sections/CryptoWallet/CrossPlatform/CrossPlatform";
import TeamDetailComponent from "../Components/teamDetail/teamDetailComponent";

const TeamDetail = () => {
  return (
    <Layout pageTitle="About TIW Network" scrollVariant={"crypto"}>
      <div className="crypto-wallet-body">
        <Header variant="crypto" />
        <TeamDetailComponent />
        <CrossPlatform />
        <CryptoWalletOneFooter />
      </div>
    </Layout>
  );
};

export default TeamDetail;
