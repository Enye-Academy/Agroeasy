import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestApiData } from "../actions/index";

class ProducerList extends React.Component {
  componentDidMount() {
    this.props.requestApiData();
  }
  person = (x, i) =>

  <table key={Math.random()*1000} style={{borderCollapse: 'collapse', width: '100%'}}>

    <tr>
        
      <td  style={{ height:'30px', width: '39%' }}>
         {x.lastName}
      </td>

      <td  style={{ height:'30px', width: '39%' }}>
        {x.firstName}
      </td>

      <td>
        {x.phoneNumber}
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
  bindActionCreators({ requestApiData }, dispatch);

 const FetchingData = connect(mapStateToProps, mapDispatchToProps)(ProducerList); 
 export default FetchingData;