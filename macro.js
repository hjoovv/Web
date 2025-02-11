var waittime = 500;
var loop = 2;
var count = 0;
var paramarr = ['COSE222', 'COSE221', 'COSE389', 'COSE455'];
var numarr = ["00", "01", "00", "00"];
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
