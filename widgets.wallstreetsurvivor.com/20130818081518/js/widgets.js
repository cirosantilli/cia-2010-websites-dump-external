var Widgets = {
    _symbolList: '',
    _usSnapshotSymbolList: '',
    _usSnapshotBondList: '',
    _usSnapshotCommodityMetalList: '',
    _usSnapshotCommodityEnergyList: '',
    _refreshTimer: 1500000,
    _region: null,
    _clearTimerID: null,
    GetWorldWatch: function () {
        $.ajax({
            type: "POST",
            url: "/asmx/api.asmx/GetIndicesData",
            data: "{'symbolList':'" + this._symbolList + "','region':'" + this._region + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                var data = msg.d;
                $.each(data, function (i) {
                    if (this.Symbol.indexOf('^') != -1) {
                        this.NakedSymbol = '';
                    }
                });
                $("#tWorldWatch").html('');
                $("#worldWatchTemplate").tmpl(data).appendTo("#tWorldWatch");
            }
        });
    },

    BeginWorldWatch: function (region) {
        if (this._clearTimerID != null) {
            clearInterval(this._clearTimerID);
        }
        this._region = region;
        Widgets.GetWorldWatch();
        function beginRetrieval() {
            Widgets.GetWorldWatch();
        }
        this._clearTimerID = setInterval(beginRetrieval, this._refreshTimer);
    },

    GetWidgetWatch: function () {
        $.ajax({
            type: "POST",
            url: "/asmx/api.asmx/GetWidgetWatch",
            data: "{'symbolList':'" + this._symbolList + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                var result = msg.d;
                $('#dWidgetWatch').html(result.Html);
            }
        });
    },

    BeginWidgetWatch: function () {
        Widgets.GetWidgetWatch();
        function beginRetrieval() {
            Widgets.GetWidgetWatch();
        }
        var id = setInterval(beginRetrieval, this._refreshTimer);
    },

    // get commodities/futures by type: Energies, Metals, Grains, Livestock, Softs
    GetCommodities: function (type) {
        $.ajax({
            type: "POST",
            url: "/asmx/api.asmx/GetCommodities",
            data: "{'type':'" + type + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                var result = msg.d;
                $('#dResult').html(result.Html);
            }
        });
    },

    BeginCommodities: function (type) {
        if (this._clearTimerID != null) {
            clearInterval(this._clearTimerID);
        }
        Widgets.GetCommodities(type);
        function beginRetrieval() {
            Widgets.GetCommodities(type);
        }
        this._clearTimerID = setInterval(beginRetrieval, this._refreshTimer);
    },
    GetWidgetCommodity: function (symbol) {
        $.ajax({
            type: "POST",
            url: "/asmx/api.asmx/GetWidgetCommodity",
            data: "{'symbol':'" + symbol + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                var result = msg.d;
                $('#dWidgetCommodityResult').html(result.Html);
            }
        });
    },

    BeginWidgetCommodity: function (symbol) {
        if (this._clearTimerID != null) {
            clearInterval(this._clearTimerID);
        }
        Widgets.GetWidgetCommodity(symbol);
        function beginRetrieval() {
            Widgets.GetWidgetCommodity(symbol);
        }
        this._clearTimerID = setInterval(beginRetrieval, this._refreshTimer);
    },
    GetWidgetStock: function (symbol) {
        $.ajax({
            type: "POST",
            url: "/asmx/api.asmx/GetWidgetStock",
            data: "{'symbol':'" + symbol + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                var result = msg.d;
                $('#dWidgetStockResult').html(result.Html);
            }
        });
    },

    BeginWidgetStock: function (symbol) {
        if (this._clearTimerID != null) {
            clearInterval(this._clearTimerID);
        }
        Widgets.GetWidgetStock(symbol);
        function beginRetrieval() {
            Widgets.GetWidgetStock(symbol);
        }
        this._clearTimerID = setInterval(beginRetrieval, this._refreshTimer);
    },

    GetWidgetStockNews: function (symbol) {
        $.ajax({
            type: "POST",
            url: "/asmx/api.asmx/GetWidgetStockNews",
            data: "{'symbol':'" + symbol + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                var result = msg.d;
                $('#dWidgetStockNewsResult').html(result.Html);
            }
        });
    },

    GetRealTimeNews: function () {
        $.ajax({
            type: "POST",
            url: "/asmx/api.asmx/GetRealTimeNews",
            data: "{}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                var result = msg.d;
                $('#dRealTimeNews').html(result.Html);
            }
        });
    },

    BeginRealTimeNews: function () {
        if (this._clearTimerID != null) {
            clearInterval(this._clearTimerID);
        }
        Widgets.GetRealTimeNews();
        function beginRetrieval() {
            Widgets.GetRealTimeNews();
        }
        this._clearTimerID = setInterval(beginRetrieval, this._refreshTimer);
    },

    GetTreasuries: function () {
        $.ajax({
            type: "POST",
            url: "/asmx/api.asmx/GetTreasuries",
            data: "{}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                var result = msg.d;
                $('#dTreasuries').html(result.Html);
            }
        });
    },

    BeginGetTreasuries: function () {
        if (this._clearTimerID != null) {
            clearInterval(this._clearTimerID);
        }
        Widgets.GetTreasuries();
        function beginRetrieval() {
            Widgets.GetTreasuries();
        }
        this._clearTimerID = setInterval(beginRetrieval, this._refreshTimer);
    },

    GetWidgetPlugin: function (symbol) {
        $('#dWidgetPluginResult').html(
            '<center>' +
            '<div style=\"margin-top:20px\">' +
                '<img src=\"/img/smallLoader.gif\" alt=\"\"/>' +
                '<br />' +
                '<br />Loading...' +
                '<div style=\"clear:both\"><br /></div>' +
            '</div>' +
            '</center>'
        );

        $.ajax({
            type: "POST",
            url: "/asmx/api.asmx/GetWidgetPlugin",
            data: "{'symbol':'" + symbol + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                var result = msg.d;
                $('#dWidgetPluginResult').html(result.Html);
                $('#sSymbol').html(result.ExtraField);
            }
        });
    },

    BeginWidgetPlugin: function (symbol) {
        if (this._clearTimerID != null) {
            clearInterval(this._clearTimerID);
        }
        Widgets.GetWidgetPlugin(symbol);
        function beginRetrieval() {
            Widgets.GetWidgetPlugin(symbol);
        }
        this._clearTimerID = setInterval(beginRetrieval, this._refreshTimer);
    },

    GetUSSnapshot: function () {
        $.ajax({
            type: "POST",
            url: "/asmx/api.asmx/GetUSSnapshot",
            data: "{" +
                    "'symbolList':'" + Widgets._usSnapshotSymbolList + "'," +
                    "'bondList':'" + Widgets._usSnapshotBondList + "'," +
                    "'commoditiesMetalList':'" + Widgets._usSnapshotCommodityMetalList + "'," +
                    "'commoditiesEnergyList':'" + Widgets._usSnapshotCommodityEnergyList + "'" +
                   "}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result) {
                var etf_data = result.d.ETFs;
                var bond_data = result.d.Bonds;
                var commodity_data = result.d.Commodities;

                $.each(etf_data, function (i) {
                    if (this.Symbol.indexOf('^') != -1) {
                        this.NakedSymbol = '';
                    }
                });
                $("#tETF").html('');
                $("#etfTemplate").tmpl(etf_data).appendTo("#tETF");

                $("#tBonds").html('');
                $("#bondTemplate").tmpl(bond_data).appendTo("#tBonds");

                $("#tCommodities").html('');
                $("#commodityTemplate").tmpl(commodity_data).appendTo("#tCommodities");
            }
        });
    },

    BeginUSSnapshot: function (symbols, bonds, commoditiesMetal, commoditiesEnergy) {
        if (this._clearTimerID != null) {
            clearInterval(this._clearTimerID);
        }
        Widgets._usSnapshotSymbolList = symbols;
        Widgets._usSnapshotBondList = bonds;
        Widgets._usSnapshotCommodityMetalList = commoditiesMetal;
        Widgets._usSnapshotCommodityEnergyList = commoditiesEnergy;

        Widgets.GetUSSnapshot();
        function beginRetrieval() {
            Widgets.GetUSSnapshot();
        }
        this._clearTimerID = setInterval(beginRetrieval, this._refreshTimer);
    }
}


