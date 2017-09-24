	"use strict";
	import React, {Component} from "react";
	import {connect} from "react-redux";
	import Spinner from "./Spinner";
	import moment from 'moment'
	import {Link} from 'react-router'
	import DateTime from 'react-datetime'
	import Select from 'react-select'

	import ChangeValuteForShow from '../actions/ChangeValuteForShow'
	import AddValutesForNotShow from '../actions/AddValutesForNotShow'
	import AddDate from '../actions/AddDate'
	import FetchStructure from '../actions/FetchStructure'

	class Valutes extends Component {
		constructor(props){
			super(props)
			this.handleChangeDate=this.handleChangeDate.bind(this)
			this.handleChangeValute=this.handleChangeValute.bind(this)
			this.getDataForNewDate=this.getDataForNewDate.bind(this)
			this.addValutesForNotShow=this.addValutesForNotShow.bind(this)
			this.showAllValutes=this.showAllValutes.bind(this)
			this.state={
				changeInDate:false
			}

		}
		handleChangeDate(date){
			this.props.dispatch(AddDate(moment(date).format('DD/MM/YYYY')))
			this.setState({
				changeInDate:true
			})
		}
		handleChangeValute(val){
					this.props.dispatch(ChangeValuteForShow(val))
					this.setState({
					changeInDate:false
					})

		}
		showAllValutes(){
			this.props.dispatch(AddValutesForNotShow([]))
			this.props.dispatch(ChangeValuteForShow([]))

		}
		getDataForNewDate(){
				this.props.dispatch(FetchStructure(this.props.Valutes.date?this.props.Valutes.date:moment().format('DD/MM/YYYY')))
			
		}
		componentWillMount(){
			if(!this.props.Valutes.date){
				this.props.dispatch(ChangeValuteForShow(moment().format('DD/MM/YYYY')))

				this.props.dispatch(FetchStructure(moment().format('DD/MM/YYYY')))
			}
		}
		addValutesForNotShow(){
			this.props.dispatch(AddValutesForNotShow(this.props.Valutes.selectedOptions))
		}
		render() {
			let options
			if(this.props.Valutes.data){
			options=this.props.Valutes.data.ValCurs.Valute.map(val=>{
				return {label:val.CharCode,value:val.Value}
			})
			}

			return <div className="container">
			<div className="row">
			<div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 text-center">

			<h2>Валюты</h2>
			</div>
			</div>

			<div className="row">
						
			<div className="col-md-4 col-sm-4 col-xs-4 col-lg-4">
			{this.props.Valutes.data?<div className="table-scrollable">
			<label>Валюта по {this.props.Valutes.date?this.props.Valutes.date:moment().format('DD/MM/YYYY')}</label>          


			<table
			className="table table-bordered table-hover table-striped ">
			<thead>
			<tr>
						<th  className="table-classic">Валюта</th>

			<th  className="table-classic">Курс</th>

			</tr>
			</thead>
			<tbody>
			{this.props.Valutes.data.ValCurs.Valute.map((item,key)=>{
				if(this.props.Valutes.valutesNotShow.indexOf(item.CharCode)==-1){
					return <tr key={key}>
				
					<td>{item.CharCode}</td>
					<td>{item.Value}</td>
				

					</tr>
				}
			})}
			</tbody>
			</table>            
			</div>:<Spinner/>}
			</div>
			<div className="col-md-4 col-sm-4 col-xs-4 col-lg-4">

			<div className="form-group"> 
				<label>Выберите валюты которые нужно скрыть</label>          
            	<Select
            		multi={true}
            		placeholder="Выберите"
            		options={options}
            		value={this.props.Valutes.selectedOptions}
            		onChange={this.handleChangeValute}
            		/>
            		</div>
					<div className="form-group">  

            		<button className="btn btn-default"
            		disabled={this.props.Valutes.selectedOptions.length==0}
            		 onClick={this.addValutesForNotShow}>Скрыть</button>

</div>            		 					<div className="form-group">  

            		 <button className="btn btn-primary"
            		disabled={this.props.Valutes.valutesNotShow.length==0}
            		 onClick={this.showAllValutes}>Показать все</button>
            		
            </div>
            </div>
			<div className="col-md-4 col-sm-4 col-xs-4 col-lg-4">
				<div className="form-group">
				<label>Выберите дату по которой нужно получить валюту</label>          

					            <DateTime 
								timeFormat={false}
								dateFormat="DD/MM/YYYY"
                                inputProps={{placeholder: 'Выберите дату', readOnly: true}}
                                onChange={this.handleChangeDate}
                                closeOnSelect={true}
                                value={this.props.Valutes.date}
                                />
                </div>
			
            <div className="form-group"> 
            		<button className="btn btn-primary" 
            		disabled={!this.state.changeInDate}
            		onClick={this.getDataForNewDate}>Поиск</button>
                                </div>
            </div>

			</div>
			</div>

		}
	}

	export default connect(store => store)(Valutes);