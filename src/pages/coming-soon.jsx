import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import ComingSoonSection from "../Sections/ComingSoon/ComingSoonSection"

const ComingSoon = () => {
  return (
    <Layout pageTitle="TIW Network - A Business Network Where Opportunities Flourish" scrollVariant={"crypto"}>
      <div className="crypto-wallet-body">
        <ComingSoonSection />
      </div>
    </Layout>
  );
};

export default ComingSoon;
