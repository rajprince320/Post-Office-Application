const ipApi = "https://api.ipify.org?format=json";

async function api() {
  let res = await fetch(ipApi);
  let data = await res.json();
  document.getElementById("ip").innerHTML = `<span>${data.ip}</span>
        `;
}

document.getElementById("started").addEventListener("click", function () {
  window.location = "./data.html";
});
