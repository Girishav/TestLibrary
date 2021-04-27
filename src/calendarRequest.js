const axios = require("axios");
export default class calendarRequest {
    constructor(){
    }
  
    getCalendarList(name){
      console.log("555 SDK get calendar list request ::")
      var calendarURL = "http://192.168.0.3:3002/listCalendar"
      var requestbody = {username : name}
      let config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin" : true,
        },
      };
  
      return new Promise((success, failure) => {
        axios
        .post(calendarURL, requestbody, config)
        .then((response) => {
          console.log("Status code : " + response.status);
          var responseData = JSON.stringify(response.data)
          console.log("data: " + responseData);
            success(responseData);
        })
        .catch((error) => {
          console.log('Got Error', error);
          if (error.response) {
            responseStatus.status = error.response.status;
            if(error.response.data.error)
            responseStatus.message =
              "Failed to obtain calendar list :" + error.response.data.error.message;
            else
            responseStatus.message =
            "Failed to obtain calendar list ";
            return failure(responseStatus);
          } else {
            console.log("Got Error " + error);
            return failure(error);
          }
        });
  
      });
    }
  } 
