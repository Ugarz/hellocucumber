const assert = require('assert');
const { Given, When, Then } = require('cucumber');

/**
 * Check if current day is Friday
 * @param {string} day - Day, of today 
 */
function isItFriday(day) {
    if (day === "Friday") {
        return "yes";
    } else {
        return "no";
    }
}

Given('today is {string}', function (givenDay) {
    console.log('Coucou var', this.variable)
});

When('I ask whether it\'s Friday yet', function () {
    this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
    assert.equal(this.actualAnswer, expectedAnswer);
});