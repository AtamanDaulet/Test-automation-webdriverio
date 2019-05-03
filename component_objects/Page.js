class Page {

    open(path) {
        if (!path) {
            browser.url("/")
        } else {
            browser.url(path)
        }
    }

    login() {
        $('#email').setValue('testreacttest@gmail.com');
        $('#pass').setValue('testTest');
        $('#login').click();
        $('#new_bug').waitForDisplayed(5000);
    }

    // reviveFlyout(elem) {
    //   browser.execute((selector) => {
    //     const flyout = document.querySelector(selector)
    //     flyout.setAttribute("style", "display: block; opacity: 1")
    //   }, elem.selector)
    // }

    // destroyFlyout(elem) {
    //   browser.execute((selector) => {
    //     const flyout = document.querySelector(selector)
    //     flyout.setAttribute("style", "display: none")
    //   }, elem.selector)
    // }

}

export default Page