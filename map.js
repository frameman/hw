var map = L.map('map').setView([25.0330, 121.5654], 10);
var markers = []; // Global array to store markers
var circles = []; // Global array to store circles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(map);

document.getElementById('place-select').addEventListener('change', function() {
  var place = this.value;
  showPlace(place);
  showPicture(place);
});



function showPlace(place) {
  // Clear existing markers
  if (typeof markers !== 'undefined') {
    markers.forEach(function(marker) {
      map.removeLayer(marker);
    });
    markers = [];
  }
  
  // Clear existing circles
  if (typeof circles !== 'undefined') {
    circles.forEach(function(circle) {
      map.removeLayer(circle);
    });
    circles = [];
  }
 

  // Add markers based on the selected place
  switch (place) {
    default:
      addMarker([25.0626, 121.5219], "中山區", true);
      addMarker([25.0324, 121.5199], "中正區", true);
      addMarker([25.0329, 121.5703], "信義區", true);
      addMarker([25.0685, 121.5905], "內湖區", true);
      addMarker([25.1482, 121.5155], "北投區", true);
      addMarker([25.0911, 121.5243], "士林區", true);
      addMarker([25.0324, 121.5431], "大安區", true);
      addMarker([25.0499, 121.5637], "松山區", true);
      addMarker([25.0375, 121.4997], "萬華區", true);
      addMarker([24.9281, 121.3768], "三峽區", true);
      addMarker([25.0720, 121.4958], "三重區", true);
      addMarker([24.9910, 121.4654], "中和區", true);
      addMarker([25.0773, 121.4387], "五股區", true);
      addMarker([25.1329, 121.4147], "八里區", true);
      addMarker([24.9660, 121.4515], "土城區", true);
      addMarker([24.9774, 121.5361], "新店區", true);
      addMarker([25.0349, 121.4505], "新莊區", true);
      addMarker([24.9973, 121.4542], "板橋區", true);
      addMarker([25.0087, 121.5123], "永和區", true);
      addMarker([25.0826, 121.4710], "蘆洲區", true);
      addMarker([24.9595, 121.2253], "中壢區", true);
      addMarker([24.9427, 121.2169], "平鎮區", true);
      addMarker([24.9741, 121.0795], "新屋區", true);
      addMarker([24.9907, 121.3117], "桃園區", true);
      addMarker([24.9120, 121.1449], "楊梅區", true);
      addMarker([25.0660, 121.2907], "蘆竹區", true);
      addMarker([24.9884, 121.3601], "龜山區", true);
    addMarker([24.1372, 120.6861], "中區", true);
    addMarker([24.1351, 120.6751], "北區", true);
    addMarker([24.1221, 120.6569], "南區", true);
    addMarker([24.0996, 120.7009], "大里區", true);
    addMarker([24.1357, 120.7059], "太平區", true);
    addMarker([24.1839, 120.6169], "西屯區", true);
    addMarker([22.9849, 120.1866], "佳里區", true);
    addMarker([22.9807, 120.2216], "東區", true);
    addMarker([23.0127, 120.2483], "永康區", true);
    addMarker([22.6254, 120.2944], "前金區", true);
    addMarker([22.8535, 120.2553], "路竹區", true);
    addMarker([22.6676, 120.3646], "鳥松區", true);
    addMarker([22.6273, 120.3014], "鳳山區", true);
    addMarker([22.6217, 120.2833], "鹽埕區", true);
    addMarker([24.7028, 121.7447], "壯圍鄉", true);
    addMarker([24.6746, 120.8847], "竹南鎮", true);
    addMarker([24.0717, 120.4259], "大村鄉", true);
    addMarker([23.7072, 120.4325], "虎尾鎮", true);
    break;


    case '台北市':
      addMarker([25.0375, 121.5637], "台北市", false);
      addMarker([25.0626, 121.5219], "中山區", true);
      addMarker([25.0324, 121.5199], "中正區", true);
      addMarker([25.0329, 121.5703], "信義區", true);
      addMarker([25.0685, 121.5905], "內湖區", true);
      addMarker([25.1482, 121.5155], "北投區", true);
      addMarker([25.0911, 121.5243], "士林區", true);
      addMarker([25.0324, 121.5431], "大安區", true);
      addMarker([25.0499, 121.5637], "松山區", true);
      addMarker([25.0375, 121.4997], "萬華區", true);
      break;
    case '新北市':
      addMarker([25.0170, 121.4628], "新北市", false);
      addMarker([24.9281, 121.3768], "三峽區", true);
      addMarker([25.0720, 121.4958], "三重區", true);
      addMarker([24.9910, 121.4654], "中和區", true);
      addMarker([25.0773, 121.4387], "五股區", true);
      addMarker([25.1329, 121.4147], "八里區", true);
      addMarker([24.9660, 121.4515], "土城區", true);
      addMarker([24.9774, 121.5361], "新店區", true);
      addMarker([25.0349, 121.4505], "新莊區", true);
      addMarker([24.9973, 121.4542], "板橋區", true);
      addMarker([25.0087, 121.5123], "永和區", true);
      addMarker([25.0826, 121.4710], "蘆洲區", true);
      break;
    case '桃園市':
      addMarker([24.9936, 121.3010], "桃園市", false);
      addMarker([24.9595, 121.2253], "中壢區", true);
      addMarker([24.9427, 121.2169], "平鎮區", true);
      addMarker([24.9741, 121.0795], "新屋區", true);
      addMarker([24.9907, 121.3117], "桃園區", true);
      addMarker([24.9120, 121.1449], "楊梅區", true);
      addMarker([25.0660, 121.2907], "蘆竹區", true);
      addMarker([24.9884, 121.3601], "龜山區", true);
    break;
  case '台中市':
    addMarker([24.1372, 120.6861], "台中市", false);
    addMarker([24.1372, 120.6861], "中區", true);
    addMarker([24.1351, 120.6751], "北區", true);
    addMarker([24.1221, 120.6569], "南區", true);
    addMarker([24.0996, 120.7009], "大里區", true);
    addMarker([24.1357, 120.7059], "太平區", true);
    addMarker([24.1839, 120.6169], "西屯區", true);
    break;
  case '台南市':
    addMarker([22.9970, 120.2125], "台南市", false);
    addMarker([22.9849, 120.1866], "佳里區", true);
    addMarker([22.9807, 120.2216], "東區", true);
    addMarker([23.0127, 120.2483], "永康區", true);
    break;
  case '高雄市':
    addMarker([22.6273, 120.3014], "高雄市", false);
    addMarker([22.6254, 120.2944], "前金區", true);
    addMarker([22.8535, 120.2553], "路竹區", true);
    addMarker([22.6676, 120.3646], "鳥松區", true);
    addMarker([22.6273, 120.3014], "鳳山區", true);
    addMarker([22.6217, 120.2833], "鹽埕區", true);
    break;
  case '宜蘭縣':
    addMarker([24.6924, 121.7195], "宜蘭縣", false);
    addMarker([24.7028, 121.7447], "壯圍鄉", true);
    break;
  case '苗栗縣':
    addMarker([24.5602, 120.8214], "苗栗縣", false);
    addMarker([24.6746, 120.8847], "竹南鎮", true);
    break;
  case '彰化縣':
    addMarker([24.0805, 120.5354], "彰化縣", false);
    addMarker([24.0717, 120.4259], "大村鄉", true);
    break;
  case '雲林縣':
    addMarker([23.7098, 120.4345], "雲林縣", false);
    addMarker([23.7072, 120.4325], "虎尾鎮", true);
    break;
}

  
}

