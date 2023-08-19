const ipApi = "https://api.ipify.org?format=json";

async function api() {
  let res = await fetch(ipApi);
  let data = await res.json();
  document.getElementById(
    "ip"
  ).innerHTML = `<h1>Your Current IP Address is <span>${data.ip}</span></h1>
       <button id="started">Get Started</button> `;

  //   console.log(data.ip);
}

document.getElementById("started").addEventListener("click", function () {
  alert("hii");
});
