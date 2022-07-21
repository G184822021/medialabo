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
let weatherDatas;// = {name : weatherDates.name,temp_max : weatherDates.main.temp_max, temp_min : weatherDates.main.temp_min};
let rankingDates;
for(let data in weatherDatas){
  rankingDates 
}
// 
let inputNode = document.querySelector('input[name="search"]');
let id = parseInt(inputNode.value);

let b1 = document.querySelector('button');
b1.addEventListener('click', sendRequest);

function printDate(weatherDatas){
 let  datas = {name : weatherDatas.name,
    temp_max : weatherDatas.main.temp_max, 
    temp_min : weatherDatas.main.temp_min,
    country : weatherDatas.sys.country,
    weather : weatherDatas.weather.description,
    speed : weatherDatas.wind.speed
  }
  for(let data in datas){
      let element = document.createElement('td');
      let place = document.querySelector('tr#'+ data);
      console.log(data[weather]);
      element.textContent = datas[data];
      place.insertAdjacentElement('beforeend',element);
  }
    
      
}

// 通信を開始する処理
function sendRequest() {
	// URL を設定
	let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + id + '.json';

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
	if (typeof weatherDates === 'string') {
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
