import "./Main.css";

//Components
import Principal from "../Principal/Principal";
import Logo from "../Logo/Logos"
import ProductImage from "../Product/ProductImage";
import Features from "../Features/Features";
import UserFeedBack from "../User/UserFeedBack";
import Cta from "../Cta/Cta";

const Main = () => {
  return (
    <main>
      <Principal />
      <Logo />
      <ProductImage />
      <Features />
      <UserFeedBack />
      <Cta />
    </main>
  );
};

export default Main;
