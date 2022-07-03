const AssetTables = ({assets}) => {

    // console.log(props);
    // const assets = props.assets;

    return (
        <div className="AssetTables">
            <h3>Stock Assets</h3>
                <table border='1'>
                    <thead>
                        <tr>
                            <th>Stock Id</th>
                            <th>Stock Name</th>
                            <th>Stock Count</th>
                        </tr>
                    </thead>
                    <tbody>
                    { assets.stockDetailList.map((stock) => (
                            <tr key={stock.stId}>
                                <td>{stock.stId}</td>
                                <td>{stock.stockName}</td>
                                <td>{stock.stockCount}</td>
                            </tr>
                    
                            ))}
                    </tbody>
                </table>

            <h3>Mutual Fund Assets</h3>
                <table border='1'>
                    <thead>
                        <tr>
                            <th>Mutual Fund Id</th>
                            <th>Mutual Fund Name</th>
                            <th>Mutual Fund Units</th>
                        </tr>
                    </thead>
                    <tbody>
                    { assets.mutualFundList.map((mutFund) => (
                            <tr key={mutFund.mfId}>
                                <td>{mutFund.mfId}</td>
                                <td>{mutFund.mutualFundName}</td>
                                <td>{mutFund.mutualFundUnits}</td>
                            </tr>
                            ))}
                    </tbody>
                </table>
        </div>
      );
}
 
export default AssetTables;