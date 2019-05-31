function myFunction() {
    var dots1 = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("Btn1");

    if (dots1.style.display === "none") {
        dots1.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots1.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function myFunction1() {
    var dots2 = document.getElementById("dots2");
    var moreText2 = document.getElementById("more2");
    var btnText2 = document.getElementById("Btn2");

    if (dots2.style.display === "none") {
        dots2.style.display = "inline";
        btnText2.innerHTML = "Read more";
        moreText2.style.display = "none";
    } else {
        dots2.style.display = "none";
        btnText2.innerHTML = "Read less";
        moreText2.style.display = "inline";
    }
}

function myFunction2() {
    var dots3 = document.getElementById("dots3");
    var moreText3 = document.getElementById("more3");
    var btnText3 = document.getElementById("Btn3");

    if (dots3.style.display === "none") {
        dots3.style.display = "inline";
        btnText3.innerHTML = "Read more";
        moreText3.style.display = "none";
    } else {
        dots3.style.display = "none";
        btnText3.innerHTML = "Read less";
        moreText3.style.display = "inline";
    }
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function Filter() {
    // Declare variables
    var input, filter, ul, li, p, i, txtValue;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    ul = document.getElementById("list");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("p")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


document.addEventListener("keydown", keys);

function keys(e) {
    if (e.which == 13) {
        var item = document.getElementById("txtmsg").value;
        var ul = document.getElementById("Messaging");
        var li = document.createElement("li");
        if (document.getElementById("txtmsg").value == "") {
            li.appendChild(document.createTextNode(item));
        } else {
            li.appendChild(document.createTextNode(item));
            ul.appendChild(li);
            document.getElementById("txtmsg").value = "";
            setTimeout(function () {
                response();
            }, 3000)

        }
    }
}

function response() {
    var ul = document.getElementById("Messaging");
    var li = document.createElement("li");
    var ans = document.createTextNode("You sent a message!");
    li.appendChild(ans);
    li.style.backgroundColor = "#989898";
    li.style.left = "10px";
    document.getElementById("Messaging").appendChild(li);


}

function newmsg() {
    var item = document.getElementById("txtmsg").value;
    var ul = document.getElementById("Messaging");
    var li = document.createElement("li");
    if (document.getElementById("txtmsg").value == "") {
        li.appendChild(document.createTextNode(item));
    } else {
        li.appendChild(document.createTextNode(item));
        ul.appendChild(li);
        document.getElementById("txtmsg").value = "";
        setTimeout(function () {
            response();
        }, 3000)
    }
}
