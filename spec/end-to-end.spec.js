/* eslint-disable no-undef */
const puppeteer = require('puppeteer');
// import puppeteer from 'puppeteer';


const pageUrl = 'http://127.0.0.1:3003/?id=10';

let page;
let browser;
const width = 1280;
const height = 720;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: true,
    slowMo: 80,
    args: [`--window-size=${width},${height}`],
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});

afterAll(() => {
  browser.close();
});

describe('Should render component with related products.', () => {
  beforeEach(async () => {
    await page.goto(pageUrl, { waitUntil: 'networkidle2' });
  });

  test('Component title is correct for valid product id.', async () => {
    const div = '.sponsored-products-meta h2';
    const title = await page.$eval(div, (e) => e.textContent);
    expect(title).toEqual('Sponsored products related to this item');
  });

  test.todo('Should not load duplicate products');

  test.todo('Product should be in same category as current product');
});

describe('Should not render product list for product with no related products.', () => {
  beforeEach(async () => {
    await page.goto('http://127.0.0.1:3003/?id=109', { waitUntil: 'networkidle2' });
  });

  test('Component title should be different if no related products exist.', async () => {
    const div = '.sponsored-products-meta h2';
    const title = await page.$eval(div, (e) => e.textContent);
    expect(title).not.toEqual('Sponsored products related to this item');
  });

  test.todo('Should not load any related products');
});
