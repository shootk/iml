//今日の日付
var today = new Date();
//今月の月末日を今日の日付から計算．
var endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
var endOfMonthDate = endOfMonth.getDate();
//曜日変換用配列
dayTable = ["日", "月", "火", "水", "木", "金", "土"];
//何周目かの初期値を入れるため，月初に設定
var weekNum = 0;
//書き込むドキュメントを開く
document.open();
//以下、日付と対応した書き込みを行う
//ループの中で毎回if文使うのはナンセンスな気がするので、月初めに確実に行う処理はループの外で記述

today.setDate(1);
if (dayTable[today.getDay()] == "日") {
    weekNum += 1;}
document.write("#" + (today.getMonth() + 1) + "月" + weekNum + "W" + "<br>");
document.write(
    "[[" +
    (today.getMonth() + 1) +
    "/" +
    today.getDate() +
    "(" +
    dayTable[today.getDay()] +
    ")]]" +
    "<br>"
);

for (var i = 2; i <= endOfMonthDate; i++) {
    today.setDate(i);
    if (dayTable[today.getDay()] == "日") {
        weekNum += 1;
        document.write(
            "#" + (today.getMonth() + 1) + "月" + weekNum + "W" + "<br>"
        );
    }

    document.write(
        "[[" +
        (today.getMonth() + 1) +
        "/" +
        today.getDate() +
        "(" +
        dayTable[today.getDay()] +
        ")]]" +
        "<br>"
    );
}
document.close();