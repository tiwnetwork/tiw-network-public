import { NavLink } from "react-router-dom";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";

const Error = () => {
  return (
    <Layout pageTitle="Page Not Found | TIW Network" scrollVariant={"crypto"}>
      <Header variant="crypto" />
      <div className="crypto-wallet-body">
        <div
          style={{
            background: "radial-gradient(circle at top center, #242424 0%, #131313e0 23%, #000000 64%)",
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: 0,
            top: 0,
            left: 0,
          }}
        ></div>
        <div className="error-page">
          
          <div className="mb-3 text-center z-2">
            <h2 style={{ color: "#fff" }}>404 - Page Not Found</h2>
          </div>

          <NavLink to="/" className="z-2 template-btn">
            Go to Homepage
          </NavLink>
        </div>
      </div>
    </Layout>
  );
};

export default Error;
