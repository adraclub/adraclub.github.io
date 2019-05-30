require.config({
    shim: {
        'bootstrap': ['jquery'],
        'simplelightbox': ['jquery'],
        'easing': ['jquery'],
        'waypoints': ['jquery'],
        'waypoints-sticky': ['jquery', 'waypoints'],
        'core': [
            'jquery',
            'bootstrap',
            'simplelightbox',
            'easing',
            'waypoints',
            'waypoints-sticky'
        ],
    },
    paths: {
        'core': 'assets/js/core',
        'jquery': 'assets/js/vendors/jquery-3.2.1.min',
        'bootstrap': 'assets/js/vendors/bootstrap.bundle.min',
        'easing': 'assets/js/vendors/jquery.easing.min',
        'waypoints': 'assets/lib/waypoints/jquery.waypoints.min',
        'waypoints-sticky': 'assets/lib/waypoints/shortcuts/sticky.min',
        'simplelightbox': 'assets/js/vendors/simple-lightbox.min',
    }
});
require(['core']);