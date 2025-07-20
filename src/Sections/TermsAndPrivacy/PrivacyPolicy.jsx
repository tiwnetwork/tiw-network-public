import TermsAndPrivacy from "./TermsAndPrivacy";
import Data from "../../assets/data/privacyPolicy";

const PrivacyPolicy = () => {
  return <TermsAndPrivacy title="Privacy Policy" data={Data} description='At TIW Network Ltd ("we", "us", or "our"), we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services. By using our services, you agree to the practices described in this policy.' />;
};

export default PrivacyPolicy;
