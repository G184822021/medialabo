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
let name = data.name;
let tempMax  = data.main.temp_max;
let tempMin  = data.main.temp_min;
let c = document.querySelector('tr#name');
let cE =document.createElement('td');
c.insertAdjacentElement('beforebegin',cE);
let tmax = document.querySelector('tr#tempMax');
let tmaxE =document.createElement('td');
c.insertAdjacentElement('beforebegin',tmaxE);
let tmin = document.querySelector('tr#tempMin');
let tminE =document.createElement('td');
c.insertAdjacentElement('beforebegin',tmaxE);

  console.log(data.name);
  console.log(data.main.temp_max);
  console.log(data.main.temp_min);