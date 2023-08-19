const ipApi = "https://api.ipify.org?format=json";
var pinCode;

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

  pinCode = resData.postal;
  search();
}

async function search() {
  let cont = document.getElementById("offices-container");
  let value = document.getElementById("search").value;
  let pin = await fetch(
    `https://api.postalpincode.in/pincode/${!value ? pinCode : value}`
  );
  let pinData = await pin.json();
  if (pinData[0].Status === "Error") {
  } else {
    cont.innerHTML = null;
    for (let i = 0; i < pinData[0].PostOffice.length; i++) {
      cont.innerHTML += `<div class="card">
          <p>Name: <span>${pinData[0].PostOffice[i].Name}</span></p>
          <p>Branch type: <span>${pinData[0].PostOffice[i].BranchType}</span></p>
          <p>Delivery Status: <span>${pinData[0].PostOffice[i].DeliveryStatus}</span></p>
          <p>District: <span>${pinData[0].PostOffice[i].District}</span></p>
          <p>Division: <span>${pinData[0].PostOffice[i].Division}</span></p>
        </div>`;
    }
  }
}
