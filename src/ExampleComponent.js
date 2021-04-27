import React from 'react'
import calendarRequest from "./calendarRequest"

class ExampleComponent {
    constructor(){
      this.calendar = null;
    }
  
    getCalendarList(name){ 
  
      var self = this;
      return new Promise((success, failure) => {
        self.calendar = new calendarRequest();
        self.calendar.getCalendarList(name).then(response => {
          console.log("calendar list data ::",response)
          success(response);
        }).catch(error => {
          console.log("calendar list call failed ::", error);
          failure(error);
        });
      });
    }
  } 
  
export default new ExampleComponent();