import {expect, test} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('http://uitestingplayground.com/ajax')
    await page.getByText('Button Triggering AJAX Request').click()
})

test('auto waiting', async({page}) => {
    const successButton = page.locator('.bg-success')
    await successButton.click()

    //const text = await successButton.textContent()
    //await successButton.waitFor({state: 'attached'})
    const text = await successButton.allTextContents()
    expect(text).toContain('Data loaded with AJAX get request.')

    //await expect(successButton).toHaveText('Data loaded with AJAX get request.', {timeout: 20000})
})

test('Alternative waits', async({page}) => {
    const successButton = page.locator('.bg-success')

    //___ Wait for element
    await page.waitForSelector('.bg-success');

    //___ Wait for particular http response
    //await page.waitForResponse('http://uitestingplayground.com/ajaxdata')

    //___ Wait for network calls to be completed (NTO RECOMMENDED)
   // await page.waitForLoadState('networkidle')

    const text = await successButton.allTextContents()
    expect(text).toContain('Data loaded with AJAX get request.')
})