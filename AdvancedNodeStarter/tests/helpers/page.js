const puppeteer = require('puppeteer');
const sessionFactory = require('../factories/sessionFactory');
const userFactory = require('../factories/userFactory');

class CustomPage {
  // generate a new instance of a page
  static async build() {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox'],
      headless: false
    });

    const page = await browser.newPage();
    const customPage = new CustomPage(page);    

    return new Proxy(customPage, {
      get: function(targe, property) {
        return customPage[property] || browser[property] || page[property];
      }
    });
  }

  constructor(page) {
    this.page = page;  
  }

  async login() {
    const user = await userFactory();
     // call to session factory
    const { session, sig } = sessionFactory(user);

    await this.page.setCookie({ name: 'session', value: session });
    await this.page.setCookie({ name: 'session.sig', value: sig });
    await this.page.goto('localhost:3000/blogs');
    await this.page.waitFor('a[href="/auth/logout"]');
  }

  async getContentsOf(selector) {
    return this.page.$eval(selector, el => el.innerHTML);
  }  
}

module.exports = CustomPage;