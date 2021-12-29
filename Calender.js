/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import moment from 'moment';
import CalendarStrip from './Calender/CalendarStrip';
import { JSONDate } from './dateJson';
import orderBy from 'lodash.orderby';
let customDatesStyles = [];
// Create a week's worth of custom date styles and marked dates.
const generateDates = ()=>{

  const sortedData = orderBy(JSONDate, (o) => {
    return moment(o.date,"YYYY-MM-DD").format('YYYYMMDD');
  }, ['asc']);
     
  let dateSeq=[];
    for (let i=0; i<sortedData.length; i++) {
      let currentDate = moment(sortedData[i].date,"YYYY-MM-DD");
      let border={}

      let increment =i+1;
      if(sortedData.length>increment  &&

        moment(sortedData[increment].date,"YYYY-MM-DD").diff(currentDate,'days')==1 &&

      dateSeq.length==0){
        dateSeq.push(currentDate);
        border={
          borderTopLeftRadius:80,
          borderBottomLeftRadius:80
        }
      }else if(sortedData.length>increment && 
        moment(sortedData[increment].date,"YYYY-MM-DD").diff(currentDate,'days')==1 &&
      dateSeq.length>0){
        dateSeq.push(currentDate);
        border={
         
        }
      }
      else if(sortedData.length>increment && 
        moment(sortedData[increment].date,"YYYY-MM-DD").diff(currentDate,'days')!=1 &&
        dateSeq.length>0){
          border={
            borderTopRightRadius:80,
            borderBottomRightRadius:80
          }
          dateSeq=[];
        }else if(sortedData.length>increment && 
          moment(sortedData[increment].date,"YYYY-MM-DD").diff(currentDate,'days')!=1 &&
          dateSeq.length==0){
            border={
              borderRadius:80
            }
            dateSeq=[];
        }else{
          border={
            borderRadius:80
          }
          dateSeq=[];
        }
    
      customDatesStyles.push({
      startDate: currentDate.toDate(),
      highlightDateNumberContainerStyle:{
        backgroundColor: sortedData[i].color,
        //  paddingVertical:4,
        // borderRadius:80,
         ...border
      },
      dateContainerStyle:{
        
      },
      dateNumberStyle:{
        color:"#fff"
      }
      });
    }
}

generateDates();

const CalenderBody = () => {
    
    useEffect(()=>{
        
    },[])
    


   
    return (
        <CalendarStrip
                     //   scrollable
                        style={{height:120}}
                        upperCaseDays={false}
                        customDatesStyles={customDatesStyles}
                      //  showMonth
                      />
    );
};

export default CalenderBody;
