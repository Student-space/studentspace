import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';




const Alert=({alerts})=>
        alerts.map(alert=>{
            if(alert.type == "fail")
            {
                return(
                    <div key={alert.id} className="flex flex-col items-center">
            <div className="alert flex flex-row items-center bg-red-200 p-5 rounded border-b-2 border-red-300">
              <div className="alert-icon flex items-center bg-red-100 border-2 border-red-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
                <span className="text-red-500">
                  <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </span>
              </div>
              <div className="alert-content ml-4">
                <div className="alert-title font-semibold text-lg text-red-800">Error</div>
                <div className="alert-description text-sm text-red-600">{alert.msg}</div>
              </div>
            </div>
          </div>
                )
            }
            else{
                return(
                    <div key={alert.id} className="flex flex-col items-center">
		<div className="alert flex flex-row items-center bg-green-200 p-5 rounded border-b-2 border-green-300">
			<div className="alert-icon flex items-center bg-green-100 border-2 border-green-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
				<span className="text-green-500">
					<svg fill="currentColor"
						 viewBox="0 0 20 20"
						 className="h-6 w-6">
						<path fill-rule="evenodd"
							  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							  clip-rule="evenodd"></path>
					</svg>
				</span>
			</div>
			<div className="alert-content ml-4">
				<div className="alert-title font-semibold text-lg text-green-800">
					Success
				</div>
				<div className="alert-description text-sm text-green-600">
					{alert.msg}
				</div>
			</div>
		</div>
	</div>
                )
            }
        })
    


 
//proptypes
Alert.propTypes = {
alerts:PropTypes.array.isRequired
}

//mapping state to props we get from state
const mapStateToProps=state=>({
alerts:state.alert
})

//exporting
export default connect(mapStateToProps)( Alert);

