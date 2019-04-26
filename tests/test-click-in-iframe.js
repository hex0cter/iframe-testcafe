import { Selector, ClientFunction } from 'testcafe'

const getLocation = ClientFunction(() => window.location.href);

fixture('iframe')
	.page('http://localhost:8080')

test('new window', async (t) => {
	console.log(await getLocation());

	await t
		.debug()
		.switchToIframe('#main')
		.click(Selector('body > a'))
		.switchToMainWindow()

	console.log(await getLocation());
})
