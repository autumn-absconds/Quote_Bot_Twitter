
import puppeteer from 'puppeteer';
import dotenv from 'dotenv';
dotenv.config();


const PASSWORD = 'theoddballgazette';
const USERNAME = 'The#OddBall#Gazette#';

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to Twitter login page
  console.log('Navigating to Twitter login page...');

  await page.goto('https://twitter.com/i/flow/login');

  // Wait for the page to load
  console.log('Waiting for the page to load...');

await new Promise(resolve => setTimeout(resolve, 10000));


  // Input username
  console.log('Typing username...');

  const usernameInput = await page.$('input');
  await usernameInput.type(USERNAME);

  // Click on the login button
  console.log('Clicking on the login button...');

  const loginButtons = await page.$$('div[role="button"]');
  await loginButtons[loginButtons.length - 2].click();

  // Wait for the page to load
  console.log('Waiting for the page to load after login...');
  await page.waitForSelector('input[type="password"]');
await new Promise(resolve => setTimeout(resolve, 10000));


  // Input password
  console.log('Typing password...');

  const passwordInput = await page.$('input[type="password"]');
  await passwordInput.type(PASSWORD);

  // Wait for the page to load
  console.log('Waiting for the page to load after password...');

await new Promise(resolve => setTimeout(resolve, 10000));


  // Click on the login button
  console.log('Clicking on the final login button...');

  const finalLoginButton = await page.$$('div[role="button"]');
  await finalLoginButton[finalLoginButton.length - 1].click();

  // Wait for the page to load
  console.log('Waiting for the page to load after final login...');

await new Promise(resolve => setTimeout(resolve, 10000));


  // Search for a keyword
  const keyword = 'dog';
  await page.goto(`https://twitter.com/search?q=${keyword}&src=typed_query`);

  // Wait for the page to load
  await new Promise(resolve => setTimeout(resolve, 15000));

//   await page.waitForTimeout(15000);

  // Messages to be sent
  const messages = ['Wooooowww!!', 'amazingggg', ':)'];
  const n_scrolls = 3;

  // Perform actions for each scroll
  for (let scroll = 0; scroll < n_scrolls; scroll++) {
    // Click on the retweet button
    const retweetButtons = await page.$$('div[data-testid="retweet"]');
    await retweetButtons[0].click();

    // Wait for some time
    await new Promise(resolve => setTimeout(resolve, 6000));

    // await page.waitForTimeout(6000);

    // Click on the quote tweet button
    const quoteTweetButton = await page.$('a[role="menuitem"]');
    await quoteTweetButton.click();

    // Wait for some time
    await new Promise(resolve => setTimeout(resolve, 6000));

    // Input a random message
    const titleInput = await page.$('div[class*="public-DraftStyleDefault-block"]');
    await titleInput.type(messages[Math.floor(Math.random() * messages.length)]);

    // Wait for some time
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Click on the tweet button
    const tweetButton = await page.$('div[data-testid="tweetButton"]');
    await tweetButton.click();

    // Wait for some time
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Scroll to the bottom of the page
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Wait for some time
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Posted');

  }

  // Close the browser
  console.log('Script completed successfully. Closing the browser.');

  await browser.close();
})();

