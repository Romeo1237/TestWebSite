let onedaybtn = document.querySelector(".first-red-day");
let twodaybtn = document.querySelector(".second-red-day");
let textCont = document.querySelector(".event-text");
let textoglav = document.querySelector(".event-name");
let redDay = document.querySelector(".calendar-item");

function eventone(){
    textoglav.textContent = "ДЕБАТЫ КАНДИДАТОВ НА ПОСТ ПРЕЗИДЕНТА ШКОЛЫ";
    textCont.textContent = "На пост президента нашей школы выдвинулось 5 кандидатов: Николаев Артемий, Карпов Денис, Соколов Никита, Виолетта (мы не нашли её фамилию) и Севрюк Михаил. У каждого составлена определенная предвыборная программа, каждая из которых достойна внимания. Кандидаты поочередно будут презентовать себя, а затем отвечать на вопросы из зала. Это вся имеющаяся у нашей редакции информация на сегодняшний день о дебатах.";
    // redDay.style.backgroundColor = "red";
}
onedaybtn.addEventListener("click", eventone);

function eventtwo(){
    textoglav.textContent = "ЕДИНЫЙ ДЕНЬ ГОЛОСОВАНИЯ ЗА ПРЕЗИДЕНТА НАШЕЙ ШКОЛЫ";
    textCont.textContent = "Именно в этот день пройдут выборы президента нашей школы. Каждый ученик с 5 по 11 класс имеет право поставить галочку в бюллетене и повлиять тем самым на исход голосования. Каждый голос имеет значение. Приходите 16 октября на выборы президента и голосуйте за одного из пяти понравившихся кандидатов!";
}
twodaybtn.addEventListener("click", eventtwo);