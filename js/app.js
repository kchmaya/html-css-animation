const header = document.getElementById('header');

const banner = document.getElementById('bannerBg');
const bannerAddition = document.getElementById('bannerBgAddition');
const h1Line = document.querySelectorAll('.line span');
const contentP = document.querySelector('.content-inner p');
const contentBtn = document.querySelector('.content-inner .btn-row');

const mainImage = document.querySelector('.image-inner img');
const featureBannerYellow = document.getElementById('featureBannerYellow');
const dotsWhite = document.getElementById('decorationDotsWhite');
const dotsGreen = document.getElementById('decorationDotsGreen');
const dotsWhite2 = document.getElementById('decorationDotsWhite2');
const dotsYellow = document.getElementById('decorationDotsYellow');
const dotsBlue = document.getElementById('decorationDotsBlue');

const orangeCircle = document.getElementById('decorationOrangeCircle');
const yellowPlus = document.getElementById('decorationYellowPlus');
const yellowCircle = document.getElementById('decorationYellowCircle');
const blueZigzag = document.getElementById('decorationBlueZigzag');
const dOrangeTriangle = document.getElementById('decorationDorangeTriangle');
const orangeSquare = document.getElementById('decorationOrangeSquare');
const orangeTriangle = document.getElementById('decorationOrangeTriangle');
const blueSquare = document.getElementById('decorationBlueSquare');
const orangeZigzag = document.getElementById('decorationOrangeZigzag');
const yellowTriangle = document.getElementById('decorationYellowTriangle');
const orangeCross = document.getElementById('decorationOrangeCross');

const decorations = [featureBannerYellow, blueSquare, orangeCircle, yellowTriangle, orangeCross, orangeZigzag,
    orangeTriangle, orangeSquare, dOrangeTriangle, blueZigzag, yellowCircle, yellowPlus, dotsBlue, dotsYellow,
    dotsWhite2, dotsGreen, dotsWhite
]

const featuresContentTitle = document.querySelector('.features-content h3');
const featuresContentText = document.querySelector('.features-content p');
const featuresContentBtn = document.getElementById('featureBtn');
const featurePattern = document.querySelector('.features-bg img');
const featureCircleBg = document.getElementById('featureCircleBg');
const featureDotsBg = document.getElementById('featureDotsBg');

const footerCircleBg = document.getElementById('footerCircleBg');
const footerDotsBg = document.getElementById('footerDotsBg');
const footerMap = document.querySelector('.footer-map');
const footerTitle = document.querySelector('.footer-list h3');
const footerBtn = document.querySelector('.footer-list .btn-row');


const bannerTL = gsap.timeline();

bannerTL.from([bannerAddition, banner], {
        duration: 1.2,
        width: 0,
        skewX: 4,
        easy: 'power3.inOut',
        stagger: {
            amount: 0.2
        }
    })
    .from(header, {
        delay: -0.2,
        y: 16,
        opacity: 0,
        duration: .8,
        ease: 'power3.inOut'
    })
    .from(h1Line, {
        dalay: -0.4,
        y: 110,
        duration: 0.8,
        ease: 'power3.out',
        stagger: {
            amount: 0.2
        }
    })
    .from([contentP, contentBtn], {
        delay: -0.6,
        y: -40,
        duration: 0.8,
        opacity: 0,
        ease: "power3.out",
        stagger: {
            amount: 0.2
        }
    });

gsap.from(mainImage, {
    delay: 2.2,
    x: -100,
    skewX: 2,
    duration: 0.8,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from(decorations, {
    delay: 2.4,
    x: -60,
    skewX: 6,
    duration: 0.8,
    opacity: 0,
    ease: "power3.out",
    stagger: {
        amount: 0.2
    }
});

const featuresTl = gsap.timeline();

featuresTl

    .from(featurePattern, {
        delay: 0,
        opacity: 0,
        x: -60,
        duration: 0.8,
        ease: "power3.out",
        stagger: {
            amount: 0.2
        }
    })
    .from([featureCircleBg, featureDotsBg], {
        delay: -1,
        opacity: 0,
        x: 60,
        duration: 0.8,
        ease: "power3.out",
        stagger: {
            amount: 0.4
        }
    })
    .from([featuresContentTitle, featuresContentText, featuresContentBtn], {
        delay: -0.6,
        opacity: 0,
        x: 40,
        duration: 0.6,
        ease: "powe3.out",
        stagger: {
            amount: 0.2
        }
    });

const footerTl = gsap.timeline();

footerTl
    .from([footerCircleBg, footerDotsBg], {
        delay: 0,
        opacity: 0,
        x: -60,
        duration: 0.8,
        ease: "power3.out",
        stagger: {
            amount: 0.4
        }
    })
    .from(footerTitle, {
        delay: -0.8,
        opacity: 0,
        x: 60,
        duration: 0.6,
        ease: "power3.out",
        stagger: {
            amount: 0.4
        }
    })
    .from(footerMap, {
        delay: -0.6,
        opacity: 0,
        x: -40,
        duration: 0.8,
        ease: "power3.out",
        stagger: {
            amount: 0.4
        }
    })
    .from(footerBtn, {
        delay: -0.6,
        opacity: 0,
        x: 60,
        duration: 0.6,
        ease: "power3.out",
        stagger: {
            amount: 0.4
        }
    });

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
        triggerElement: "#btnRow",
        triggerHook: 0,
        reverse: false
    })
    // .addIndicators()
    .setTween(featuresTl)
    .addTo(controller);

const controller2 = new ScrollMagic.Controller();
const scene2 = new ScrollMagic.Scene({
        triggerElement: "#featureBtn",
        triggerHook: 0,
        reverse: false
    })
    // .addIndicators()
    .setTween(footerTl)
    .addTo(controller);