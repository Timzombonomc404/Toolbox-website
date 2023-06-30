// Website URL and icon data
const websiteData = [
  { name: "Baidu", url: "https://www.baidu.com" },
  { name: "Bing", url: "https://www.bing.com" },
  { name: "KuGou Music", url: "https://www.kugou.com" },
  { name: "Bilibili", url: "https://www.bilibili.com" },
  { name: "Sogou", url: "https://www.sogou.com" },
  { name: "Sohu", url: "https://www.sohu.com" },
  { name: "TikTok", url: "https://www.douyin.com" },
  { name: "Youtube", url: "https://www.youtube.com" },
  { name: "Gmail", url: "https://mail.google.com" },
  { name: "Outlook", url: "https://outlook.live.com" },
  { name: "NetEase Mail", url: "https://mail.163.com" },
  { name: "Weibo", url: "https://www.weibo.com" },
  { name: "Sina Mail", url: "https://mail.sina.com.cn" },
  { name: "Tutanota", url: "https://www.tutanota.com" },
  { name: "Netflix", url: "https://www.netflix.com" },
  { name: "Hulu", url: "https://www.hulu.com" },
  { name: "Amazon Prime Video", url: "https://www.amazon.com" },
  { name: "Twitter", url: "https://www.twitter.com" },
  { name: "Discord", url: "https://www.discord.com" },
  { name: "Facebook", url: "https://www.facebook.com" },
  { name: "Weibo", url: "https://www.weibo.com" },
  { name: "Tsinghua University", url: "https://www.tsinghua.edu.cn" },
  { name: "Naixue's Tea", url: "https://www.nxdttea.com" },
  { name: "Wikipedia", url: "https://www.wikiwand.com" },
  { name: "Baidu Baike", url: "https://baike.baidu.com" },
  { name: "Sogou Baike", url: "https://baike.sogou.com" },
  { name: "China National Museum", url: "https://www.chnmuseum.cn" },
  { name: "China Government", url: "https://www.gov.cn" },
  { name: "U.S. Embassy China", url: "https://www.usembassy-china.org.cn" },
  { name: "Gaokao", url: "https://gaokao.chsi.com.cn" },
  { name: "Harbin Institute of Technology", url: "https://www.hit.edu.cn" },
  { name: "Tsinghua University", url: "https://www.tsinghua.edu.cn" },
  { name: "Naixue's Tea", url: "https://www.naixuecha.com" },
  { name: "Xi'an Jiaotong University", url: "https://www.xjtu.edu.cn" },
  { name: "Harbin Medical University", url: "https://www.hmudc.edu.cn" },
  { name: "Heilongjiang University", url: "https://www.hlju.edu.cn" },
  { name: "Tencent Video", url: "https://v.qq.com" },
  { name: "iQiyi", url: "https://www.iqiyi.com" },
  { name: "Xigua Video", url: "https://www.ixigua.com" },
  { name: "Baidu Video", url: "https://v.baidu.com" },
  { name: "360", url: "https://www.360.com" },
  { name: "360 Baike", url: "https://baike.360.com" },
  { name: "HuoRong Security", url: "https://www.huorong.cn" },
  { name: "OpenAI", url: "https://openai.com" },
  { name: "Chinese Embassy", url: "https://www.fmprc.gov.cn" },
  { name: "Russian Embassy", url: "https://russia.mid.ru" },
  { name: "Air China", url: "https://www.airchina.cn" },
  { name: "China Education Ministry", url: "https://www.eol.cn" },
  { name: "Qingdao University", url: "https://www.qdu.edu.cn" },
  { name: "Xi'an Jiaotong University", url: "https://www.xjtu.edu.cn" },
  { name: "GitHub", url: "https://https://www.github.com" },
  { name: "Gotalkto AI", url: "https://www.gotalkto.com" },
  { name: "Web Pages Text Translated by Tencent AI", url: "https://www.web.cn" },
  { name: "Tencent", url: "https://www.tencent.com" },
  { name: "Apple", url: "https://www.apple.com" },
  { name: "Microsoft", url: "https://www.microsoft.com" },
  { name: "PayPal", url: "https://www.paypal.com" },
  { name: "VISA", url: "https://www.visa.com" },
  { name: "NetEase Cloud Music", url: "https://music.163.com" },
  // Add more website data...
];

// Get website list container
const websiteList = document.querySelector("#website-list");

// Create website list
function createWebsiteList() {
  for (let i = 0; i < websiteData.length; i++) {
    const website = websiteData[i];

    // Create website item
    const listItem = document.createElement("li");
    listItem.classList.add("website-item");

    // Create website link
    const link = document.createElement("a");
    link.href = website.url;
    link.target = "_blank";

    // Create website icon
    const icon = document.createElement("img");
    icon.src = website.icon;
    icon.alt = website.name;
    link.appendChild(icon);

    // Create website name
    const name = document.createElement("span");
    name.textContent = website.name;
    link.appendChild(name);

    listItem.appendChild(link);
    websiteList.appendChild(listItem);
  }
}

// Show confirmation popup before redirection
function showConfirmationPopup(url) {
  const popup = document.createElement("div");
  popup.classList.add("popup");

  // Create popup message
  const message = document.createElement("p");
  message.textContent =
    "We are not sure about the security and accessibility of this website. By continuing, you are solely responsible for any consequences. Do you want to proceed?";
  popup.appendChild(message);

  // Create redirection button
  const confirmButton = document.createElement("button");
  confirmButton.textContent = "Proceed";
  confirmButton.addEventListener("click", function () {
    window.location.href = url;
  });
  popup.appendChild(confirmButton);

  document.body.appendChild(popup);
}

// Listen for website click event
websiteList.addEventListener("click", function (event) {
  event.preventDefault();
  const target = event.target;

  if (target.tagName === "A") {
    const url = target.href;
    showConfirmationPopup(url);
  }
});

// Back to home button
const backButton = document.querySelector("#back-button");

// Show or hide back to home button
function toggleBackButton() {
  if (window.location.pathname !== "/") {
    backButton.style.display = "block";
  } else {
    backButton.style.display = "none";
  }
}

// Listen for page change event
window.addEventListener("popstate", toggleBackButton);

// Go back to home page
backButton.addEventListener("click", function () {
  window.history.back();
});

// Initialize website list and back button state
createWebsiteList();
toggleBackButton();
