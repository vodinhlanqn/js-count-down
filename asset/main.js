var day = document.getElementById('day');
var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');
var body = document.getElementById('main');
var selectTime = document.getElementById('selectTime');

var titleDate = "";

var countDownDate = new Date().getTime();
var DateNewYear = new Date("Jan 01, 2023 00:00:00").getTime();
var DateChristmas = new Date("Dec 24, 2022 00:00:00").getTime();
var DateMidAutumn = new Date("Sep 10, 2022 00:00:00").getTime();
var DateBirthday = new Date("Oct 10, 2022 00:00:00").getTime();
var DateValentine = new Date("Feb 14, 2023 00:00:00").getTime();

function handleChange() {
    var value = selectTime.value;
    if (value === "NewYear") {
        countDownDate = DateNewYear;
        titleDate = "HAPPY NEW YEAR 2023";
        body.style.backgroundImage = "url('../asset/img/new-year.jpg')";
    } else if
        (value === "Christmas") {
        countDownDate = DateChristmas;
        titleDate = "MERRY CHRISTMAS";
        body.style.backgroundImage = "url('../asset/img/christmas.jpg')";
    }
    else if (value === "Autumn") {
        countDownDate = DateMidAutumn;
        titleDate = "TẾT TRUNG THU ";
        body.style.backgroundImage = "url('../asset/img/trung-thu.jpg')";
    } else if (value === "Birthday") {
        countDownDate = DateBirthday;
        titleDate = "CHÚC MỪNG SINH NHẬT";
        body.style.backgroundImage = "url('../asset/img/birthday.jpg')";
    } else if (value === "Valentine") {
        countDownDate = DateValentine;
        titleDate = "NGÀY LỄ TÌNH NHÂN 14/2";
        body.style.backgroundImage = "url('../asset/img/valentine.jpg')";
    } else {

        titleDate = "Please Choose Event";
    }

    countDown()
}

function countDown() {
    var x = setInterval(function () {
        // Lấy ngày hiện tại
        var nowDate = new Date().getTime();

        // Khoảng thời gian 
        var distance = countDownDate - nowDate;

        if (distance < 0) {
            document.getElementById('timer-text').innerHTML = "Sự kiện đã qua";
            day.innerHTML = "---";
            hour.innerHTML = "---";
            minute.innerHTML = "---";
            second.innerHTML = "---";
        } else {
            document.getElementById('timer-text').innerHTML = titleDate;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            day.innerHTML = days + " ngày";
            hour.innerHTML = hours + " giờ";
            minute.innerHTML = minutes + " phút";
            second.innerHTML = seconds + " giây";

            // Reset

            if (distance < 0) {
                clearInterval(x);
                document.getElementById('timer-text').innerHTML = titleDate;
                day.innerHTML = "---";
                hour.innerHTML = "---";
                minute.innerHTML = "---";
                second.innerHTML = "---";
            }
        }
    }

    );
}