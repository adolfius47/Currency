import $ from 'jquery'
import moment from 'moment'
import Failure from './Failure'
import Before from './Before'
import Success from './Success'
import {xml2json} from '../../utils'

export default (date) => dispatch => {
   

    $.ajax({
        method: 'GET',

  url: 'http://www.cbr.ru/scripts/XML_daily.asp?date_req='+date,
crossDomain: true,
    dataType: 'xml',
            beforeSend: () => {
            dispatch(Before())
        },
        success: (model) =>  {
            var state=[]

            
            dispatch(Success(xml2json(model)))
        },
        error: (error) => {
            dispatch(Failure({
                code: error.status,
                response: error.responseJSON
            }))
        }
    })

//    fetch('http://www.cbr.ru/scripts/XML_daily.asp?date_req=02/03/2016',{headers: {  
//      "Content-type": "charset=windows-1251"  
//    },  })
//      .then((response) => response.text())
//.then(xmlString => $.parseXML(xmlString))
//        .then(data => console.log(data))
//      .catch((error) => {
//        console.error(error);

//      });
}