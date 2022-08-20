var words = ['Hello! I`m Dmitriy, Frontend developer', 'Привет! Меня зовут Дмитрий, я - Фронтенд разработчик'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 100,
    speed = 60;
var wordflick = function () {
    setInterval(function () {
        if (forwards) {
            if (offset >= words[i].length) {
                ++skip_count;
                if (skip_count === skip_delay) {
                    forwards = false;
                    skip_count = 0;
                }
            }
        }
        else {
            if (offset === 0) {
                forwards = true;
                i++;
                offset = 0;
                if (i >= len) {
                    i = 0;
                }
            }
        }
        part = words[i].substr(0, offset);
        if (skip_count === 0) {
            if (forwards) {
                offset++;
            }
            else {
                offset--;
            }
        }
        document.querySelector('.word-animated').textContent = part;
    },speed);
};

document.addEventListener('DOMContentLoaded', () => {
    wordflick();
});