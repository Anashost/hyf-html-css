// $.getJSON("https://corona.lmao.ninja/countries", function (data) {
//     // generate date
//     let d = new Date();
//     let strDate = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
//     $('.date').append(strDate);
//
//     // fill options with countries
//     for (let i = 0; i < (data.length) ; i++) {
//         let html_code ='<option>'+data[i].countryInfo.iso2+' </option>';
//         $('.country-list').append(html_code);
//     }
//
//     // sorting countries by name
//     $(".country-list").append($(".country-list option").remove().sort(function(a, b) {
//         let at = $(a).text(), bt = $(b).text();
//         return (at > bt)?1:((at < bt)?-1:0);
//     }));
//
//     // get selected option and store it in a variable
//     $(".country-list").change(function(){
//         let selectedCountry = $(this).children("option:selected").val();
//         // window.location.reload();
//         // data link
//         let data_link ="https://corona.lmao.ninja/countries/"+selectedCountry+"/";
//
//         ///////////////////////////// Fill data //////////////////////////////////
//         $.getJSON(data_link, function (data) {
//             console.log(data);
//             // get today date
//             let d = new Date();
//             let strDate = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
//             $('.date').append(strDate);
//
//             // data as variables
//             let total_confirmed = data.cases;
//             let total_deaths = data.deaths;
//             let new_confirmed = data.todayCases;
//             let new_deaths = data.todayDeaths;
//             let total_recovered = data.recovered;
//             let flag = data.countryInfo.flag;
//
//             // append data to html
//             $('.total_confirmed').append(total_confirmed);
//             $('.total_deaths').append(total_deaths);
//             $('.total_recovered').append(total_recovered);
//             $('.new_confirmed').append(new_confirmed);
//             $('.new_deaths').append(new_deaths);
//             $('.flag').attr('src', flag);
//
//         });
//     });
// });
//
// // "https://corona.lmao.ninja/countries/nl"
//
// // <select name="country" class="country-list">
// //     <option>select a country</option>
// // </select>
// // <button type="button" id="clickToChange" onclick="location.reload();" >Change Content</button>
//
