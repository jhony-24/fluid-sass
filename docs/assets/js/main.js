const typesAnimation = [
    "spring", "shake", "from-left", "splash", "jump", "fade-in", "fade-out", "from-right",
    "force", "rotate", "kite", "fade-to-left", "fade-to-right", "explosion",
    "bounce", "break","invert"
];

const links = [
    { to: "#home", text: "home" },
    { to: "#mixins", text: "mixins" },
    { to: "#examples", text: "examples" },
];

window.addEventListener('load', function () {

    document.getElementById('app').style.visibility = 'visible';
    document.getElementById('loading-page').remove();

    new Vue({
        el: '#app',
        data: {
            typesAnimation,
            currentAnimation: '',
            links,
            selectedLink: window.location.hash
        },
        components: { Square, TypeAnimation },
        computed: {
            allAnimations: function () {
                return this.typesAnimation;
            },
            circleTextAnimationSelect: function () {
                let current = this.currentAnimation;
                return (current !== '') ? ('! ' + current) : 'GO!';
            }
        },
        methods: {
            selectAnimation: function (text) {
                this.currentAnimation = text;
            },
            onLinkSelected: function (to) {
                this.selectedLink = to;
            }
        },
    });

});