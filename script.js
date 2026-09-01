/* =========================================
ANIMATE PROGRESS BARS
========================================= */

window.addEventListener("load", () => {

```
const progressBars =
    document.querySelectorAll(".progress-bar");

setTimeout(() => {

    progressBars.forEach(bar => {

        const progress =
            bar.getAttribute("data-progress");

        bar.style.width = progress + "%";

    });

}, 500);
```

});

/* =========================================
INTERACTIVE PIPELINE
========================================= */

const flowItems =
document.querySelectorAll(".flow-item");

const detailTitle =
document.getElementById("detail-title");

const detailDescription =
document.getElementById("detail-description");

flowItems.forEach(item => {

```
item.addEventListener("click", () => {

    /* Remove active class */
    flowItems.forEach(flowItem => {

        flowItem.classList.remove("active");

    });


    /* Add active class */
    item.classList.add("active");


    /* Update content */
    detailTitle.textContent =
        item.dataset.title;

    detailDescription.textContent =
        item.dataset.description;

});
```

});

/* =========================================
SCROLL REVEAL ANIMATION
========================================= */

const observer =
new IntersectionObserver(entries => {

```
    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {
    threshold: 0.15
});
```

const revealElements =
document.querySelectorAll(".reveal");

revealElements.forEach(element => {

```
observer.observe(element);
```

});

/* =========================================
COUNTER ANIMATION
========================================= */

const counters =
document.querySelectorAll(".counter");

let countersStarted = false;

const statsSection =
document.querySelector(".stats");

const statsObserver =
new IntersectionObserver(entries => {

```
    if (
        entries[0].isIntersecting &&
        !countersStarted
    ) {

        countersStarted = true;


        counters.forEach(counter => {

            const target =
                Number(counter.dataset.target);

            let count = 0;


            const increment =
                Math.ceil(target / 60);


            const updateCounter =
                setInterval(() => {

                    count += increment;


                    if (count >= target) {

                        count = target;

                        clearInterval(
                            updateCounter
                        );

                    }


                    counter.textContent = count;

                }, 30);

        });

    }

}, {
    threshold: 0.3
});
```

statsObserver.observe(statsSection);

/* =========================================
NAVBAR SCROLL EFFECT
========================================= */

window.addEventListener("scroll", () => {

```
const nav =
    document.querySelector("nav");


if (window.scrollY > 30) {

    nav.style.boxShadow =
        "0 10px 40px rgba(0, 0, 0, 0.3)";

}

else {

    nav.style.boxShadow = "none";

}
```

});
