    function response(room, msg, sender, isGroupChat, replier, ImageDB) {
      var Data = msg.split(" ");
      if (Data[0] == "!메이플") {//!메이플 입력시
          var data = org.jsoup.Jsoup.connect("https://maplestory.nexon.com/Ranking/World/Total?c=" + Data[1]).get().select("tr.search_com_chk");
          var job = data.select("dd").get(0).text();
          var lv = data.select("td").get(2).text().replace("Lv.", "");
          var pop = data.select("td").get(4).text();
          var exp = data.select("td").get(3).text();
          var gu = data.select("td").get(5).text();
          var servername = org.jsoup.Jsoup.connect("https://maplestory.nexon.com"+ Data[1].select("dt").select("a").attr("href")).get().select("dd").get(2).text();

        replier.reply("[" + Data[1] +"] 님의 정보"+ "\n직업: " + job[2].split("<")[0] + "\n레벨: " + lv + "\n경험치: " + exp + "\n인기도: " + pop + "\n길드: " + gu);
        }
    //제작자 엔테클로(entekorea, EnteLabs)
    //문의는 언제나 환영입니다. entekorea@naver.com
    //복붙해도 무방, but 팔다가 걸리면 손모가지
    }
