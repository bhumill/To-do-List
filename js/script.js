var toggleAnim = new TimelineMax({ paused: true });

toggleAnim.to(".menu", 1.2, {
    left: "0%",
    ease: Expo.easeInOut,
});

toggleAnim.from(".menu-close", 1.2, {
    y: 20,
    opacity: 0,
    ease: Power2.easeOut,
});

toggleAnim.staggerFrom(
    ".menu ul li",
    0.8,
    { y: 40, opacity: 0, ease: Power2.easeOut },
    0.1,
    "-=1.4"
);

toggleAnim.reverse();
$(document).on("click", ".menu-open", function () {
    toggleAnim.reversed(!toggleAnim.reversed());
});

$(document).on("click", ".menu-close", function () {
    toggleAnim.reversed(!toggleAnim.reversed());
});

$(document).on("click", ".menu ul li", function () {
    toggleAnim.reversed(!toggleAnim.reversed());
});
