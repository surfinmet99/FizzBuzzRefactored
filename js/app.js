$(document).ready(function () {
    $('.add').click(function () {
        var n = $('#input').val();
        var parse = parseInt(n, 10);
        var buzz = $('.buzzers');
        parser(parse);

        function parser(n) {
            for (var i = 1; i <= n; i++) {
                if (i % 3 === 0 && i % 5 === 0) {
                    buzz.append("FizzBuzz" + "<br>");
                    console.log("FizzBuzz");
                } else if (i % 3 === 0) {
                    buzz.append("Fizz" + "<br>");
                    console.log("Fizz");
                } else if (i % 5 === 0) {
                    buzz.append("Buzz" + "<br>");
                    console.log("Buzz");
                } else {
                    buzz.append(i + "<br>");
                    console.log(i);
                }
            }
        }
    });
});


