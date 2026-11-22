  
    function searchAction(tf,jsSearchType) {          
      if (jsSearchType != 'newsarticle' && tf.searchLoc && tf.searchLoc[1].checked) {
        if (tf.searchText.value != '') {
          window.open('http://www.google.ca/search?q=' + tf.searchText.value,'googlesearch');
        }
        return false;
      }
      var searchTerm = "";
      if (tf.searchText.value != '') { 
        var terms = tf.searchText.value.split(' ');
        for (var i=0; i< terms.length; i++) {
          var prevTerm = "";
          if (i>0) prevTerm = terms[i-1];
          searchTerm += addSearchTerm(terms[i],false,false,true,prevTerm);
        }
      }
      tf.keywords.value = tf.searchText.value;      
      if (jsSearchType != 'simple') {
       if (tf.andWords && tf.andWords.value != '') {
        //alert("andwords"+tf.andWords.value);
        searchTerm += ' AND '; 
        if (tf.keywords.value != '') { tf.keywords.value += ' AND '; }
        searchTerm += '(';
        var terms = tf.andWords.value.split(' ');
        for (var i=0; i< terms.length; i++) {
          searchTerm += addSearchTerm(terms[i],false,false);
          tf.keywords.value += terms[i];
          if (i < terms.length-1) {
            searchTerm += ' AND ';
            tf.keywords.value += ' AND ';
          }
         // alert("searchTerm"+searchTerm);
        }
        searchTerm += ')';
       }
       if (tf.exactWords && tf.exactWords.value != '') {
        searchTerm += ' AND ';
        if (tf.keywords.value != '') { tf.keywords.value += ' AND '; }
        searchTerm += addSearchTerm(tf.exactWords.value, true,false);
        var terms = tf.exactWords.value.split(' ');
        for (var i=0; i< terms.length; i++) {
          tf.keywords.value += terms[i];
          if (i < terms.length-1) {
            tf.keywords.value += ' AND ';
          }
        }
       }
       if (tf.orWords && tf.orWords.value != '') {
        searchTerm += ' AND ';
        if (tf.keywords.value != '') { tf.keywords.value += ' AND '; }
        searchTerm += '(';
        var terms = tf.orWords.value.split(' ');
        for (var i=0; i< terms.length; i++) {
          searchTerm += addSearchTerm(terms[i],false,false);
          tf.keywords.value += terms[i];
          if (i < terms.length-1) {
            searchTerm += ' OR ';
            tf.keywords.value += ' OR ';
          }
        }
        searchTerm += ')';
       }
       if (tf.notWords && tf.notWords.value != '') {
        var terms = tf.notWords.value.split(' ');
        for (var i=0; i< terms.length; i++) {
          searchTerm += addSearchTerm(terms[i],false,true);
          tf.keywords.value += 'NOT ' + terms[i];
        }
       }
      }
      if (jsSearchType == 'advanced') {
        //alert("Getting Advanced Options");
        
        searchTerm += getAdvancedOptions(tf);
      }
      if (jsSearchType == 'newsarticle') {
        searchTerm += getNewsArticleAdvancedSearchTerm(tf);
      }
      if (jsSearchType == 'task') {
        searchTerm += getTaskAdvancedSearchTerm(tf);
      }
      if (jsSearchType != 'simple') {
       if (tf.useDate && tf.useDate.checked) {
        searchTerm += '@between('
          + tf.dateType[tf.dateType.selectedIndex].value
          + ',' + getDate('after')
          + ',' + getDate('before') + ')';
       }
      }
      tf.searchTerm.value = searchTerm;
      return true;
      //return confirm(searchTerm);
    }
    function addSearchTerm(term,addQuot,isNot,useAnd,prevTerm) {
      regexp1 = new RegExp('"','gi');
      regexp2 = new RegExp("'",'gi');
      regexp3 = new RegExp("&", 'gi');
      regexp4 = new RegExp("<", 'gi');
      regexp5 = new RegExp(">", 'gi');
      result = term.replace(regexp1,'');
      result = result.replace(regexp2,'');
      result = result.replace(regexp3,'');
      result = result.replace(regexp4,'');
      result = result.replace(regexp5,'');
      if (result == '' || result == ' ') {
        return '';
      }
      else if (result.indexOf(':') != -1) {
        return result + ' ';
      }
      else if (result == 'AND' || result == 'OR' || result == 'NOT') {
        return result + ' ';
      }
      else {
        if (addQuot) { xtra = '"'; } else { xtra = '';}
        if (isNot) {
          return  'NOT ' + xtra + result + xtra
              + ' NOT Description:' + xtra + result + xtra
              + ' NOT Use:' + xtra + result + xtra
              + ' NOT Title:' + xtra + result + xtra
              + ' ';
        }
        else {
          var joiner = "";
          if (useAnd && (prevTerm != 'AND'
                                 && prevTerm != 'OR'
                                 && prevTerm != 'NOT')) joiner = " AND ";
          return  joiner + '(' + xtra + result + xtra
              + ' OR Description:' + xtra + result + xtra
              + ' OR Use:' + xtra + result + xtra
              + ' OR Title:' + xtra + result + xtra
              + ') ';
        }
      }
    }
    function updateDR(sel) {
      if (sel.selectedIndex == 0) {
        dateRestriction.style.visibility = 'hidden';
        dateRestriction.style.display = 'none';
      }
      else {
        dateRestriction.style.visibility = 'visible';
        dateRestriction.style.display = '';
      }
    }
    function getDate(pref) {
      var yrF = document.all(pref+'Year');
      var mnF = document.all(pref+'Month');
      var dyF = document.all(pref+'Day');
      return yrF[yrF.selectedIndex].value +
             mnF[mnF.selectedIndex].value +
             dyF[dyF.selectedIndex].value;
    }
    function toggleSearchOptions() {
      sopts = document.all('searchOptions');
      stog = document.all('sotog');
      sdiv = document.all('soDiv');
      if (sdiv.style.visibility == 'hidden') {
        stog.innerText = "hide";
        sdiv.style.display = '';
        sdiv.style.visibility = 'visible';
      }
      else {
        stog.innerText = "display";
        sdiv.style.display = 'none';
        sdiv.style.visibility = 'hidden';
      }
    }
    var prevGoogle = '';
    function toggleSearchLocation(val) {
      sdiv = document.all('soDiv');
      if (val == 'google') {
        prevGoogle = sdiv.style.visibility;
        sdiv.style.display = 'none';
        sdiv.style.visibility = 'hidden';
      }
      else if (prevGoogle == 'hidden') {
        sdiv.style.display = 'none';
        sdiv.style.visibility = 'hidden';
      }
      else if (prevGoogle == 'visible' || prevGoogle == '') {
        sdiv.style.display = '';
        sdiv.style.visibility = 'visible';
      }
    }
    function toggleCBField(fn,cb,dpyMode) {
      box = document.all(fn);
      if (dpyMode == 'side') {
        if (cb.checked) {
          box.style.display = '';
          box.style.visibility = 'visible';
        }
        else {
          box.style.display = 'none';
          box.style.visibility = 'hidden';
        }
      }
    }
    var radioBoxes = new Array();
    function registerRadioBox(name) {
      radioBoxes[radioBoxes.length] = name;
    }
    function toggleRadioBox(name, dpyMode, sf) {
      var box;
      var sfid = document.getElementById(sf);
      if (name == '') {
        box = null;
        sfid.useType[0].checked = true;
      } else {
        box = document.all(name + 'Box');
        for (i=1; i<= radioBoxes.length; i++) {
          if (sfid.useType[i].value == name) {
            sfid.useType[i].checked = true;
          }
        }
      }
      if (dpyMode == 'side') {
        for (i=0; i < radioBoxes.length; i++) {
          tmpbox = document.all(radioBoxes[i] + 'Box');
          if (tmpbox != box) {
            tmpbox.style.display = 'none';
            tmpbox.style.visibility = 'hidden';
          }
        }
        if (box != null) {
          box.style.display = '';
          box.style.visibility = 'visible';
        }
      }
    }
    function addList(name, field) {
      var selectedCount = 0;
      var len = field.options.length;
      var returnValue="";
  
      for (i = 0; i < len; i++)
        if (field.options[i].selected &&
            field.options[i].value != '')
          selectedCount++;
  
      if (selectedCount > 0) {
        var returnValue = ' AND (';
        selectedCount = 0;
        for (i = 0; i < len; i++) {
          if(field.options[i].selected) {
            if( selectedCount != 0 ) returnValue += ' OR ';
            returnValue += name + ':"'+ field.options[i].value + '" ';
            selectedCount++;
          }
        }
        returnValue += ')';
      }
      return returnValue;
    }
    function addCheckBox(name, frm, pfx){
    var selectedCount = 0;
    var len = frm.elements.length;
    var returnValue="";

    for (i = 0; i < len; i++){
      var isGroup = (pfx) ? frm.elements[i].name.indexOf(pfx):0;
      if (isGroup != -1 && frm.elements[i].checked){
        selectedCount++;
      }
    }

    if (selectedCount > 0) {
      var returnValue = ' AND (';
      selectedCount = 0;
      for (i = 0; i < len; i++) {
        if(frm.elements[i].checked) {
          if( selectedCount != 0 ) returnValue += ' OR ';
          returnValue += name + ':"'+ frm.elements[i].value + '" ';
          selectedCount++;
        }
      }
      returnValue += ')';
    }
    return returnValue;
  }
