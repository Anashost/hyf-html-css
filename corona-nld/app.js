
$.getJSON("https://api.covid19api.com/summary",function (data) {
    console.log(data);


    let total_confirmed = data.Countries[147].TotalConfirmed;
    let total_deaths = data.Countries[147].TotalDeaths;
    let new_confirmed = data.Countries[147].NewConfirmed;
    let new_deaths = data.Countries[147].NewDeaths;
    let total_recovered = data.Countries[147].TotalRecovered;

    $('.total_confirmed').append(total_confirmed);
    $('.total_deaths').append(total_deaths);
    $('.total_recovered').append(total_recovered);
    $('.new_confirmed').append(new_confirmed);
    $('.new_deaths').append(new_deaths);


    var d = new Date();
    var strDate = d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate();
    $('.date').append(strDate);

});
