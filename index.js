<<<<<<< HEAD
//今日の日付
var today = new Date();
//今月の月末日を今日の日付から計算．
var endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
var endOfMonthDate = endOfMonth.getDate();
//曜日変換用配列
dayTable = ["月", "火", "水", "木", "金", "土", "日"];
//何周目かの初期値を入れるため，月初に設定
var weekNum = 0;
//書き込むドキュメントを開く
document.open();
//以下、日付と対応した書き込みを行う
//ループの中で毎回if文使うのはナンセンスな気がするので、月初めに確実に行う処理はループの外で記述

today.setDate(1);
if (dateTable[today.getDay()] == "月") {
  weekNum = weekNum + 1;
}
document.write("#" + (today.getMonth() + 1) + "月" + weekNum + "W" + "<br>");
document.write(
  "[[" +
    "#" + 
    today.getFullYear() +
    "/" +
    (today.getMonth() + 1) +
    "/" +
    today.getDate() +
    "(" +
    dateTable[today.getDay()] +
    ")]]" +
    "<br>"
);
for (var i = 2; i <= endOfMonthDate; i++) {
  today.setDate(i);
  if (dateTable[today.getDay()] == "日") {
    weekNum = weekNum + 1;
    document.write(
      "#" + (today.getMonth() + 1) + "月" + weekNum + "W" + "<br>"
    );
=======
function loadScript(url) {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = url
    script.onload = resolve
    document.body.appendChild(script)
  })
}

function loadStyle(url) {
  return new Promise((resolve) => {
    const script = document.createElement('link')
    script.rel = "stylesheet"
    script.type = "text/css"
    script.href = url
    script.onload = resolve
    document.body.appendChild(script)
  })
}

async function loadAllScripts(urls) {
  for (let url of urls) {
    await loadScript(url)
  }
}

async function loadAllStyles(urls) {
  for (let url of urls) {
    await loadStyle(url)
  }
}

async function loadAllScripts2(codes) {
  for (let code of codes) {
    console.log(`https://Scrapbox.io/api/code/${project}/${code}`)
    await loadScript(`https://Scrapbox.io/api/code/${project}/${code}`)
>>>>>>> 89e5db1afd9de2647de6fba811c3c0c770b66283
  }
}

async function loadAllStyles2(styles) {
  for (let style of styles) {
    await loadStyle(`https://Scrapbox.io/api/code/${project}/${style}`)
  }
}
$(function () {
  const args = {}
  document.location.search.substring(1).split('&').forEach((s) => {
    let [name, value] = s.split('=')
    args[name] = decodeURIComponent(value)
  })
  const codelist = args['code']
  const csslist = args['css']
  const p = args['p']
  const clist = args['c']
  const slist = args['s']

  console.log('codelist', codelist)

  if (codelist) {
    let urls = codelist.split(/,/)
    loadAllScripts(urls)
  }
  if (csslist) {
    let urls = csslist.split(/,/)
    loadAllStyles(urls)
  }
  if (p) {
    project = p
  }
  if (p && clist) {
    let codes = clist.split(/,/)
    loadAllScripts2(codes)
  }
  if (p && slist) {
    let styles = slist.split(/,/)
    loadAllStyles2(styles)
  }
})