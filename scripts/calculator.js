var calculator = {
    
    sum: 0,
    
    tmpInput: "",
    
    currentInput: "",
    
    add: function() {
        this.tmpInput += this.currentInput + "+";
        this.currentInput = "";
    },
    
    sub: function() {
        this.tmpInput += this.currentInput + "-";
        this.currentInput = "";
    },
    
    multi: function() {
        this.tmpInput += this.currentInput + "*";
        this.currentInput = "";
    },
    
    div: function() {
        this.tmpInput += this.currentInput + "/";
        this.currentInput = "";
    },
    
    calc: function() {
        this.tmpInput += this.currentInput;
        this.currentInput = "";
        try {
            this.sum = eval(this.tmpInput);
        }
        catch(err) {
            this.sum = "INPUT ERROR";
        }
        this.tmpInput = this.sum;
        this.print(this.sum); 
    },
    
    clear: function() {
        this.sum = 0;
        this.tmpInput = "0";
        this.currentInput = "0";
        this.print(this.currentInput);
    },
    
    digit: function(number) {
        if (this.currentInput === "0") {
            this.currentInput = "";
        }
        this.currentInput += number;
        this.print(this.currentInput);
    },
    
    print: function(input) {
        var element = document.getElementById("screen");
        element.innerHTML = input;
    }
    
};
