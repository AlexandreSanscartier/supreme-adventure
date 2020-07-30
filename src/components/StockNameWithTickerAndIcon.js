import StockIcon from './StockIcon'
import StockName from './StockName'
import StockTicker from './StockTicker'

import React from 'react';

class StockNameWithTickerAndIcon extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const ticker = this.props.ticker;
        const companyName = this.props.companyName;
        const className = "stock-name-with-ticker-with-icon";
        const stockNameWithTickerClassName = "stock-name-with-ticker";

        return  <section className={className}>
                <StockIcon ticker={ticker} />
                <section className={stockNameWithTickerClassName}>
                    <StockName companyName={companyName} />
                    <StockTicker ticker={ticker} />
                </section>
            </section>
    }
} export default StockNameWithTickerAndIcon