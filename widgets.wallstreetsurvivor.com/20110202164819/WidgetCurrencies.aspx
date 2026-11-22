

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head><title>

</title>
    <script src="/js/jquery/jquery-1.4.2.min.js" type="text/javascript"></script>
    <script src="/js/main.js" type="text/javascript"></script>
    <script src="/js/widgets.js" type="text/javascript"></script>
    <link href="/css/styles.css" rel="stylesheet" type="text/css" /></head>
<body>
    <form name="aspnetForm" method="post" action="WidgetCurrencies.aspx" id="aspnetForm">
<div>
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwUKLTE4MDYzNTY1M2Rksni2lgbkWZm58WDM3oG+RjEFVHU=" />
</div>

    <div>
        
    <div id="widget-box">
        <h1><a href="http://www.sanebull.com/" target="_blank"> Currency Monitor</a></h1>
	    <div id="widget-content">
		    <table id="main_content" width="100%" cellpadding="2" cellspacing="0">
			    <tbody>
				    <tr>
					    <td>&nbsp;</td>
				      <td><strong>USD</strong></td>

				      <td><strong>EUR</strong></td>
				      <td><strong>CAD</strong></td>
				      <td><strong>GBP</strong></td>
			      </tr>
				    <tr class="odd">
					  <td><strong>USD</strong></td>
				      <td style="text-align: center;">--</td>

				      <td><span id="usdeur_current">0.7240</span></td>
				      <td><span id="usdcny_current">0.9882</span></td>
				      <td><span id="usdgbp_current">0.6177</span></td>
			      </tr>
				    <tr>
					  <td><strong>EUR</strong></td>
				      <td><span id="eurusd_current">1.3812</span></td>

				      <td style="text-align: center;">--</td>
				      <td><span id="eurcny_current">1.3648</span></td>
				      <td><span id="eurgbp_current">0.8531</span></td>
			      </tr>
				    <tr class="odd">
					  <td><strong>CAD</strong></td>
				      <td><span id="cnyusd_current">1.0120</span></td>

				      <td><span id="cnyeur_current">0.7327</span></td>
				      <td style="text-align: center;">--</td>
				      <td><span id="cnygbp_current">0.6251</span></td>
			      </tr>
				    <tr>
					  <td><strong>GBP</strong></td>
				      <td><span id="gbpusd_current">1.6190</span></td>

				      <td><span id="gbpeur_current">1.1722</span></td>
				      <td><span id="gbpcny_current">1.5998</span></td>
				      <td style="text-align: center;">--</td>
			      </tr>
				    <tr><td colspan="5"><hr/></td></tr>
			    </tbody>
		    </table>
	    </div><!--widget-content-->
        

<div id="widget-bottom">
   
    <div id="get-quote-box"><input id="stock-entry" name="symbol" value="GET QUOTE.." onclick="if(this.value == 'GET QUOTE..') this.value='';" onblur="if (this.value=='') this.value='GET QUOTE..';" type="text"/></div>
    <input id="get-quote-go" value="Go" onclick="btnQuoteSearch_Click()" type="button"/>
</div>
    </div>  


    </div>
    <script type="text/javascript">

      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-1776507-8']);
      _gaq.push(['_trackPageview']);

      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();

    </script>
    
    </form>
</body>
</html>
