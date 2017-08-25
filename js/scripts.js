//scripts.js
$(function(){
	console.log('DOM loaded - you can have fun');
});

var url = 'https://restcountries.eu/rest/v2/name/',
	countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
 	var countryName = $('#country-name').val();
if(!countryName.length) countryName = 'Poland';
$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}

function showCountriesList(resp) {
  countriesList.empty();
  resp.forEach(function(item) {
                 $('<h3>').text(item.name).appendTo(countriesList);
                 $('<li>').text('nazwa kraju w języku ojczystym: ' + item.nativeName).appendTo(countriesList);
                 $('<li>').text('stolica: ' + item.capital).appendTo(countriesList);
                 $('<li>').text('region: ' + item.region).appendTo(countriesList);
                 $('<li>').text('waluta: ' + item.currencies[0].name +' (' + item.currencies[0].symbol + ')').appendTo(countriesList);
                 $('<li>').text('język: ' + item.languages[0].name).appendTo(countriesList);
                 $('<li>').text('powierzchnia: ' +  item.area +  ' km 2').appendTo(countriesList);           
        });
}