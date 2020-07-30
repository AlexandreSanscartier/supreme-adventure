import React from 'react';

class StockName extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const companyName = this.props.companyName;
        const className = "stock-name text-bold";

        return <span className={className}>{companyName}</span>
    }
} export default StockName