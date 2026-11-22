

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head><title>

</title>
    <script src="/js/jquery/jquery-1.4.2.min.js" type="text/javascript"></script>
    <script src="/js/main.js" type="text/javascript"></script>
    <script src="/js/widgets.js" type="text/javascript"></script>
    <link href="/css/styles.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript">
        $(document).ready(function() {
            Widgets.BeginWorldWatch('');
        }); 
    </script>
</head>
<body>
    <form name="aspnetForm" method="post" action="WorldWatch.aspx" id="aspnetForm">
<div>
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwUKMTk1MTQzMjIzNmRksYkXXlNWNnE7LoeJYj671Pf+UEE=" />
</div>

    <div>
        
        <div id="widget-box">
            <h1><a href="http://www.sanebull.com/" target="_blank">World Market Watch</a></h1>
		    <div id="widget-content">
			    <table id="main_content" width="100%" cellpadding="1" cellspacing="1">
				    <tbody>
					    <tr id="tableCaptions">
						    <td style="width: 70px;">Exchange</td>
						    <td style="width: 75px; text-align: right">Last</td>
						    <td style="text-align: right">Change</td>
					    </tr>

				    </tbody>
				    
			    </table>
                
                <div id="dWorldWatch">
                    <center>
                    <div style="margin-top:50px">
                        <img src="/img/smallLoader.gif" alt=""/>
                        <br />
                        <br />Loading...
                        <div style="clear:both"><br /></div>
                    </div>
                    </center>
                </div>
			    
			    <table id="chart_content" style="display: none; width: 100%;" cellpadding="2" cellspacing="0">
				    <tbody>
					    <tr>
						    <td align="right"><div style="text-align: center; font-weight: bold;"><span id="c_tik"></span> | <span id="c_lst"></span> | <span id="c_chn"></span> | <a href="#" onclick="SBWidget.hideChart();">back</a></div></td>

					    </tr>
					    <tr><td><hr /></td></tr>
					    <tr>
						    <td align="right"><div id="sanebull_ch" style="width: 100%; text-align: center;"></div></td>
					    </tr>
				    </tbody>
			    </table>
		    </div>
            

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
