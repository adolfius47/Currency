import React, {Component} from 'react';
import {connect} from 'react-redux';
class App extends Component {
    render() {
        let dropDown, access
        if (this.props.location.pathname == '/') {
            document.title = "Currency";


            dropDown = <div className="row">
                <div className="col-lg-12">
                    <h3 className="page-title">
                        Currency
                    </h3>

                    <div className="page-bar">
                        <ul className="page-breadcrumb breadcrumb">
                            <li>
                                <i className="fa fa-home">&nbsp;</i>
                                
                            </li>
                            <li><a >Select Date</a>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        }else{
            document.title = "Currency";
            dropDown = <div className="row">
                <div className="col-lg-12">
                    <h3 className="page-title">
                        Currency
                    </h3>

                    <div className="page-bar">
                        <ul className="page-breadcrumb breadcrumb">
                            <li>
                                <i className="fa fa-home">&nbsp;</i>
                                
                            </li>
                            <li><a >Show all</a>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        }

            access = this.props.children

        return <div>
            {dropDown}
            <div className="row">
                <div className="col-lg-12">
                    {access}


                </div>
            </div>
        </div>
    }
}
export default connect(store => store)(App);