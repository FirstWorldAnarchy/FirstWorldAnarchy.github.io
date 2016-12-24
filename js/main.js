let nameStr = 'Tarun Boddupalli';
let profStr = 'Student Developer';

$(document).ready(function() {
    for (var i = 0; i < nameStr.length; i++) {
        setTimeout(function() {
            $('#name').text(nameStr.substr(0, $('#name').text().length + 1));
        }, 200 + i * 75);
    }
});
