function response(room, msg, sender, isGroupChat, replier, ImageDB) {
  var Data = msg.split(" ");
  if (Data[0] == "!무릉") {
      var u = Utils.getWebText("https://maple.gg/u/"+msg.substr(4));//멮지지에서 캐릭터 검색결과
      var nf = u.split("<h1 class=\"user-summary-floor font-weight-bold\">");//신 무릉
      var time = u.split("<small class=\"user-summary-duration\">");//시간
      var data = org.jsoup.Jsoup.connect("https://maple.gg/u/" + Data[1]).get().select("div.old-dojang").select("b");//div = class의 old-dojang에서 <b> 선택
      var of = data.get(0).text();//<b> 첫번째줄 가져옴
      var dataa = org.jsoup.Jsoup.connect("https://maple.gg/u/" + Data[1]).get().select("div.user-summary-date").select("span");//div = class의 user-summary-date에서 <span>선택
      var date = dataa.get(0).text();//<span> 첫번째줄 가져옴
    replier.reply("[" + Data[1] + "의 무릉기록]" + "\n무릉 최고기록: " + nf[1].split("<")[0] + "\n시간: " + time[1].split("<")[0] + "\n구무릉 최고기록: " + of +"\n[" + date + "]");//출력
    }
}
//제작자 엔테클로
//문의는 언제나 환영 entekorea@naver.com
//복붙해도 상관은 없는데 팔다가 걸리면 손모가지
