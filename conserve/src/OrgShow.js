import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import {fetchOrg} from './actions';
import { connect } from 'react-redux';


class ShowOrg extends React.Component {
  componentDidMount(){
    console.log(this.props);
    this.props.fetchOrg(this.props.match.params._id)

  }
 render(){
   const org = this.props.org
   if( !org){
     return null
   }
   return (
     <div className="ui item">
       <a className="ui large image">
         <img src={org.logo} alt="Organization Logo" />
       </a>
       <a className="header" href={org.url}>{org.org}</a>
       <div className="description">
         <p>{org.desc}</p>
       </div>
     </div>
   );
 }
}

function mapStateToProps(state, props) {
  const { match } = props;
  if (match.params._id) {
    return {
      org: state.orgs.find(item => item._id === match.params._id)
    }
  }

  return { org: null };
}

export default connect(mapStateToProps, { fetchOrg })(ShowOrg);


// ShowOrg.propTypes = {
//   org: PropTypes.object.isRequired
// }


// export default class NameHERE extends Component {
//   constructor(){
//     super()
//     this.aFunction = this.afunction.bind(this)
//   }
// }
//
// afunction(){
//   this.props.1.2({
//     data: 3,
//
//   })
// }