var CustomWidgets = {
    _refreshTimer: 1500000,
    _clearTimerID: null,
    PageLoad: function () {
        CustomWidgets.SelectWidget();
        CustomWidgets.DrawHeader($('.colorPickerHookHeaderColor').val());
        CustomWidgets.DrawRow($('.colorPickerHookRow1Color').val());
        CustomWidgets.DrawAltRow($('.colorPickerHookRow2Color').val());
        CustomWidgets.DrawBorder($('.colorPickerHookBorder').val());
        CustomWidgets.SetSymbol($('.ddlIndex1 :selected').text(), $('.ddlIndex1').val(), 1);
        CustomWidgets.SetSymbol($('.ddlIndex2 :selected').text(), $('.ddlIndex2').val(), 2);
        CustomWidgets.SetSymbol($('.ddlIndex3 :selected').text(), $('.ddlIndex3').val(), 3);
        CustomWidgets.SetSymbol($('.ddlIndex4 :selected').text(), $('.ddlIndex4').val(), 4);
        CustomWidgets.SetSymbol($('.ddlIndex5 :selected').text(), $('.ddlIndex5').val(), 5);
    },
    SelectWidget: function (size) {
        var selectedSize;
        if (size && size != null) selectedSize = size;
        else selectedSize = $('.ddlSize').val();
        $('.widgetPreview').hide();
        $('#' + selectedSize).show();
    },
    SetSymbol: function (symbol, shortSymbol, target) {
        var elName = 'symbol' + target;
        $('.' + elName).html(symbol);
        $('.' + elName).attr('href', 'http://www.howthemarketworks.com/trading/stock-quotes.php?sym=' + shortSymbol);
    },
    SetPrices: function (index, target) {
        var elName = 'price' + target;
        $('.' + elName).html(index.Price.toFixed(2));
        elName = 'change' + target;
        $('.' + elName).html(index.PriceChange.toFixed(2));

        if (index.PriceChange >= 0) {
            $('.' + elName).css('color', '#59d124');
        }
        else {
            $('.' + elName).css('color', '#b3373a');
        }
    },
    DrawHeader: function (color) {
        if (color && color != null) {
            $('.widgetPreview .header').css("background-color", "#" + color);
        }
    },
    DrawRow: function (color) {
        if (color && color != null) {
            $('.widgetPreview .row td').css("background-color", "#" + color);
        }
    },
    DrawAltRow: function (color) {
        if (color && color != null) {
            $('.widgetPreview .altRow td').css("background-color", "#" + color);
        }
    },
    DrawBorder: function (color) {
        if (color && color != null) {
            $('.widgetPreview .border').css("border", "solid #" + color + " 1px");
        }
    },

    BeginMarketUpdate: function () {
        if (this._clearTimerID != null) {
            clearInterval(this._clearTimerID);
        }
        CustomWidgets.GetMarketUpdate();
        function beginRetrieval() {
            CustomWidgets.GetMarketUpdate();
        }
        this._clearTimerID = setInterval(beginRetrieval, this._refreshTimer);
    },
    GetMarketUpdate: function () {
        $.ajax({
            type: "POST",
            url: "/asmx/api.asmx/GetMarketUpdate",
            data: "{'symbolList':'" + symbolList + "','clientID':'" + clientID + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                indexList = msg.d;
                if (indexList != null) {
                    $.each(indexList, function (i) {
                        CustomWidgets.SetSymbol(this.CompanyName, this.Symbol, (i + 1));
                        CustomWidgets.SetPrices(this, (i + 1));
                    });
                }
            }
        });
    },
    BeginWorldWatch: function () {
        $('#tableResult').html('Loading...');
        if (this._clearTimerID != null) {
            clearInterval(this._clearTimerID);
        }
        CustomWidgets.GetWorldWatch();
        function beginRetrieval() {
            CustomWidgets.GetWorldWatch();
        }
        this._clearTimerID = setInterval(beginRetrieval, this._refreshTimer);
    },
    GetWorldWatch: function () {
        $.ajax({
            type: "POST",
            url: "/asmx/api.asmx/GetWorldMarket",
            data: "{'stocksList':'" + stocksList + "','indicesList':'" + indicesList + "','clientID':'" + clientID + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                $('#tableResult').html('');
                securityList = msg.d;
                if (securityList != null) {
                    $.each(securityList, function (i) {
                        var color;
                        if (this.PriceChange == null)
                            this.PriceChange = 0;
                        if (this.Price == null)
                            this.Price = 0;
                        if (this.PriceChange >= 0) {
                            color = '#59d124';
                        }
                        else {
                            color = '#b3373a';
                        }

                        var tr;
                        if ((i % 2) == 0)
                            tr = '<tr class="row">';
                        else
                            tr = '<tr class="alt altRow">';

                        var symbol = this.ShortSymbol.indexOf('^') == -1 ? this.ShortSymbol : '';
                        tr += '<td><a class="symbol1" target="_blank" href="http://www.howthemarketworks.com/trading/stock-quotes.php?sym=' + symbol + '">' + this.CompanyName + '</a></td>' +
                            '<td align="right"><span class="price1">' + this.Price.toFixed(2) + '</span><br /><span class="change1" style="color:' + color + '">' + this.PriceChange.toFixed(2) + '</span></td></tr>';
                        $('#tableResult').append(tr);


                    });

                    CustomWidgets.DrawRow(rowColor);
                    CustomWidgets.DrawAltRow(altRowColor);
                }
            }
        });
    }
}