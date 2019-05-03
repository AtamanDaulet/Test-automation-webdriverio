import assert from 'assert';

describe('Client', function() {

    describe('Page Level', function() {

        it('Get title', function() {
            browser.url('/');
            let title = browser.getTitle();
            assert.equal(title, 'Bug Tracker');
        })

        it('Favicon', function() {
            browser.url('/favicon.ico');
            let icon = $('img');
            let width = icon.getCSSProperty('width').parsed.value;
            let height = icon.getCSSProperty('height').parsed.value;
            let size = `${width}x${height}`;
            assert.equal(size, '256x256');
        })

    });

    describe('Elements exist', function() {

        it('Header', function() {
            browser.url('/');
            let header = $('.custom-header').isDisplayed();
            assert.equal(header, true);
        })

        it('App', function() {
            let header = $('.site-content').isDisplayed();
            assert.equal(header, true);
        })

        it('Footer', function() {
            let header = $('.custom-footer').isDisplayed();
            assert.equal(header, true);
        })

    });

});


/*
import { assert } from 'chai';

describe('Login', function () {

  it('Works', function () {
    browser.url('/');
    $('#email').setValue('testreacttest@gmail.com');
    $('#pass').setValue('testTest');
    $('#login').click();
    let newBug = $('#new_bug');
    newBug.waitForDisplayed(2000);
    assert.isTrue(newBug.isDisplayed());
  })

});
*/