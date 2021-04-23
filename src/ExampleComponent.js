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
        console.log("girish sdk data",response)
        success(response);
      }).catch(error => {
        console.log("config sdk failed ::", error);
        failure(error);
      });
    });
 
  }
} 

export const ExampleComp = new ExampleComponent();
