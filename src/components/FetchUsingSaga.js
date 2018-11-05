/* import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestApiData } from "../actions/index";

class FetchData extends React.Component {
  componentDidMount() {
    this.props.requestApiData();
  }

  producer = (x, i) =>
    <div key={Math.random()*1000}>
      <h1>
        {x.gender}
      </h1>
      <h1>
        {x.name.first}
      </h1>
      <h1>
        {x.name.last}
      </h1>
      <img src={x.picture.medium} />
    </div>;

  render() {
    const { results = [] } = this.props.data;
    return results.length
      ? <h1>
          {results.map(this.person)}
        </h1>
      : <h1>loading...</h1>;
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FetchData); */