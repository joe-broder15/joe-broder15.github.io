var app = angular.module('app', []);

app.controller('templateCtrl', function($scope) {
    $scope.template = "Select";
    $scope.powerInfo = "";
    $scope.change_template = function(t) {
      $scope.template = t;
      if(t == "Alexa Flash Briefing"){
        $scope.powerInfo = "Create an Alexa flash briefing with a custom feed";
      } else if (t == "Alexa Interaction") {
        $scope.powerInfo = "Create a custom interaction for your Alexa";
      };
    };
    $scope.next_card = function(){

      $( "#appcontainer" ).append( "<div ng-include=\"'Cards/testCard.html'\"></div>");

    };

});
