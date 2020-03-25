function totalPhoneBill(stringy) {

    var list = stringy.split(',');
    var total = 0.00;

    for (var i = 0; i < list.length; i = i + 1) {
        var action = list[i].trim();
        switch (action) {
            case "call":
                total += 2.75;
                break;
            case "sms":
                total += 0.65;
                break;
        };
    };
    console.log(total.toFixed(2));
    return "R" + total.toFixed(2);
};

totalPhoneBill("call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, call, sms, ")