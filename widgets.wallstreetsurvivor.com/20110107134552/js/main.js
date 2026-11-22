function btnQuoteSearch_Click() {
    var stockEntry = document.getElementById('stock-entry');
    if (stockEntry) {
        window.open("http://www.wallstreetsurvivor.com/Public/Research/Quotes.aspx?symbol=" + stockEntry.value);
    }
}