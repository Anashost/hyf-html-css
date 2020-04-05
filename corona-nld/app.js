// $.getJSON("https://api.covid19api.com/summary", function (data) {
//     console.log(data);
//     console.log(data.Countries);
//
//     let findCountry;
//     for (let i = 0; i < data.Countries.length; i++) {
//         if (data.Countries[i].Country === "Netherlands" && data.Countries[i].CountryCode === "NL" && data.Countries[i].Slug === "netherlands") {
//             findCountry = i;
//             break;
//         }
//     }
//
//     console.log(findCountry);
//
//     let total_confirmed = data.Countries[findCountry].TotalConfirmed;
//     let total_deaths = data.Countries[findCountry].TotalDeaths;
//     let new_confirmed = data.Countries[findCountry].NewConfirmed;
//     let new_deaths = data.Countries[findCountry].NewDeaths;
//     let total_recovered = data.Countries[findCountry].TotalRecovered;
//
//     $('.total_confirmed').append(total_confirmed);
//     $('.total_deaths').append(total_deaths);
//     $('.total_recovered').append(total_recovered);
//     $('.new_confirmed').append(new_confirmed);
//     $('.new_deaths').append(new_deaths);
//
//
//     var d = new Date();
//     var strDate = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
//     $('.date').append(strDate);
//
// });

$.getJSON("https://corona.lmao.ninja/countries/Nl", function (data) {
    console.log(data);


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


    var d = new Date();
    var strDate = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
    $('.date').append(strDate);

});
