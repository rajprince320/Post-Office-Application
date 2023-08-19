const ipApi = "https://api.ipify.org?format=json";

async function api() {
  let res = await fetch(ipApi);
  let data = await res.json();
  document.getElementById("ip").innerHTML = `<span>${data.ip}</span>
        `;

  //   console.log(data.ip);
}

document.getElementById("started").addEventListener("click", function () {
  alert("hii");
});
