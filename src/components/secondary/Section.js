import React from "react";

const Section = props => {
  console.log(props.state);
  return (
    <div className="section">
      <div className="section--subtitle" id="products">
        PRODUCTS{" "}
        <span role="img" aria-label="phone">
          📱
        </span>
      </div>
      <hr className="section--hr"></hr>
      <ProductsList products={props.state.products} />
      <div className="section--subtitle">
        EXPERIMENTS{" "}
        <span role="img" aria-label="test tube">
          🧪
        </span>
      </div>
      <hr className="section--hr"></hr>
      <ExperimentsList experiments={props.state.experiments} />
    </div>
  );
};

export default Section;

const ProductsList = props => {
  console.log(props);

  const productList = props.products.map((product, index) => {
    return (
      <div className="section__item" key={index}>
        <div className="section__item__box">
          <a
            className="section__item__box--title"
            href={product.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {product.word}
          </a>
          <p className="section__item__box--release">
            Release: {product.release.date}
          </p>
        </div>
        <div className="section__item__wrap">
          <h3 className="section__item__wrap--info">{product.tweet}</h3>
          <p className="section__item__wrap--release">
            Release: {product.release.date}
          </p>{" "}
        </div>

        <img
          alt="gif"
          className="section__item--gif"
          draggable="false"
          src={require(`../../assets/images/${product.media.img}.${product.media.imgType}`)}
        ></img>
      </div>
    );
  });

  return productList;
};

const ExperimentsList = props => {
  console.log(props);

  const experimentsList = props.experiments.map((experiment, index) => {
    return (
      <div className="section__item" key={index}>
        <div className="section__item__box">
          <a
            className="section__item__box--title"
            href={experiment.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {experiment.word}
          </a>
          <p className="section__item__box--release">
            Release: {experiment.release.date}
          </p>
        </div>
        <div className="section__item__wrap">
          <h3 className="section__item__wrap--info">{experiment.tweet}</h3>
          <p className="section__item__wrap--release">
            Release: {experiment.release.date}
          </p>{" "}
        </div>

        <img
          alt="gif"
          className="section__item--gif"
          draggable="false"
          src={require(`../../assets/images/${experiment.media.img}.${experiment.media.imgType}`)}
        ></img>
      </div>
    );
  });

  return experimentsList;
};
