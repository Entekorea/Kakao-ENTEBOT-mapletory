    function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadld) {
      var Data = msg.split(" ");
      if (Data[0] == "!유니온")){
          var data = org.jsoup.Jsoup.connect("https://maple.gg/u/" + nick[1]).get();
          var grade = data.select("section.box.user-summary-box").text().split("유니온 ")[1].split("Lv.")[0];
          var level = data.select("div.user-summary-box-content.text-center").select("span").get(0).text();
          var power = data.select("div.d-block.mb-1").select("span").text().split("전투력 ")[1].split(" Lv.")[0];
          var coin = power.replace(/,/gi,"");
          coin = Math.floor(coin *0.000000864);

    replier.reply('[' + nick[1] + "]\n" + grade + "(" + level + ")\n전투력: " + power + "\n일일코인 수급량: " + coin);
}
//제작자 엔테클로(entekorea, EnteLabs)
//문의는 언제나 환영입니다. entekorea@naver.com
//복붙해도 무방, but 팔다가 걸리면 손모가지
}
