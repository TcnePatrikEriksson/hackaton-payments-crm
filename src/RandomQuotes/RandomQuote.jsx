import React, { Component } from 'react';
import uggla from '../uggla.jpg';

class RandomQuote extends Component {
  constructor(props) {
    super(props);

    this.state = { quoteToShow: {} };
  }

  generateQuote = random => {
    this.setState({ quoteToShow: this.props.quotes.quotes[random] });
  };

  render() {
    const { quotes } = this.props;
    const { quoteToShow } = this.state;

    return (
      <div className="quote">
        <button
          className="generateQuote"
          onClick={() => {
            this.generateQuote(
              Math.floor(Math.random() * quotes.quotes.length)
            );
          }}
        >
          Generate quote
        </button>
        <React.Fragment>
          <p>{quoteToShow.quote}</p>
          <p style={{ color: 'grey' }}>{quoteToShow.by}</p>
        </React.Fragment>

        {quoteToShow.by === 'Kung Uggla' && (
          <img style={{ height: '300px' }} src={uggla} alt="UGGLA" />
        )}
      </div>
    );
  }
}

export default RandomQuote;