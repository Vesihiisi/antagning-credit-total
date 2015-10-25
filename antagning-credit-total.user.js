// ==UserScript==
// @name        AntagningCreditTotal
// @description Display total sum of user's college credits on antagning.se
// @namespace   https://github.com/Vesihiisi
// @include     https://www.antagning.se/se/mypages/credentials
// @version     1
// @grant       none
// ==/UserScript==

var credits = [];
var sum = 0;
var tableRows = document.getElementsByClassName('sum');
for (var i=0; i< tableRows.length; i++) {
  var indexLast = tableRows[i].cells.length - 1;
  var value =tableRows[i].cells[indexLast].innerHTML;
  credits.push(value);
}

for (var i=0; i< credits.length; i++){
  credits[i] = credits[i].replace(",", ".");
  credits[i] = parseFloat(credits[i]);
  sum = sum + credits[i];
}

var sumDisplay = " (" + sum + " hp)";
var pageHeader = document.getElementsByClassName('pageheader')[0];
var pageTitle = pageHeader.getElementsByTagName("h1")[0];
pageTitle.innerHTML = pageTitle.innerHTML + sumDisplay;
document.title = document.title + sumDisplay;