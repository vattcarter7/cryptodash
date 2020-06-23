### CryptoDash

> crypto dashboard built with reactjs

### App Demo

> https://cryptodashboard-sopheak.netlify.app/

CryptoCompare API Key
Note:

CryptoCompare works without an API key but the limits will slowly be reduced over time and you may be blocked from fetching.

In order to get the best experience, please create a free API key here:

https://min-api.cryptocompare.com/pricing

Then, in your app:

const cc = require('cryptocompare')

cc.setApiKey('<your-api-key>')

IMPORTANT FIX FOR "Cannot read property 'USD' of undefined"
Hi students, there was a slight change to the API which now returns empty objects for coins with no price data. The fix for this is not included in the follow lecture so if you don't add this one line below you will get "Cannot read property 'USD' of undefined" for these coins.

The line below is commented and what it does is filter out the price objects that have no keys, indicated by the Object.keys(price).length check. This should resolve the issue, be sure to add this line in.

fetchPrices = async () => {
if(this.state.firstVisit) return;
let prices = await this.prices();
// We must filter the empty price objects (not in the lecture)
prices = prices.filter(price => Object.keys(price).length);
this.setState({prices});
}
