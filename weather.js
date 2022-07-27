let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
/* データを入れる処理
*/
let countryId = [
360630 ,
524901 ,
993800 ,
1816670 ,
1850147,
1880252 ,
2147714 ,
2643743 ,
2968815 ,
3451189 ,
5128581 ,
5368361 ]
let countryName = [
'カイロ',
'モスクワ',
'ヨハネスブルク',
'北京',
'東京',
'シンガポール',
'シドニー',
'ロンドン',
'パリ',
'リオデジャネイロ',
'ニューヨーク',
'ロサンゼルス'
]
let weatherDatas;// = {name : weatherDates.name,temp_max : weatherDates.main.temp_max, temp_min : weatherDates.main.temp_min};
let rankingDates = new Array(12);
let rank;
let i1;
let id = 1850147;

// 

let b1 = document.querySelector('button');
b1.addEventListener('click', sendRequest);
let c1 = document.querySelector('#cell1');
c1.addEventListener('click', changeColor);
c1.addEventListener('click', printRnking);
let c2 = document.querySelector('#cell2');
c2.addEventListener('click', changeColor);
c2.addEventListener('click', sendRequest);
let c3 = document.querySelector('#cell3');
c3.addEventListener('click', changeColor);
c3.addEventListener('click', showWord);
function showWord(event){
  deletgraph();
  
  for(let i = 0; i < countryId.length;i++){
    let element = document.createElement('td');
    element.id = countryId[i];
    element.addEventListener('click', sendRequest1);
    let place = document.querySelector('tr#country');
    if(i > countryId.length /2){
      place = document.querySelector('tr#speed');
    }
    element.textContent = countryName[i];
    place.insertAdjacentElement('beforeend',element);
  }
}
function changeColor(event) {
	let div = event.target.className;
	let d = document.querySelectorAll('#main');
  for(let i of d){
    i.className = div;
  }
}
function printRnking(event){
  i1 = 0;
  for(i1 = 0; i1 < countryId.length;i1++){
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + countryId[i1] + '.json';
  console.log(i1);
  axios.get(url)
  .then(select)
  .catch(showError)
  .then(finish);
  }

}
function select(resp){
	weatherDatas = resp.data;
	if (typeof weatherDatas === 'string') {
		weatherDatas = JSON.parse(weatherDatas);
	}
  setRank(weatherDatas);
}
function setRank(weatherDatas){
  for(let i = 0; i < rankingDates.length;i++){
    if(rankingDates[i] != null) continue;
    let data = { temp_max : weatherDatas.main.temp_max,
      country : weatherDatas.name

    }
  rankingDates[i] = data;
  break;
}
sort(rankingDates);
printRanking(rankingDates);
}
function sort(rankingDates){
  for(var i = 0; i<rankingDates.length-1;i++){
    let temp = rankingDates[i].temp_max;
    let max = temp
    let k = i;
    for(var j = i+ 1; j<rankingDates.length;j++){

        if(max <rankingDates[j].temp_max){
            max = rankingDates[j].temp_max;
            k = j;
        }
    }
    var tmp = rankingDates[i];
    rankingDates[i] = rankingDates[k];
    rankingDates[k] =tmp;

    console.log(rankingDates);
  }
}
function printRanking(datas){
  let name = new Array(rankingDates.length);
  let temp = new Array(rankingDates.length);
  deletgraph();
  
  for(let i = 0; i < rankingDates.length;i++){
    name[i] = datas[i].country;
    temp[i] = datas[i].temp_max;
    console.log(name[i]);
  }
    let element = document.createElement('td');
    let place = document.querySelector('tr#name');
    element.textContent =  "<ベスト5位>";
    place.insertAdjacentElement('beforeend',element);
  for(let i = 0; i < 5;i++){
    let element = document.createElement('td');
    let place = document.querySelector('tr#country');
    element.textContent = i + 1 + "位";
    place.insertAdjacentElement('beforeend',element);
  }
  for(let i = 0; i < 5;i++){
    let element = document.createElement('td');
    let place = document.querySelector('tr#weather');
    element.textContent = name[i];
    place.insertAdjacentElement('beforeend',element);
  }
  for(let i = 0; i < 5;i++){
    let element = document.createElement('td');
    let place = document.querySelector('tr#temp_max');
    element.textContent = temp[i] + "℃";
    place.insertAdjacentElement('beforeend',element);
  }
  
}
function printDate(weatherDatas){
  let  datas = {name : weatherDatas.name,
    temp_max : weatherDatas.main.temp_max, 
    temp_min : weatherDatas.main.temp_min,
    country : weatherDatas.sys.country,
    weather : weatherDatas.weather[0].description,
    speed : weatherDatas.wind.speed
  }
  let label = {name: "都市",
  temp_max:' 最高気温   ',
  temp_min:' 最低気温         ',
  country :' 国   ',
  weather :' 天気   ',
  speed :  ' 風速   '
 }
 deletgraph();
  for(let data in label){
    let element = document.createElement('td');
    let place = document.querySelector('tr#'+ data);
    element.textContent = label[data];
    place.insertAdjacentElement('beforeend',element);
  }
  for(let data in datas){
    let element = document.createElement('td');
    let place = document.querySelector('tr#'+ data);
    console.log(data[weather]);
    element.textContent = datas[data];
    place.insertAdjacentElement('beforeend',element);
  }
  let d = document.querySelectorAll('#main');
  for(let i of d){
    i.className = "red";
  }
  
}

function deletgraph() {
  let all = document.querySelectorAll('td');
  for (let data of all) {
    data.remove();
  }
}

// 通信を開始する処理
function sendRequest() {
  // URL を設定
  let inputNode = document.querySelector('input[name="search"]');
  for(let i = 0; i < countryName.length;i++){
    if(inputNode.value === countryName[i]){
     id = countryId[i];
    }
  }
	let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + id + '.json';
  console.log(inputNode);
  console.log(id);
  
	// 通信開始
	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}
function sendRequest1(event) {
  // URL を設定
   id = event.target.id;
	let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + id + '.json';
  console.log(id);
  
	// 通信開始
	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}

// 通信が成功した時の処理
function showResult(resp) {
	// サーバから送られてきたデータを出力
	weatherDatas = resp.data;

	// data が文字列型なら，オブジェクトに変換する
	if (typeof weatherDatas === 'string') {
		weatherDatas = JSON.parse(weatherDatas);
	}

	// data をコンソールに出力
  printDate(weatherDatas);




}

// 通信エラーが発生した時の処理
function showError(err) {
  console.log('エラー');
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}
