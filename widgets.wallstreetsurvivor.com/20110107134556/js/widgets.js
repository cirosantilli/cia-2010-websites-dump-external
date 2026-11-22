var Widgets = {
    _symbolList: '',
    _refreshTimer: 30000,
    _region: null,
    _clearTimerID: null,
    GetWorldWatch: function() {
        $.ajax({
            type: "POST",
            url: "/asmx/api.asmx/GetIndices",
            data: "{'symbolList':'" + this._symbolList + "','region':'" + this._region + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(msg) {
                var result = msg.d;
                $('#dWorldWatch').html(result.Html);
            }
        });
    },

    BeginWorldWatch: function(region) {
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

    GetWidgetWatch: function() {
        $.ajax({
            type: "POST",
            url: "/asmx/api.asmx/GetWidgetWatch",
            data: "{'symbolList':'" + this._symbolList + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(msg) {
                var result = msg.d;
                $('#dWidgetWatch').html(result.Html);
            }
        });
    },

    BeginWidgetWatch: function() {
        Widgets.GetWidgetWatch();
        function beginRetrieval() {
            Widgets.GetWidgetWatch();
        }
        var id = setInterval(beginRetrieval, this._refreshTimer);
    },

    // get commodities/futures by type: Energies, Metals, Grains, Livestock, Softs
    GetCommodities: function(type) {
        $.ajax({
            type: "POST",
            url: "/asmx/api.asmx/GetCommodities",
            data: "{'type':'" + type + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(msg) {
                var result = msg.d;
                $('#dResult').html(result.Html);
            }
        });
    },

    BeginCommodities: function(type) {
        if (this._clearTimerID != null) {
            clearInterval(this._clearTimerID);
        }
        Widgets.GetCommodities(type);
        function beginRetrieval() {
            Widgets.GetCommodities(type);
        }
        this._clearTimerID = setInterval(beginRetrieval, this._refreshTimer);
    },

    GetWidgetStock: function(symbol) {
        $.ajax({
            type: "POST",
            url: "/asmx/api.asmx/GetWidgetStock",
            data: "{'symbol':'" + symbol + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(msg) {
                var result = msg.d;
                $('#dWidgetStockResult').html(result.Html);
            }
        });
    },

    BeginWidgetStock: function(symbol) {
        if (this._clearTimerID != null) {
            clearInterval(this._clearTimerID);
        }
        Widgets.GetWidgetStock(symbol);
        function beginRetrieval() {
            Widgets.GetWidgetStock(symbol);
        }
        this._clearTimerID = setInterval(beginRetrieval, this._refreshTimer);
    },

    GetWidgetStockNews: function(symbol) {
        $.ajax({
            type: "POST",
            url: "/asmx/api.asmx/GetWidgetStockNews",
            data: "{'symbol':'" + symbol + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(msg) {
                var result = msg.d;
                $('#dWidgetStockNewsResult').html(result.Html);
            }
        });
    },

    GetRealTimeNews: function() {
        $.ajax({
            type: "POST",
            url: "/asmx/api.asmx/GetRealTimeNews",
            data: "{}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(msg) {
                var result = msg.d;
                $('#dRealTimeNews').html(result.Html);
            }
        });
    },

    BeginRealTimeNews: function() {
        if (this._clearTimerID != null) {
            clearInterval(this._clearTimerID);
        }
        Widgets.GetRealTimeNews();
        function beginRetrieval() {
            Widgets.GetRealTimeNews();
        }
        this._clearTimerID = setInterval(beginRetrieval, this._refreshTimer);
    },

    GetTreasuries: function() {
        $.ajax({
            type: "POST",
            url: "/asmx/api.asmx/GetTreasuries",
            data: "{}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(msg) {
                var result = msg.d;
                $('#dTreasuries').html(result.Html);
            }
        });
    },

    BeginGetTreasuries: function() {
        if (this._clearTimerID != null) {
            clearInterval(this._clearTimerID);
        }
        Widgets.GetTreasuries();
        function beginRetrieval() {
            Widgets.GetTreasuries();
        }
        this._clearTimerID = setInterval(beginRetrieval, this._refreshTimer);
    },

    GetWidgetPlugin: function(symbol) {
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
            success: function(msg) {
                var result = msg.d;
                $('#dWidgetPluginResult').html(result.Html);
                $('#sSymbol').html(result.ExtraField);
            }
        });
    },

    BeginWidgetPlugin: function(symbol) {
        if (this._clearTimerID != null) {
            clearInterval(this._clearTimerID);
        }
        Widgets.GetWidgetPlugin(symbol);
        function beginRetrieval() {
            Widgets.GetWidgetPlugin(symbol);
        }
        this._clearTimerID = setInterval(beginRetrieval, this._refreshTimer);
    }
}
