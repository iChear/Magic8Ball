var assert = require("assert")
let Stubs = require("../contractStubs.js");
let Contract = require("../ballContract.js");

var Blockchain = Stubs.Blockchain;
var LocalContractStorage = Stubs.LocalContractStorage;

let contract = new Contract();
contract.init();
console.clear();

describe('SmartContract', () => {
    describe('ask()', () => {
        contract.ask("Вот така");
        contract.ask("кастрюльку");
        let questions = contract.getQuestions(50, 0);

        it('questions saved', () => {
            assert(questions.length > 0);
        });
    });

});