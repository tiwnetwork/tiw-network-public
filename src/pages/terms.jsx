import Layout from "../Layout";
import TermsSection from "../Sections/TermsAndPrivacy/Terms";
import Header from "../Sections/Header/Header";

const Terms = () => {
  return (
    <Layout pageTitle="Terms of Service | TIW Network" scrollVariant={"crypto"}>
      <div className="crypto-wallet-body">
        <Header variant="crypto" />
          <TermsSection />
      </div>
    </Layout>
  );
};

export default Terms;
