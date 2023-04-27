import "./Main.css";

//Components
import Principal from "./Principal";
import Logo from "./Logos";
import ProductImage from "./ProductImage";
import Features from "./Features";
import UserFeedBack from "./UserFeedBack";
import Cta from "./Cta";

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
