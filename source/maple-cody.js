function response(room, msg, sender, isGroupChat, replier, ImageDB) {
try {
        if(msg.indexOf("!코디 ") == 0)  {//메세지가 코디일때
        var u = Utils.getWebText("https://maple.gg/u/"+msg.substr(4));
        var c = u.split("<span class=\"character-coord__item-name\">");//멮지지에서 가져온거
        replier.reply("["+msg.substr(4) + "님의 코디 분석 결과입니다.]\n모자: " + c[1].split("<")[0]+ "\n헤어: " + c[2].split("<")[0] +"\n성형: " + c[3].split("<")[0] +"\n상의: " + c[4].split("<")[0] +"\n하의: " + c[5].split("<")[0] +"\n신발: " + c[6].split("<")[0] +"\n무기: " + c[7].split("<")[0]);
        }
      }    catch(e) {//결과값을 찾을수 없으면
      replier.reply("정보가 없습니다.");
  }
}
//제작자 엔테클로
//문의는 언제나 환영 entekorea@naver.com
//복붙해도 상관은 없는데 팔다가 걸리면 손모가지
