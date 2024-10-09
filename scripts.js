function toggleAccordion(element) {
    const panel = element.nextElementSibling;
    element.classList.toggle("active");
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
}

var scrollpos = window.scrollY;
var header = document.getElementById("header");
var navcontent = document.getElementById("nav-content");
var navaction = document.getElementById("navAction");
var brandname = document.getElementById("brandname");
var toToggle = document.querySelectorAll(".toggleColour");

// Select the WhatsApp and Facebook buttons
var whatsappBtn = document.querySelector(".whatsapp-btn"); // Add a class to your WhatsApp button
var facebookBtn = document.querySelector(".facebook-btn"); // Add a class to your Facebook button

document.addEventListener("scroll", function () {
    scrollpos = window.scrollY;
    if (scrollpos > 10) {
        header.classList.add("bg-white");
        navaction.classList.remove("bg-white");
        navaction.classList.add("gradient");
        navaction.classList.remove("text-gray-800");
        navaction.classList.add("text-white");

        // Apply the same transformations to both Facebook and WhatsApp buttons
        whatsappBtn.classList.remove("bg-white");
        whatsappBtn.classList.add("gradient");
        whatsappBtn.classList.remove("text-gray-800");
        whatsappBtn.classList.add("text-white");

        facebookBtn.classList.remove("bg-white");
        facebookBtn.classList.add("gradient");
        facebookBtn.classList.remove("text-gray-800");
        facebookBtn.classList.add("text-white");

        // Toggle colors for links
        for (var i = 0; i < toToggle.length; i++) {
            toToggle[i].classList.add("text-gray-800");
            toToggle[i].classList.remove("text-white");
        }

        header.classList.add("shadow");
        navcontent.classList.remove("bg-gray-100");
        navcontent.classList.add("bg-white");
    } else {
        header.classList.remove("bg-white");
        navaction.classList.remove("gradient");
        navaction.classList.add("bg-white");
        navaction.classList.remove("text-white");
        navaction.classList.add("text-gray-800");

        // Revert transformations for WhatsApp and Facebook buttons
        whatsappBtn.classList.remove("gradient");
        whatsappBtn.classList.add("bg-white");
        whatsappBtn.classList.remove("text-white");
        whatsappBtn.classList.add("text-gray-800");

        facebookBtn.classList.remove("gradient");
        facebookBtn.classList.add("bg-white");
        facebookBtn.classList.remove("text-white");
        facebookBtn.classList.add("text-gray-800");

        // Toggle colors for links
        for (var i = 0; i < toToggle.length; i++) {
            toToggle[i].classList.add("text-white");
            toToggle[i].classList.remove("text-gray-800");
        }

        header.classList.remove("shadow");
        navcontent.classList.remove("bg-white");
        navcontent.classList.add("bg-gray-100");
    }
});

var navMenuDiv = document.getElementById("nav-content");
var navMenu = document.getElementById("nav-toggle");

document.onclick = check;
function check(e) {
    var target = (e && e.target) || (event && event.srcElement);

    //Nav Menu
    if (!checkParent(target, navMenuDiv)) {
        // click NOT on the menu
        if (checkParent(target, navMenu)) {
            // click on the link
            if (navMenuDiv.classList.contains("hidden")) {
                navMenuDiv.classList.remove("hidden");
            } else {
                navMenuDiv.classList.add("hidden");
            }
        } else {
            // click both outside link and outside menu, hide menu
            navMenuDiv.classList.add("hidden");
        }
    }
}

function checkParent(t, elm) {
    while (t.parentNode) {
        if (t == elm) {
            return true;
        }
        t = t.parentNode;
    }
    return false;
}


