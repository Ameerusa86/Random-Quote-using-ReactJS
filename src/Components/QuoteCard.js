import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const URL = "https://api.quotable.io/random";

const QuoteCard = () => {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    axios.get(URL).then((res) => {
      setQuote(res.data.content);
    });
  }, []);

  // console.log(quote)

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-9 col-xl-7">
            <div className="card" style={{ borderRadius: "15px" }}>
              <div className="card-body p-5">
                <div className="text-center mb-4 pb-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-quotes/bulb.webp"
                    alt="Bulb"
                    width="100"
                  />
                </div>

                <figure className="text-center mb-0">
                  <blockquote className="blockquote">
                    <p className="pb-3">
                      <FontAwesomeIcon
                        icon={faQuoteLeft}
                        size="xs"
                        pull="left"
                      />
                      <span className="lead font-italic">{quote}</span>
                      {/* <i className="fas fa-quote-right fa-xs text-primary"></i> */}
                      <FontAwesomeIcon
                        icon={faQuoteRight}
                        size="xs"
                        pull="right"
                      />
                    </p>
                  </blockquote>
                  <figcaption className="blockquote-footer mb-0">
                    Thomas Edison
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCard;

// <FontAwesomeIcon icon="fa-solid fa-quote-right" />
