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
  document.getElementById("timeZone").innerText = resData.timezone;
  document.getElementById("date").innerText = new Date().toLocaleString(
    "en-US",
    { timeZone: resData.timeZone }
  );
  document.getElementById("pin").innerText = resData.postal;
  let pin = await fetch(
    `https://api.postalpincode.in/pincode/${resData.postal}`
  );
  let pinData = await pin.json();
  document.getElementById("msg").innerText = pinData[0].Message;
  console.log(pinData[0].Message);
}

async function search() {
  let value = document.getElementById("search").value;
  let pin = await fetch(
    `https://api.postalpincode.in/pincode/${resData.postal}`
  );
  let pinData = await pin.json();
}
