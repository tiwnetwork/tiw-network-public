import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import SayHello from "../Sections/ContactUs/SayHello/SayHello";
import StartBuildingComponent from "../Components/StartBuilding/StartBuildingComponent";
import ContactLocation from "../Sections/ContactUs/ContactLocation/ContactLocation";
import CryptoWalletOneFooter from "../Sections/Footer/CryptoWalletOneFooter";


const ContactUs = () => {

  return (

    <Layout pageTitle="Why Join TIW Network" scrollVariant={"crypto"}>
    <div className="crypto-wallet-body">
      <Header variant="crypto" />
      <StartBuildingComponent firstText="Get in" highlightText="Touch" />
      <SayHello />
      <ContactLocation />
      <CryptoWalletOneFooter />
    </div>
  </Layout>
  );
};

export default ContactUs;
