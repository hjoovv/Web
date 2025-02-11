var waittime = 500;
var loop = 2;
var count = 0;
var paramarr = ['GESO101', 'GEST045', 'IFLS012', 'GELI002'];
var numarr = ["00", "00", "D9", "7D"];
NetFunnel.TS_BYPASS = true;
NetFunnel.TS_MAX_NWAIT_COUNT = 0;

function lectureAdd() {
    if (!loop) {
        return;
    } else if (count == paramarr.length) {
        count = 0;
        loop--;
    }

    console.log('lectureAdd');
    document.getElementById("pCourNo").value = paramarr[count];
    document.getElementById("pBanNo").value = numarr[count];
    document.getElementById('btnFast').click();
    count += 1;
}

window.addEventListener('DOMNodeInserted', function (e) {
    if (e.target.nodeName == 'BUTTON') {
        e.target.click();
        setTimeout(lectureAdd, waittime);
    }
});
lectureAdd();
