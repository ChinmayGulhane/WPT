function currency(){
    function India(){
        console.log("Rupees")
    }

    function US(){
        console.log("Dollars");
    }

    function UAE(){
        console.log("Dinar")
    }

    switch(choice){
        case 1: return India;
        break;
        
        case 2: return US;
        break;

        case 3: return UAE;
        break;
    }
}
var choice=2;


let rv=currency();
rv();