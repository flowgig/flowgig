/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');
import Vue from 'vue';


/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.Laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest'
};


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('BandCards', require('./components/BandCards.vue'));
Vue.component('Breadcrumbs', require('./components/Breadcrumbs.vue'));
Vue.component('CustomButton', require('./components/CustomButton.vue'));
Vue.component('Gigs', require('./components/Gigs.vue'));
Vue.component('MainFooter', require('./components/MainFooter.vue'));
Vue.component('MainNavigation', require('./components/MainNavigation.vue'));
Vue.component('Setlist', require('./components/Setlist.vue'));
Vue.component('Songs', require('./components/Songs.vue'));
Vue.component('UpcomingGigs', require('./components/UpcomingGigs.vue'));
Vue.component('WelcomeScreen', require('./components/WelcomeScreen.vue'));

const app = new Vue({
    el: '#app'
});

document.addEventListener('DOMContentLoaded', function () {
    var overlayElements = document.getElementsByClassName('overlay-element') !== undefined ? document.getElementsByClassName('overlay-element') : false;
    if (overlayElements) {
        for (var i = 0; i < overlayElements.length; i++) {
            var overlayElement = overlayElements[i];

            document.onclick = function (event) {
                for (var i = 0; i < overlayElements.length; i++) {
                    overlayElements[i].classList.remove('active');
                }
                var thisNodeClassList = event.target.classList !== undefined ? event.target.classList : false;
                var parentNodeClassList = event.target.parentNode !== null && event.target.parentNode.classList !== undefined ? event.target.parentNode.classList : false;
                if (thisNodeClassList) {
                    thisNodeClassList.forEach(function (className) {
                        if (className == 'overlay-element') thisNodeClassList.add('active');
                    });
                }
                if (parentNodeClassList) {
                    parentNodeClassList.forEach(function (className) {
                        if (className == 'overlay-element') parentNodeClassList.add('active');
                    });
                }
            }
        }
    }
}, false);
