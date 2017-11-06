//This function tells you if you should sleep in or not depending on if it is a weekday or vacation
function sleep_In(weekday,vacation){
    if(weekday == true && vacation == true){
        return true;
    }
    if(weekday == true && vacation == false){
        return false;
    }
    if(weekday == false && vacation == true){
        return true;
    }
    if(weekday == false && vacation == false){
        return true;
    }
}



function monkey_trouble(a_smile,b_smile){
    if (a_smile == true && b_smile == true){
        return true;
    }
    if (a_smile == false && b_smile == false){
        return true;
    }
    if (a_smile == true && b_smile == false){
        return false;
    }
    if (a_smile == false && b_smile == true){
        return false;
    }
}

function string_times(str,int) {
    var x = "";
    for (i = 1; i <= int; i++) {
        x += str;

    }
    return x;
}


function front_times(str , int) {
    var x = "";
    str = str.substring(0, 3);
    if (int > 0) {
        for (var i = 1; i <= int; i++) {
            x += str
        }
        return x;
    } else {
        return 0;
    }
}

function string_bits(str){
        var answer = "";

        for (var i = 0; i < str.length; i=i+2){
            answer = answer + str[i]
        }

        return answer;

}

function caughtSpeeding(speed, yesBirthday){
    function caughtSpeeding(speed, birthday){
        if(birthday == true){
            if (speed <= 65 && speed <= 85) {
                return 0;
            }
            if (speed > 65 && speed <= 86) {
                return 1;
            }
            if (speed > 86) {
                return 2;
            }
        }else {
            if (speed <= 60 && speed <= 80) {
                return 0;
            }
            if (speed > 60 && speed <= 81) {
                return 1;
            }
            if (speed >= 81) {
                return 2;
            }
        }
    }
}




function fizz_buzz(int) {
    var Fizz = "Fizz";
    var Buzz = "Buzz";
    var FizzBuzz = "FizzBuzz";
    var answer = "!";

    if (int % 3 == 0 && int % 5 == 0) {
        return FizzBuzz;
    }

    if (int % 3 == 0) {
        return Fizz;
    }

    if (int % 5 == 0) {
        return Buzz;
    } else {
        return int + answer;
    }
}

function teaParty(tea, candy) {


    if (tea >= 5 && candy >= 5) {
        if (tea >= 2 * candy || candy >= 2*tea) {
            return 2;
        }else{
            return 1;
        }
    }else{
        return 0;
    }
}

function blackjack (int1, int2){
    if (int1 > 2 && int2 > 2){
        if (int1 > int2 && int1 <= 21){
            return int1;
        }
        if (int2 > int1 && int2 <= 21){
            return int2;
        }
        if (int1 > 21 && int2 <= 21){
            return int2;
        }
        if (int1 < 21 && int2 >= 21){
            return int1;
        }
        if (int1 > 21 && int2 >21){
            return 0;
        }
    }
}


function loneSum (a, b, c){
    if (a == b && a == c){
        return 0;
    }
    if (a == b){
        return c;
    }
    if (b == c){
        return a;
    }
    if (c == a){
        return b;
    }else{
        return a + b + c;

}

    function tester(){
    document.getElementById("output").innerHTML = loneSum(1,2,3);
    document.getElementById("output1").innerHTML = loneSum(3,2,3);
    document.getElementById("output2").innerHTML = loneSum(3,3,3);


}




