import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import {fetchOrg} from './actions';
import { connect } from 'react-redux';
import volunteer from './images/volunteer.jpeg'


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
     <div id="show" className="container">
     <div className="ui two column grid">
     <div className="ui column">
       <a className="ui bordered large image" href={org.url}>
         <img src={org.logo} alt="Organization Logo" />
       </a>
     </div>
     <div className="ui column">
       <a href={org.url}>
       <h2 id="showHead" className="header">{org.org}</h2>
     </a>
       <div className="description">
         <p>{org.desc}</p>
       </div>
       <div className="ui container">
       <img id="insta" className="ui huge image" src={volunteer} alt="instagram"/>
     </div>
     </div>
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

export default connect(mapStateToProps, { fetchOrg,
volunteer })(ShowOrg);


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
