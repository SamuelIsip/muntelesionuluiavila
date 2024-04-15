function setScroll() {
    window.sr=ScrollReveal({duration:1500});
    sr.reveal("#title");
    sr.reveal("#verset_zilnic");
    sr.reveal("#despre-noi");
    sr.reveal(".despre_noi",{delay:375,duration:700});
    sr.reveal(".slujitori",{delay:375,duration:700});
    sr.reveal("#program");
    sr.reveal("#evenimente");
    sr.reveal("#contact");
    sr.reveal("#salutul");
}

setScroll();