
import React from 'react'
import {connect} from "react-redux";
import Spinner from 'react-spinner'
import {Link} from 'react-router'
import moment from 'moment'
import DateTime from 'react-datetime'
import FetchStructure from '../actions/FetchStructure'
import AddDate from '../actions/AddDate'

class SelectDate extends React.Component {
		constructor(props){
			super(props)
			this.handleChangeDate=this.handleChangeDate.bind(this)
			this.getDataForNewDate=this.getDataForNewDate.bind(this)

			this.state={
				date:'',
				valutes:[],
			}
		}
		handleChangeDate(date){
			this.props.dispatch(AddDate(moment(date).format('DD/MM/YYYY')))
		}
		getDataForNewDate(){
				this.props.dispatch(FetchStructure(this.props.Valutes.date?this.props.Valutes.date:moment().format('DD/MM/YYYY')))
			
		}

    render() {
        return <div className="container">
        	<div className="form-group">
				<label>Выберите дату по которой нужно получить валюту</label>          
					<DateTime 	
								timeFormat={false}
								dateFormat="DD/MM/YYYY"
                                inputProps={{placeholder: 'Выберите дату', readOnly: true}}
                                onChange={this.handleChangeDate}
                                closeOnSelect={true}
                                value={this.state.date}
                    />
                    </div>
                    <div className="form-group">
                    <Link to="/currency">
                    <button className="btn btn-primary" onClick={this.getDataForNewDate}>Продолжить</button>
                    </Link>
                </div>
        	</div>
    }
}

	export default connect(store => store)(SelectDate);