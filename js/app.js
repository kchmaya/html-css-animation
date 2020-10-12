const header = document.getElementById('header');

const banner = document.getElementById('bannerBg');
const bannerAddition = document.getElementById('bannerBgAddition');
const h1Line = document.querySelectorAll('.line span');

const contentP = document.querySelector('.content-inner p');
const contentBtn = document.querySelector('.content-inner .btn-row');
const playVideo = document.querySelector('.play-video span');
const playVideoCover = document.querySelector('.play-video .cover');

const mainImage = document.querySelector('.image-inner img');
const featureBanner = document.getElementById('featureBanner');
const featureBannerGreen = document.getElementById('featureBannerGreen');

const featuresContentTitle = document.querySelector('.features-content h3');
const featuresContentText = document.querySelector('.features-content p');
const featuresContentBtn = document.querySelector('.features-content .btn-row');
const featuresList = document.querySelectorAll('.features-list li');


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
    })
    .to([playVideo, playVideoCover], {
        delay: -0.6,
        opacity: 1,
        duration: 0
    })
    .to(playVideoCover, {
        dalay: -0.6,
        height: 0,
        duration: 1,
        ease: 'power3.out'
    });

gsap.from(mainImage, {
    delay: 2.2,
    x: -100,
    skewX: 2,
    duration: 0.8,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from([featureBanner, featureBannerGreen], {
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
    .from([featuresContentTitle, featuresContentText, featuresContentBtn], {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "powe3.out",
        stagger: {
            amount: 0.2
        }
    })
    .from(featuresList, {
        delay: -0.4,
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "power3.out",
        stagger: {
            amount: 0.4
        }
    });

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
        triggerElement: "#featureBannerGreen",
        triggerHook: 0,
        reverse: false
    })
    // .addIndicators()
    .setTween(featuresTl)
    .addTo(controller);