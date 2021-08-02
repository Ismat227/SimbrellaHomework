const nav = document.querySelector('#navbar');
// const topOfNavbar=nav.element.offsetTop;
function fixedNavbar() {
    if (window.scrollY > 100) {
        nav.classList.add('fixed-nav');
    } else {
        nav.classList.remove('fixed-nav');
    }
}
window.addEventListener('scroll', fixedNavbar);



const ids = [
    {
        id: "_what-we-do",

    },
    {
        id: "_statistics",
    },
    {
        id: "_work",
    },
    {
        id: "_latest",
    },
    {
        id: "_simbrella-footer",
    }
]
let currentId;
currentId = ids[0].id;
window.addEventListener('scroll', () => {

    const { scrollY } = window;

    ids.forEach((idd) => {
        const element = document.getElementById(idd.id);
        if (element !== null) {

            const { offsetTop, offsetHeight } = element;
            if (
                offsetTop - (offsetHeight / 2) <= scrollY && (offsetTop + offsetHeight / 2) > scrollY) {

                const prevAnchor = document.querySelector(`a[data-id=${currentId}]`);
                prevAnchor.classList.remove('active');

                const anchor = document.querySelector(`a[data-id=${idd.id}]`);
                anchor.classList.add('active');
                currentId = idd.id;
            } else {
                console.log("daxil olmadi ")
            }
        }

    })
})
// function mouseOver() {
//     document.getElementById("").style.color = "#FF931E";
// }

// function mouseOut() {
//     document.getElementById("").style.color = "#999999";
// }

function Baku() {
    var html3 = "baku@simbrella.com";
    var html = "Main Operations Office";
    var html2 = "Jalil Mammadguluzadeh st. 102 A, City Point Business Centre, AZ1022, Baku, Azerbaijan";
    document.getElementsByClassName("baku")[0].innerHTML = html;
    document.getElementsByClassName("first-p")[0].innerHTML = html2;
    document.getElementsByClassName("second-a")[0].innerHTML = html3
    document.querySelector("#amsterdam").style.color = "#999999";
    document.querySelector("#singapore").style.color = "#999999";
    document.querySelector("#baku").style.color = "#FF931E";
    // console.log("salam")
    // document.getElementById("baku").onmouseover = function () { mouseOver() };
    // document.getElementById("baku").onmouseout = function () { mouseOut() };



}
function Singapore() {
    var html3 = "singapore@simbrella.com";
    var html = "APAC Region Office";
    var html2 = "163 Tras Street, #07-02, Lian Huat Building, 079024, Singapore";
    document.getElementsByClassName("baku")[0].innerHTML = html;
    document.getElementsByClassName("first-p")[0].innerHTML = html2;
    document.getElementsByClassName("second-a")[0].innerHTML = html3
    document.querySelector("#amsterdam").style.color = "#999999";
    document.querySelector("#singapore").style.color = "#FF931E";
    document.querySelector("#baku").style.color = "#999999";
    // document.getElementById("singapore").onmouseover = function () { mouseOver() };
    // document.getElementById("singapore").onmouseout = function () { mouseOut() };
}
function Amsterdam() {
    var html3 = "amsterdam@simbrella.com";
    var html = "Headquarters";
    var html2 = "Teleportboulevard 130, Scalehub, Unit number 1.08, 1043 EJ Amsterdam, Netherlands";
    document.getElementsByClassName("baku")[0].innerHTML = html;
    document.getElementsByClassName("first-p")[0].innerHTML = html2;
    document.getElementsByClassName("second-a")[0].innerHTML = html3
    document.querySelector("#amsterdam").style.color = "#FF931E";
    document.querySelector("#singapore").style.color = "#999999";
    document.querySelector("#baku").style.color = "#999999";
    // document.getElementById("amsterdam").onmouseover = function () { mouseOver() };
    // document.getElementById("amsterdam").onmouseout = function () { mouseOut() };

}
