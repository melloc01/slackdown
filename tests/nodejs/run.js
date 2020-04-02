var slackdown = require('../../dist/slackdown.min');

// Simple test to verify that slackdown loads correctly

var expected = 'The third <strong>word</strong> is bold. Surround text with <em>underscores</em> for italics';

var actual = slackdown.parse('The third *word* is bold. Surround text with _underscores_ for italics');

if(actual == expected) {
    console.info("All OK! Output:", actual);
} else {
    console.error("Test failed:", actual, "!=", expected);
}