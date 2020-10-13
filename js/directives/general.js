app.directive('scrollToItem', function() {
    return {
        restrict: 'A',
        scope: {
            scrollto: "@"
        },
        link: function(scope, $element) {

            $element.on('click', function() {
                $('html,body').animate({scrollTop: $(scope.scrollto).offset().top }, "slow");
            });
        }
    };
});

app.directive('dataAos', function () {
    return {
        restrict: 'A',
        controller: function(){
            AOS.refresh();
        }
    };
});
