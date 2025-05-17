import Layout from "../Layout";
import Header from "../Sections/Header/Header";

import CryptoWalletOneFooter from "../Sections/Footer/CryptoWalletOneFooter";
import StartBuildingComponent from "../Components/StartBuilding/StartBuildingComponent";
import NewsletterFeatures from "../Sections/Newsletter/NewsletterFeatures/NewsletterFeatures";
import OurSkil from "../Sections/OurServices/OurSkil/OurSkil";
import CTAImage from "../assets/images/tiwmedia/partners/partnersctaimg.png";

const Partners = () => {
  return (
    <Layout pageTitle="Partners | TIW Network - A Business Network Where Opportunities Flourish" scrollVariant={"crypto"}>
      <div className="crypto-wallet-body">
        <Header variant="crypto" />
        <StartBuildingComponent firstText="Our Trusted" highlightText="Partners"/>
        <NewsletterFeatures />
        <OurSkil showContactButton={true} subTitle="JOIN TIW NETWORK" Title="Join Us to Access Exclusive Partner Deals" elementImage ={CTAImage} description="As a TIW Network member, you’ll gain access to detailed information about our trusted trade suppliers, including exclusive deals from B&Q, Wren Kitchens, and more!"/>

        <CryptoWalletOneFooter />
      </div>
    </Layout>
  );
};

export default Partners;
