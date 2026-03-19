let spTxtTitle = new SplitText("nav .logo h1", {
    type: 'chars, words, lines',
    mask: 'chars',
    smartWrap: true
});
let spTxtTitleProject = new SplitText(".primary h4, .secondary h4", {
    type: 'chars, words, lines',
    mask: 'chars',
    smartWrap: true
});
let tl = gsap.timeline();

$(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
})


$("body").css({
    overflow:"hidden"
})

//logo
tl.from("nav .logo img", {
    y: 100,
    opacity: 0,
    duration: .6,
    delay: .5,
})
tl.to("nav .logo img", {
    y: 0,
    opacity: 1,
})
if ($("body").width() > 750) {
    tl.to("nav .logo img", {
        scale: 1.3,
        delay: 1,
    })
}

//title
gsap.fromTo(spTxtTitle.chars, {
        y: 100,
        opacity: 0,
        rotation: "random(-360, 360)"
}, {
        y: 0,
        opacity: 1,
        stagger: {
            amount: 1,
            from: 'random'
        },
        rotation: 0,
        delay: 1
    }
);

//project title
gsap.fromTo(spTxtTitleProject.chars, {
    y: 100,
    opacity: 0,
    rotation: "random(-360, 360)"
}, {
    y: 0,
    opacity: 1,
    stagger: {
        amount: .5,
        from: 'start'
    },
    rotation: 0,
    delay: 3.2
}
);

//ul
gsap.fromTo("ul#pills-tab", {
    y: 10,
    opacity: 0,
}, {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 3
}
);

//project sections
gsap.fromTo(".primary, .secondary", {
    y: 10,
    opacity: 0,
}, {
    y: 0,
    opacity: 1,
    delay: 3.2
}
);

setTimeout(function () {
    $("body").css({
        overflow: ""
    })
},3000)
