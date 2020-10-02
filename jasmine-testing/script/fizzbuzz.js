fizzBuzz = function(buzz) {
    if (buzz < 0) {
        return "Sorry. I can’t tell what drink because that age is incorrect";
    } else if  ( buzz < 14){
         return "Drink Toddy";
    } else if (buzz < 130) {
        return "Drink Whisky";
    } else {
        return "Sorry. I can’t tell what drink because that age is incorrect!"
    }
}
