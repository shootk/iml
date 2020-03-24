//今日のデータ
var today = new Date();
//今月の月末日を取得する．
var Getumatu = new Date(today.getFullYear(), today.getMonth() + 1, 0);
var GetumatuDate = Getumatu.getDate();
//0~6の曜日変換用
dateT = ["日", "月", "火", "水", "木", "金", "土"];
//何周目かの初期値を入れるため，月初に設定
var WeekNum = 0;

//この関数が実行されるらしい．
function setup() {
    for (var i = 1; i <= GetumatuDate; i++) {
        today.setDate(i)
        if (i == 1) {
            if (dateT[today.getDay()] != "月") {
                document.write("#" + (today.getMonth() + 1) + "月" + WeekNum + "W" + "<br>")
                document.write("[[" + (today.getMonth() + 1) + "/" + today.getDate() + "(" + dateT[today.getDay()] + ")]]" + "<br>")
            }
        } else {

            if (dateT[today.getDay()] == "月") {
                WeekNum = WeekNum + 1;
                document.write("#" + (today.getMonth() + 1) + "月" + WeekNum + "W" + "<br>")
            }

            document.write("[[" + (today.getMonth() + 1) + "/" + today.getDate() + "(" + dateT[today.getDay()] + ")]]" + "<br>")
        } //else
    } //for
}