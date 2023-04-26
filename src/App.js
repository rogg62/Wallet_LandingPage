import "./App.css";
//IMAGES
import Logo from "./assets/Wallet logo.svg";
import GroupPrincipal from "./assets/Group.svg";
import Logos from "./assets/Logos.svg";
import Image from "./assets/Image.svg";
import Aspas from "./assets/Quote icon.svg";
import Gif from "./assets/GIF.svg";
import Image2 from "./assets/Image (1).svg";
import Card from "./assets/Cards icon.svg";
import Coin from "./assets/Coin icon.svg";
import Purse from "./assets/Purse icon.svg";

import ScrollReveal from "scrollreveal";

function App() {
  ScrollReveal({ reset: true }).reveal(".reveal", { delay: 300 });

  return (
    <div className="App">
      <header>
        <a href="1">
          <img src={Logo} alt="" />
        </a>

        <nav>
          <a href="1">Sign up</a>
          <button>Log in</button>
        </nav>
      </header>

      <main>
        <section id="principal">
          <div>
            <h1 className="reveal">Get started with Wallet</h1>
            <p className="reveal">
              Wallet is where you keep your credit, debit, and transit cards,
              boarding passes, tickets, and more — all in one place.
            </p>
            <button>Get started</button>
          </div>

          <img src={GroupPrincipal} alt="" />
        </section>

        <section id="logos">
          <div>
            <img src={Logos} alt="" />
          </div>
        </section>

        <section id="productImage">
          <div>
            <img src={Image} alt="" />
          </div>
        </section>

        <section id="features">
          <div id="caixa1">
            <div className="div reveal">
              <img src={Card} alt="" />
              <div className="box">
                <h1>Customizable card</h1>
                <p>
                  Custom your own card for your exact incomes and expenses
                  needs.
                </p>
              </div>
            </div>

            <div className="div reveal">
              <img src={Coin} alt="" />
              <div className="box">
                <h1>No payment fee</h1>
                <p>
                  Transfer your payment all over the world with no payment fee.
                </p>
              </div>
            </div>

            <div className="div reveal">
              <img src={Purse} alt="" />
              <div className="box">
                <h1>All in one place</h1>
                <p>
                  The right place to keep your credit and debit cards, boarding
                  passes & more.
                </p>
              </div>
            </div>
          </div>

          <div id="caixa2">
            <img src={Image2} alt="" />
          </div>
        </section>

        <section id="userFeedback">
          <div>
            <img src={Aspas} alt="" />
            <p className="reveal">
              “Wallet is a great product! All of my most important information
              is there - credit cards, transit cards, boarding passes, tickets,
              and more. And I don't need to worry because it's all in one place!
              thanks!”
            </p>

            <h4 className="reveal">Johnny Owens</h4>
          </div>
        </section>
        <section id="cta">
          <div id="caixa">
            <div id="box1">
              <h1>Questions? Let's talk </h1>
              <p>
                Contact us through our 24/7 live chat. We're always happy to
                help!
              </p>
              <button>Get started</button>
            </div>
            <div id="box2">
              <img src={Gif} alt="" />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <a href="1" id="img">
          <img src={Logo} alt="" />
        </a>
        <div>
          <a href="1">&copy; Wallet 2022</a>
          <a href="1">Privacy policy</a>
          <a href="1">Cookies policy</a>
          <a href="1">Terms of use</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
