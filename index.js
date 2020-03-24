//今日の日付
var today = new Date();
//今月の月末日を今日の日付から計算．
var Getumatu = new Date(today.getFullYear(), today.getMonth() + 1, 0);
var GetumatuDate = Getumatu.getDate();
//曜日変換用配列
dateT = ["日", "月", "火", "水", "木", "金", "土"];
//何周目かの初期値を入れるため，月初に設定
var WeekNum = 0;
//書き込むドキュメントを開く
document.open();
//以下、日付と対応した書き込みを行う
//読めばわかる
for (var i = 1; i <= GetumatuDate; i++) {
  today.setDate(i);
  if (i == 1) {
    if (dateT[today.getDay()] != "日") {
      document.write(
        "#" + (today.getMonth() + 1) + "月" + WeekNum + "W" + "<br>"
      );
      document.write(
        "[[" +
          (today.getMonth() + 1) +
          "/" +
          today.getDate() +
          "(" +
          dateT[today.getDay()] +
          ")]]" +
          "<br>"
      );
    }
  } else {
    if (dateT[today.getDay()] == "日") {
      WeekNum = WeekNum + 1;
      document.write(
        "#" + (today.getMonth() + 1) + "月" + WeekNum + "W" + "<br>"
      );
    }

    document.write(
      "[[" +
        (today.getMonth() + 1) +
        "/" +
        today.getDate() +
        "(" +
        dateT[today.getDay()] +
        ")]]" +
        "<br>"
    );
  }
}
document.close();
