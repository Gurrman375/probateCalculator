    function probateCalculator(total){
        let probateNumber = 0;
        let displayMessage;
        let identity;
        if(total == 0){
            window.alert("Invaild Range");
        }
        else{
            if(total > 25000000){
                displayMessage = "Invalid Number: \nEnter a number between 100,001.00 - 25,000,000.00";
                window.alert(displayMessage);
            }
            else if((25000000 >= total) && (total > 10000000)){ // 10
                probateNumber = 113000; 
                total -= 10000000; 
                total *= 0.005;
                probateNumber += total;
                identity = 4;
            }
            else if((10000000 >= total) && (total > 1000000)){
                probateNumber = 23000;
                total -= 1000000;
                total *= 0.01;
                probateNumber += total;
                identity = 3;
            }
            else if((1000000 >= total) && (total > 200000)){
                probateNumber = 7000;
                total -= 200000;
                total *= 0.02;
                probateNumber += total;
                identity = 2;
            }
            else if((200000 >= total) && (total > 100000)){
                probateNumber = 4000;
                total -= 100000;
                total *= 0.03;
                probateNumber += total;
                identity = 1;
            }
            else{
                displayMessage = "Invalid Number: \nEnter a number between 100,001.00 - 25,000,000.00";
                window.alert(displayMessage);
            }
            switch(identity){
                case 1:
                    document.getElementById("4perc").innerHTML = "$" + 4000.00;
                    document.getElementById("3perc").innerHTML = "$" + total.toFixed(2);
                    document.getElementById("2perc").innerHTML = "$" + 0.00;
                    document.getElementById("1perc").innerHTML = "$" + 0.00;
                    document.getElementById("hperc").innerHTML = "$" + 0.00;
                    break;
                case 2:
                    document.getElementById("4perc").innerHTML = "$" + 4000.00;
                    document.getElementById("3perc").innerHTML = "$" + 3000.00;
                    document.getElementById("2perc").innerHTML = "$" + total.toFixed(2);
                    document.getElementById("1perc").innerHTML = "$" + 0.00;
                    document.getElementById("hperc").innerHTML = "$" + 0.00;
                    break;
                case 3:
                    document.getElementById("4perc").innerHTML = "$" + 4000.00;
                    document.getElementById("3perc").innerHTML = "$" + 3000.00;
                    document.getElementById("2perc").innerHTML = "$" + 16000.00;
                    document.getElementById("1perc").innerHTML = "$" + total.toFixed(2);
                    document.getElementById("hperc").innerHTML = "$" + 0.00;
                    break;
                case 4:
                    document.getElementById("4perc").innerHTML = "$" + 4000;
                    document.getElementById("3perc").innerHTML = "$" + 3000;
                    document.getElementById("2perc").innerHTML = "$" + 16000;
                    document.getElementById("1perc").innerHTML = "$" + 90000;
                    document.getElementById("hperc").innerHTML = "$" + total.toFixed(2);
                    break;
            }
            document.getElementById("test").innerHTML = "$" + probateNumber.toFixed(2);
        }
    }
