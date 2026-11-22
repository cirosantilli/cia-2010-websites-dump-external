/**
 * SK: here are some AJAX utilities for the calendar
 */
 
 // constants
 CALENDAR       = 'mini_calendar_view'; // this is the calendar on the homepage
 CALENDAR_ERROR = 'ERROR: We could not fetch the calendar data, please try again later.';
 
 
 // main functions
 // this function will simply fetch the month and replace CALENDAR with
 // the result.  This is geared for the main homepage.  
 function fetch_month(url) {

   var r = new Ajax.Request(
    url,
    {
      method: 'post',
      onFailure:  function(req) { alert(CALENDAR_ERROR + '\n' + req.responseText); },
      onSuccess: function(req) {
        $(CALENDAR).innerHTML = req.responseText;
      }
    }
   );
 }
 
 function reload_month(url) {
    var loc = window.location.pathname;
    var path = loc.substring(0, loc.lastIndexOf('/'));
    window.location = path + '/' + url;
 }
