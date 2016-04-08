describe('Search', function(){
	var searchBox = element(by.model('selected'))

	beforeEach(function(){
		browser.get('http://localhost:3000');
	})

	it('should return name for a registered place', function(){
		searchBox.sendKeys('Stockholm');
		searchBox.sendKeys(protractor.Key.ENTER);
		var locationName = element(by.className('location'));
		expect(locationName.getText()).toEqual('Stockholm');
	})

	it('should return lat and lon coordinates for a registered place', function(){
		searchBox.sendKeys('Göteborg');
		searchBox.sendKeys(protractor.Key.ENTER);
		var lat = element(by.className('lat'));
		var lon = element(by.className('lon'));
		expect(lat.getText()).toEqual('57.7087°');
		expect(lon.getText()).toEqual('11.9751°');
	})

	it('should return an error message if search is not found', function(){
		searchBox.sendKeys('London');
		searchBox.sendKeys(protractor.Key.ENTER);
		var errorContainer = element(by.className('alert'));
		expect(errorContainer.isDisplayed()).toBeTruthy();
		expect(errorContainer.getText()).toEqual('Försök med en annan ort');
	})
})