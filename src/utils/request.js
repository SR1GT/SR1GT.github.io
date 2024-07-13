import axios from "axios";

export async function getIP() {
  await axios
    .get("https://api.ipify.org?format=json")
    .then((response) => {
      getLocation(response.data.ip);
    })
    .catch((error) => {
      console.log("获取IP失败: ", error);
    });
}

async function getLocation(ip) {
  await axios
    .get(`http://ip-api.com/json/${ip}?lang=zh-CN`)
    .then((response) => {
      const data = response.data;
      document.getElementById("location").textContent = data.regionName;
    })
    .catch((error) => {
      console.log("获取地理位置失败: ", error);
    });
}
