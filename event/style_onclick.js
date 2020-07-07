function xoa() {
    document.getElementById('tf1').value = null
    document.getElementById('tf2').value = null
    document.getElementById('kq').value = null
}

function giai() {
    var a = document.getElementById('tf1').value;
    var b = document.getElementById('tf2').value;

    if (document.getElementById("tru").checked) {

        document.getElementById('kq').value = (Number(a) - Number(b));
    } else if (document.getElementById("nhan").checked) {

        document.getElementById('kq').value = (Number(a) * Number(b));
    } else if (document.getElementById("chia").checked) {

        document.getElementById('kq').value = (Number(a) / Number(b));
    } else {
        document.getElementById('kq').value = (Number(a) + Number(b));
    }
}

function thoat() {
    if (confirm("thoat trang web!!!")) {
        window.close();
    }

}