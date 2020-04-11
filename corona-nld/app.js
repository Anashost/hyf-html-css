$.getJSON("https://corona.lmao.ninja/all", function (data) {

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

$.getJSON("https://corona.lmao.ninja/countries/" ,function (data) {
    console.log(data);


let default_flag = "0";
    for (let i = 0; i <data.length ; i++) {
        console.log(data[i].country);
        if (data[i].countryInfo.iso2 == null){
            data[i].countryInfo.iso2 = default_flag;
        }
        let html_code =
        '<tr>\n' +
            '        <td><img class="flag-list" src="https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/'+data[i].countryInfo.iso2.toLowerCase()+'.png">'+data[i].country+'</td>' +
            '        <td>'+data[i].cases+'</td>\n' +
            '        <td>'+data[i].recovered+'</td>\n' +
            '        <td>'+data[i].deaths+'</td>\n' +
            '    </tr>' ;

        $(".table-data").append(html_code);

    }


});

