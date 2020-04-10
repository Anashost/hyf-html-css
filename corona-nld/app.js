let set_country = 'nl';

$.getJSON("https://corona.lmao.ninja/countries/" + set_country, function (data) {
    console.log(data);

    // get today date
    let d = new Date();
    let strDate = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
    $('.date').append(strDate);

    // data as variables
    let total_confirmed = data.cases;
    let total_deaths = data.deaths;
    let new_confirmed = data.todayCases;
    let new_deaths = data.todayDeaths;
    let total_recovered = data.recovered;
    let flag = data.countryInfo.flag;

    // let findIndex ;
    // for (let i = 0; i < data.length; i++) {
    //     if (data[i].countryInfo.iso2 === 'NL') {
    //         findIndex = i;
    //         break;
    //     }
    // }

    // let total_confirmed = data[findIndex].cases;
    // let total_deaths = data[findIndex].deaths;
    // let new_confirmed = data[findIndex].todayCases;
    // let new_deaths = data[findIndex].todayDeaths;
    // let total_recovered = data[findIndex].recovered;
    // let flag = data[findIndex].countryInfo.flag;

    // append data to html
    $('.total_confirmed').append(total_confirmed);
    $('.total_deaths').append(total_deaths);
    $('.total_recovered').append(total_recovered);
    $('.new_confirmed').append(new_confirmed);
    $('.new_deaths').append(new_deaths);
    $('.flag').attr('src', flag);

});