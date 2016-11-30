var i = 728;

function timedCount() {
    i = i + 1;
    postMessage(i);
    setTimeout("timedCount()",300);
}

timedCount();