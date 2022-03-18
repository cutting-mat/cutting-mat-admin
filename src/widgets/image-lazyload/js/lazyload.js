
export const isInSight = function (el)  {
    let bound = el.getBoundingClientRect();
    let clientHeight = window.innerHeight;

    return bound.top <= clientHeight + 10 && el.getAttribute("data-src");
}

export const checkImgs = function () {
    let imgs = document.querySelectorAll('.__scroll-load-image');
    for (let i = 0; i < imgs.length; i++) {
        if (isInSight(imgs[i])) {
            loadImg(imgs[i]);
        }
    }
}

function loadImg(el) {
    el.src = el.getAttribute("data-src");
    el.removeAttribute("data-src");
}

export const throttle = function throttle(method, delay, duration) {
    let timer = null,
        begin = new Date();
    delay = delay ? delay : 128;
    duration = duration ? duration : 1000;
    return function () {
        let context = this,
            args = arguments,
            current = new Date();
        clearTimeout(timer);
        if (current - begin >= duration) {
            method.apply(context, args);
            begin = current;
        } else {
            timer = setTimeout(function () {
                method.apply(context, args);
            }, delay);
        }
    };
};