function addMarker(coordinates, name, isCircle) {
  var marker = L.marker(coordinates).addTo(map);
  marker.bindPopup(name);

  if (isCircle) {
    var circle = L.circle(coordinates, {
      color: 'red',
      fillColor: 'red',
      fillOpacity: 0.5,
      radius: 1700 // Radius in meters
    }).addTo(map);
    circles.push(circle);
  }
  markers.push(marker);
}





function showPicture(place){
  var imageContainer = document.getElementById('image-container');
  var placeImage = document.getElementById('place-image');

  var imageUrl = '';
  switch (place) {
    case '台北市':
      imageUrl = "taipai.png";
      break;
    case '新北市':
      imageUrl = 'k.png';
      break;
    case '桃園市':
      imageUrl = 'h.png';
      break;
      case '台南市':
      imageUrl = 'c.png';
      break;
      case '台中市':
      imageUrl = 'b.png';
      break;
      case '宜蘭縣':
      imageUrl = 'd.png';
      break;
      case '彰化縣':
      imageUrl = 'f.png';
      break;
      case '新竹市':
      imageUrl = 'k.png';
      break;
      case '新竹縣':
      imageUrl = 'e.png';
      break;
      case '雲林縣':
      imageUrl = 'l.png';
      break;
      case '高雄市':
      imageUrl = 'j.png';
      break;
      case '苗栗縣':
      imageUrl = 'g.png';
      break;
    default:
      imageUrl = 'a.png';
      break;
  }


  if (imageUrl !== '') {
    placeImage.src = imageUrl;
    imageContainer.style.display = 'block';
  }
}


