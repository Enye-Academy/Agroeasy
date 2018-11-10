import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestProductData } from "../actions/index";

class ProductList extends React.Component {
  componentDidMount() {
    this.props.requestProductData();
  }
  person = (x, i) =>

  <table key={Math.random()*1000} style={{borderCollapse: 'collapse', width: '100%'}}>

    <tr>
        
      <td  style={{ height:'30px', width: '39%' }}>
         {x.name}
      </td>

      <td  style={{ height:'30px', width: '39%' }}>
        {x.quantity}
      </td>

      <td>
        {x.typeOfProduct}
      </td>

    </tr>
  </table>;

  render() {
    const { data = [] } = this.props.data;
    return data.length
      ? <h1>
          {data.map(this.person)}
        </h1>
      : <h1>loading...</h1>;
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestProductData }, dispatch);

 const FetchingProductData = connect(mapStateToProps, mapDispatchToProps)(ProductList); 
 export default FetchingProductData;