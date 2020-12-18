import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';



//Alert component
const Alert=({alerts})=> 

/*checking if the array returned from the state is not null and length
grater than zero if ture then display the alert component on screen */
alerts != null && 
alerts.length>0

//map throught each alert and dispaly the alert based on classname of alertType
&& alerts.map(alert=>(
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        {alert.msg}
    </div>
))
 
//proptypes
Alert.propTypes = {
alerts:PropTypes.array.isRequired
}

//mapping state to props we get from state
const mapStateToProps=state=>({
alerts:state.alert
})


export default connect(mapStateToProps)( Alert);

