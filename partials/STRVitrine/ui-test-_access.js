const kDefaultRoutePath = '/';

Object.entries({
	STRVitrine: '.STRVitrine',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('STRVitrine_Access', function () {

	before(function() {
		return browser.visit(kDefaultRoutePath);
	});
	
	it('shows STRVitrine', function() {
		browser.assert.elements(STRVitrine, 1);
	});
	
	it('shows STRAbove', function() {
		browser.assert.elements(STRAbove, 1);
	});

});