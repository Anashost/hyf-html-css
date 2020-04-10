let set_country = 'sy';
$.getJSON("https://corona.lmao.ninja/countries/" + set_country, function (data) {

    let total_confirmed = data.cases;
    let total_deaths = data.deaths;
    let new_confirmed = data.todayCases;
    let new_deaths = data.todayDeaths;
    let total_recovered = data.recovered;
    let flag = data.countryInfo.flag;

    $('.total_confirmed').append(total_confirmed);
    $('.total_deaths').append(total_deaths);
    $('.total_recovered').append(total_recovered);
    $('.new_confirmed').append(new_confirmed);
    $('.new_deaths').append(new_deaths);
    $('.flag').attr('src',flag);

    let d = new Date();
    let strDate = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
    $('.date').append(strDate);

});