import Layout from "../Layout";
import Header from "../Sections/Header/Header";

import CryptoWalletOneFooter from "../Sections/Footer/CryptoWalletOneFooter";

import PricingPlanCards from "../Sections/PricingPlan/PricingPlanCards/PricingPlanCards";

const Pricing = () => {
  return (
    <Layout pageTitle="Pricing | TIW Network - A Business Network Where Opportunities Flourish" scrollVariant={"crypto"}>
      <div className="crypto-wallet-body">
        <Header variant="crypto" />
        <PricingPlanCards />
        <CryptoWalletOneFooter />
      </div>
    </Layout>
  );
};

export default Pricing;
