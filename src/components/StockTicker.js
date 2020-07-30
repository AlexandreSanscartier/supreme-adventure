import React from 'react';

class StockTicker extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const ticker = this.props.ticker;
        const className = "stock-ticker";

        return <span className={className}>{ticker}</span>
    }
} export default StockTicker