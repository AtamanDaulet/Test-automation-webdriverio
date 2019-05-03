import { assert } from 'chai';
import { expect } from 'chai';
import Navigation from '../../component_objects/Navigation.js';



describe('General', function() {

    describe('Navigation Bar', function() {
        it('Login', function() {
            Navigation.open();
            Navigation.login();
        })
        it('exist Navigation Bar', function() {
                // browser.url('/');
                expect(Navigation.navBar.isDisplayed()).to.eql(true);
            })
            /*
            				describe('Navigation bar contains navigation buttons', function() {
            						it('exist newBug button', function() {
            								expect(Navigation.newBug.isDisplayed()).to.eql(true);
            						})
            						it('exist all_issues button', function() {
            								expect(Navigation.all_issues.isDisplayed()).to.eql(true);
            						})
            						it('exist logout button', function() {
            								expect(Navigation.logout.isDisplayed()).to.eql(true);
            						})
            				})
            				it('is contain 100% of the application width', function() {
            								let navBarWidth = parseInt(Navigation.navBar.getCSSProperty('width').value);
            								let containerWidth = parseInt($('.container').getCSSProperty('width').value) - 30;
            								expect(navBarWidth).to.equal(containerWidth);
            						})
            						////////        // Verify that Navigation  Bar located just below the Header.
            				it('located just below the Header', function() {
            								expect(Navigation.navBar.getAttribute('class')).to.equal('card-footer text-center');
            						})
            						// Verify that Navigation Bar background color: rgba(0, 0, 0, 0.03)
            				it('equal background color: rgba(0, 0, 0, 0.03)', () => {
            								expect(Navigation.navBar.getCSSProperty('background-color').value)
            										.to.equal('rgba(0,0,0,0.03)');
            						})
            						*/
            //         Verify that Navigation Bar have New Bug button
        it('have New Bug button', () => {
                expect($('.site-content > div > div:nth-child(1) > div > div > button')
                    .getAttribute('id')).to.equal('new_bug');
            })
            // Verify that Navigation Bar have All Issues button
        it('have All Issues button', () => {
                expect($('.site-content > div > div:nth-child(1) > div > div > button:nth-child(2)')
                    .getAttribute('id')).to.equal('all_issues');
            })
            // Verify that Navigation Bar have Logout button
        it('have Logout button', () => {
            expect($('.site-content > div > div:nth-child(1) > div > div > button:nth-child(3)')
                .getAttribute('id')).to.equal('logout');
        })

        describe('New Bug button check CSS attr', () => {
            // Verify that New Bug button have font family: Segoe UI
            it('have font family: Segoe UI', () => {
                    expect(Navigation.newBug.getCSSProperty('font-family').value).to.equal('segoe ui');
                })
                // Verify that New Bug button have font size: 16px
            it('have font size: 16px', () => {
                    expect(Navigation.newBug.getCSSProperty('font-size').value).to.equal('16px');
                })
                // Verify that New Bug button have font weight: 400
            it('have font weight: 400', () => {
                    expect(Navigation.newBug.getCSSProperty('font-weight').value).to.equal(400);
                })
                // Verify that New Bug button have font color: #fff
            it('have font color: #fff', () => {
                    expect(Navigation.newBug.getCSSProperty('color').parsed.hex).to.equal('#ffffff');
                })
                // Verify that New Bug have text align: center
            it('have text align: center', () => {
                    expect(Navigation.newBug.getCSSProperty('text-align').value).to.equal('center');
                })
                // Verify that New Bug Button have background color: #17a2b8
            it('have background color: #17a2b8', () => {
                    expect(Navigation.newBug.getCSSProperty('background-color').parsed.hex).to.equal('#17a2b8');
                })
                // Verify that New Bug Button  have hover background color: #138496
            it('have hover background color: #138496', () => {
                Navigation.newBug.moveTo();
                browser.pause(2000);
                expect(Navigation.newBug.getCSSProperty('background-color').parsed.hex).to.equal('#138496');
            })

        })
        describe('All Issues button check CSS attr', () => {
            // 			Verify that All Issues button have font family: Segoe UI
            it('have font family: Segoe UI', () => {
                    expect(Navigation.all_issues.getCSSProperty('font-family').value).to.equal('segoe ui');
                })
                // Verify that All Issues button have font size: 16px
            it('have font size: 16px', () => {
                    expect(Navigation.all_issues.getCSSProperty('font-size').value).to.equal('16px');
                })
                // Verify that All Issues button have font weight: 400
            it('have font weight: 400', () => {
                    expect(Navigation.all_issues.getCSSProperty('font-weight').value).to.equal(400);
                })
                // Verify that All Issues button have font color: #fff
            it('have font color: #fff', () => {
                    expect(Navigation.all_issues.getCSSProperty('color').value).to.equal('rgba(255,255,255,1)');
                })
                // Verify that All Issues button have text align: center
            it('have text align: center', () => {
                    expect(Navigation.all_issues.getCSSProperty('text-align').value).to.equal('center');
                })
                // Verify that All Issues Button have background color: #17a2b8
            it('have background color: #17a2b8', () => {
                    expect(Navigation.all_issues.getCSSProperty('background-color').parsed.hex).to.equal('#17a2b8');
                })
                // Verify that All Issues Button  have hover background color: #138496
            it('have hover background color: #138496', () => {
                Navigation.all_issues.moveTo();
                browser.pause(2000);
                expect(Navigation.all_issues.getCSSProperty('background-color').parsed.hex).to.equal('#138496');
            })
        })

        describe('Logout button check CSS attr', () => {
            // 			Verify that Logout button have font family: Segoe UI
            it('have font family: Segoe UI', () => {
                    expect(Navigation.logout.getCSSProperty('font-family').value).to.equal('segoe ui');
                })
                // Verify that Logout button have font size: 16px
            it('have font size: 16px', () => {
                    expect(Navigation.logout.getCSSProperty('font-size').value).to.equal('16px');
                })
                // Verify that Logout button have font weight: 400
            it('have font weight: 400', () => {
                    expect(Navigation.logout.getCSSProperty('font-weight').value).to.equal(400);
                })
                // Verify that Logout button have font color: #fff
            it('have font color: #fff', () => {
                    expect(Navigation.logout.getCSSProperty('color').value).to.equal('rgba(255,255,255,1)');
                })
                // Verify that Logout button have text align: center
            it('have text align: center', () => {
                    expect(Navigation.logout.getCSSProperty('text-align').value).to.equal('center');
                })
                // Verify that Button Logout  have background color: #6c757d
            it('have background color: #6c757d', () => {
                    expect(Navigation.logout.getCSSProperty('background-color').parsed.hex).to.equal('#6c757d');
                })
                // Verify that Button Logout  have hover background color: #5a6268
            it('have hover background color: #5a6268', () => {
                Navigation.logout.moveTo();
                browser.pause(2000);
                expect(Navigation.logout.getCSSProperty('background-color').parsed.hex).to.equal('#5a6268');
            })
        })


    });






});