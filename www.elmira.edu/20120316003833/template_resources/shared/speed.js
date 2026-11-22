/**
 * This is a simple AJAX/Prototype speed test script.
 * Last modified by: Shayne Kasai 
 * Last modified: 2006.10.04
 * 
 * I created this speed test using an AJAX call, but please note it
 * is not accurate because of other factors (ie: what if the user
 * is downloading other stuff, or checking email).  These are things
 * we can't factor into an equation - yet -.
 * 
 * 56K   - 0-56kbps
 * ISDN: - 64 - 128kbps
 * ADSL: - 16 - 640kbps
 * Cable - 512+Kbps
 */


/**
 * Initializer
 */

function SpeedTest(url, bytes, admin) {
	// Page size + Image Size
	this.url   = url;
	this.bytes = bytes;
  
}

/**
 * Main class
 */
SpeedTest.prototype = {
  
	/**
   * This is what you should run.  There is a call-back parameter if you want
   * to execute an external function
   *
   * use callback to get the return value.
   *
   * returns: none
   */
	GetSpeed:function(callback) {	
	  var bytes = this.bytes;			
    var start = new Date().getTime(); 
    var method = this._Calculate;
    
    
		var r = new Ajax.Request(
			this.url,
      {
				method: 'post',
				onFailure: function(req)  { alert('ERROR: Could not detect speed.') },
				onComplete: function(req) {
          					
          var end = new Date().getTime();
          var speed = method.apply(this, new Array(start, end, bytes));
          
          callback.apply(this, new Array(speed, start, end, bytes));
			  }
			}
		);		
	},
  
  /**
   * Internal method to calculate the speed type
   */
  _Calculate:function(start, end, bytes) {
  
    var speed = (Math.floor((((bytes * 8) / ((end - start) / 1000)) / 1024) * 10) / 10);
    return(parseFloat(speed));
  },
  
  /**
   * TODO: See table above for rates... eventually this should
   * return some sort of indication what kind of connection the user
   * has.
   */
  GetSpeedType:function() {
    
  }
}
