import { browser } from '@wdio/globals'
import { $ } from '@wdio/globals'


export class Ui {

      /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
   
 
    public element (selector: string) {
    return $(selector);
}

    public open (path: string) {
        return browser.url(`https://automationexercise.com/${path}`)
    }

}