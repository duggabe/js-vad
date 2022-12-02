# Using JavaScript to modify MediaWiki pages

This project is a Proof of Concept to make certain pages of the GNU Radio Wiki be adaptive to the user's GNU Radio software version (or desired version) so that sections which don't apply would be hidden. This would make cleaner page presentations and reduce the clutter of unrelated information.

The project is based on methods described in [js-html](https://github.com/duggabe/js-html).

## Installation

Note: These instructions are written for a Linux OS. Similar commands work for Mac and Windows.

1. Open a terminal window.
2. Change to the home directory.  
```
cd ~/  
```
3. If you don't have 'git', enter  
```
sudo apt install git  
```
4. Clone the repository:  
```
git clone https://github.com/duggabe/js-vad.git
```

## Local Testing

* Open your file manager and go to the `~/js-vad folder.

* Open `Phase_1_test.html` in your browser to see the test page.

* In the Navigation menu on the left, click one or more versions and then click 'Submit'.

* The page should refresh with sections you did not choose hidden.

## References

* [js-html](https://github.com/duggabe/js-html)
* [HTML JavaScript](https://www.w3schools.com/html/html_scripts.asp)
* [JavaScript Tutorial](https://www.w3schools.com/js/default.asp)
* [JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)


