import axios from "axios";

export async function getIP() {
  await axios
    .get("https://api.ipify.org?format=json")
    .then((response) => {
      getLocation(response.data.ip);
    })
    .catch((error) => {
      console.log("获取IP失败");
    });
}

async function getLocation(ip) {
  await axios
    // .get(`http://ip-api.com/json/${ip}?lang=zh-CN`)
    .get(`https://ipapi.com/ip_api.php?ip=${ip}`)
    .then((response) => {
      const data = response.data;
      document.getElementById("location").innerHTML = data.region_name;
    })
    .catch((error) => {
      // console.log(error);
      console.log("获取地理位置失败");
    });
}
