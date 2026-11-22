function btnQuoteSearch_Click(txtID) {
    var stockEntry;
    if (txtID == null) {
        stockEntry = document.getElementById('stock-entry');
    }
    else {
        stockEntry = document.getElementById(txtID);
    }
    if (stockEntry) {
        window.open('http://www.howthemarketworks.com/trading/stock-quotes.php?sym=' + stockEntry.value);
        //window.open("http://www.wallstreetsurvivor.com/quote/" + stockEntry.value);
    }
}