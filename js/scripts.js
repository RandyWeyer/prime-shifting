$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var allNumbers = [];
    var primeNumbers = [2];

    var userNumber = parseInt($("input#userNumber").val());

    for (var i = 2; i < (userNumber+1); i++) {
      allNumbers.push(i);
    };

    for (var j = 0 ; j < allNumbers.length ; j++ ) {
      for (var k = 0 ; k < primeNumbers.length ; k++ )
        if (allNumbers[j] % primeNumbers[k] == 0) {
          allNumbers.splice(j,1);
          


          console.log("All " + allNumbers)
          console.log("Prime " + primeNumbers);
        } else {
          primeNumbers.push(allNumbers[k])

        };
      };

  });
});
