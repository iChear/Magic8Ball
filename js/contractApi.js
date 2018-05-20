const CONTRACT_ADDRESS = "n1pYRpPUUJSfMpBtn2Un42cRWWZRSPmtAmZ"; //cc0b6618a2e124d871151535d6ac8fbb656baf2eeb48d03c4e93c39d9ac3bd68

class SmartContractApi {
    constructor(contractAdress) {
        let NebPay = require("nebpay");
        this.nebPay = new NebPay();
        this._contractAdress = contractAdress || CONTRACT_ADDRESS;
    }

    getContractAddress() {
        return this.contractAdress;
    }

    _simulateCall({ value = "0", callArgs = "[]", callFunction, callback }) {
        this.nebPay.simulateCall(this._contractAdress, value, callFunction, callArgs, {
            callback: function (resp) {
                if (callback) {
                    callback(resp);
                }
            }
        });
    }

    _call({ value = "0", callArgs = "[]", callFunction, callback }) {
        this.nebPay.call(this._contractAdress, value, callFunction, callArgs, {
            callback: function (resp) {
                if (callback) {
                    callback(resp);
                }
            }
        });
    }
}

class BallContract extends SmartContractApi {
    ask(question, cb) {
        this._call({
            callArgs: `["${question}"]`,
            callFunction: "ask",
            callback: cb
        });
    }

    addAnswer(answer, cb) {
        this._call({
            callArgs: `["${answer}"]`,
            callFunction: "addAnswer",
            callback: cb
        });
    }

    getQuestions(limit, offset, cb) {
        this._simulateCall({
            callArgs: `[${limit}, ${offset}]`,
            callFunction: "getQuestions",
            callback: cb
        });;
    }

    getRandomAnswer(cb) {
        this._simulateCall({
            callFunction: "getRandomAnswer",
            callback: cb
        });;
    }

    totalAnswer(cb) {
        this._simulateCall({
            callFunction: "totalAnswer",
            callback: cb
        });;
    }

    totalQuestion(cb) {
        this._simulateCall({
            callFunction: "totalQuestion",
            callback: cb
        });
    }
}
