import React from "react";
import { FormattedMessage } from "react-intl";
import useImage from "img/use.png";

const Use = () => {
  return (
    <section className="useContainer" id="uso">
      <div className="useTitle">
        <h2 className="title">
          <FormattedMessage
            id="use.title"
            defaultMessage="How do i make my prediction?"
          />
        </h2>
      </div>
      <div className="use">
        <div className="useDescription">
          <p className="text">
            <FormattedMessage
              id="use.description"
              defaultMessage="Once on the prediction page you will see the groups and their corresponding countries, in the first round all you have to do is select who you think will come out first and second in each group. In the elimination round, you must click on the country that you think will win the match on each date and advance based on your choices. Enjoy it!"
            />
          </p>
          <button
            className="btn1"
            onClick={() => (window.location = "/prediction")}
          >
            <FormattedMessage id="use.btn" defaultMessage="Start prediction" />
          </button>
        </div>
        <div className="useImage">
          <img src={useImage} alt="use description" />
        </div>
      </div>
    </section>
  );
};

export default Use;
