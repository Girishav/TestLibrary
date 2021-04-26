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
        console.log("List response ::",response)
        success(response);
      }).catch(error => {
        console.log("Request failed ::", error);
        failure(error);
      });
    });
 
  }
} 

export default new ExampleComponent();
