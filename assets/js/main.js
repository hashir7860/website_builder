(function () {
    "use strict";

    

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */

    let selectnavbar = select('.navbar')
    if (selectnavbar) {
        const navbarScrolled = () => {
            if (window.scrollY > 0) {
                selectnavbar.classList.add('navbar-scrolled')
            } else {
                selectnavbar.classList.remove('navbar-scrolled')
            }
        }
        window.addEventListener('load', navbarScrolled)
        onscroll(document, navbarScrolled)
    }


})()