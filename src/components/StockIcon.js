import React from 'react';

class StockIcon extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const imgSource = "images/stocks/tse/" + this.props.ticker.split(':')[1] + ".png";
        const altText = this.props.ticker + " logo";
        const className = "stock-icon";

        return <img src={imgSource} alt={altText} className={className} />
    }
} export default StockIcon