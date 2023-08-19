const ipApi = "https://api.ipify.org?format=json";

async function api() {
  let res = await fetch(ipApi);
  let data = await res.json();
  document.getElementById("ip").innerHTML = `<span>${data.ip}</span>
        `;
}

function reDirect() {
  window.location = "./data.html";
}

async function api2() {
  let res = await fetch(ipApi);
  let data = await res.json();
  let dat = await fetch(`https://ipinfo.io/${data.ip}?token=ed21945aa0f605`);
  let resData = await dat.json();

  console.log(resData);

  document.getElementById("ip-address").innerText = resData.ip;
  document.getElementById("lat").innerText = resData.loc.slice(0, 7);
  document.getElementById("long").innerText = resData.loc.slice(8, 15);
  document.getElementById("city").innerText = resData.city;
  document.getElementById("region").innerText = resData.region;
  document.getElementById("Organization").innerText = resData.org;
  document.getElementById("hostname").innerText = resData.hostname;
  document.getElementById(
    "map"
  ).src = `https://maps.google.com/maps?q=${resData.loc}&z=15&output=embed`;
}
