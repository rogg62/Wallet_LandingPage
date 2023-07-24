import React from "react";
import "./UserFeedBack.css";
import Aspas from "../../assets/Quote icon.svg";

const UserFeedBack = () => {
  return (
    <section id="userFeedback">
      <div>
        <img src={Aspas} alt="" />
        <p className="comment">
          “Wallet is a great product! All of my most important information is
          there - credit cards, transit cards, boarding passes, tickets, and
          more. And I don't need to worry because it's all in one place!
          thanks!”
        </p>

        <h4>Johnny Owens</h4>
      </div>
    </section>
  );
};

export default UserFeedBack;
