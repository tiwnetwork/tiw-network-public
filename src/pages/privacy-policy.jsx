import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import PrivacyPolicySection from "../Sections/TermsAndPrivacy/PrivacyPolicy";

const PrivacyPolicy = () => {
  return (

    <Layout pageTitle="Privacy Policy | TIW Network" scrollVariant={"crypto"}>
      <div className="crypto-wallet-body">
        <Header variant="crypto" />
        <PrivacyPolicySection />
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
