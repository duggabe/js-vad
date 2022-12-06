# Using JavaScript to modify MediaWiki pages

This project is a Proof of Concept to make certain pages of the [GNU Radio Wiki](https://wiki.gnuradio.org/index.php/Main_Page) be adaptive to the user's GNU Radio software version (or desired version) so that sections which don't apply would be hidden. This would make cleaner page presentations and reduce the clutter of unrelated information.

The project is called Version-adaptive Documentation (VAD). It based on methods described in [js-html](https://github.com/duggabe/js-html).

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

* Open `Phase2_Message_Debug.html` in your browser to see the test page.

* In the Navigation menu on the left, click one of the versions and then click 'Submit'.

* The page should refresh with sections you did not choose hidden.

## How to add HTML markup to make a Wiki page respond to the VAD script

The fact that HTML can be used when editing a MediaWiki page makes it easy to add the elements used with VAD. The following instructions will apply to the completed project, but for Phase 1, they are only for testing.

1. Open the desired MediaWiki page in Edit mode.
2. Insert the following as the first line of text. This flags the page as having been marked up for VAD, and will generate the menu for version selection.
```
<span data-vad="gr_vad"></span>
```
3. For each section of content which applies specifically to one GNU Radio version, surround it with `<div data-vad="3.9">` (using the applicable version) and `</div>` lines. A section can include any amount of headings, paragraphs, and other content.

Any portions of the page which apply to all GNU Radio versions should not be enclosed in section elements.

Open `Phase2_Message_Debug.html` in a text editor to see how its sections are marked. If you wish, you can change the content between lines 28 and 69 to experiment on your own. Note that this is just a static page for the Phase 2 testing.

The script in lines 70 and 71 is only for Phase 2 initial testing. For the real MediaWiki, the script will be inserted by MediaWiki from the content of [MediaWiki:Common.js](https://wiki.gnuradio.org/index.php?title=MediaWiki:Common.js)

## References

* [js-html](https://github.com/duggabe/js-html)
* [HTML JavaScript](https://www.w3schools.com/html/html_scripts.asp)
* [JavaScript Tutorial](https://www.w3schools.com/js/default.asp)
* [JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)


