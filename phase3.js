"use strict"

/* Any JavaScript here will be loaded for all users on every page load. */
/* phase3 18 Dec 2022 */

var releases = ["All", "3.10", "3.9", "3.8"];
var gr_version = "";

var _nav = document.getElementById ("gr_vad");
if (_nav != null)    // found <span>
    {
    console.log ("Version-adaptive documentation");
    var w_loc = window.location.href;
    const url1 = new URL(w_loc);
    var url2 = url1.toString();
    var url3 = url2.replace("?title=","/");
    var pos1 = url3.indexOf ("?");
    var url;
    if (pos1 > 0)
        url = url3.slice (0, pos1);
    else
        url = url3;
    console.log ("phase3()", url);
    var p1 = url1.searchParams.get('ver1');
    if (p1 != null)
        gr_version = p1;
    var ver_len = gr_version.length;
    console.log (gr_version, ver_len);
    var t1 = document.createElement ("p");
    t1.innerHTML = "<b>Version-adaptive document.<br>Customize this page by clicking a Version to display:<br></b>";
    var anchor = [];
    var k;
    for (k = 0; k < (releases.length); k++)
        {
        if (k == 0)
            {
            anchor[k] = '<a href="' + url + '">' +  releases[k] + "</a>";
            }
        else
            {
            anchor[k] = "<a href=\"" + url + "?ver1=" + releases[k] + "\">" +  releases[k] + "</a>";
            }
        // console.log (anchor[k]);
        t1.innerHTML += (anchor[k] + "&nbsp;&nbsp;&nbsp;&nbsp;");
        }
    _nav.appendChild (t1);
//  look for divs
    if (gr_version.length > 0)
        {
        var element = document.getElementsByTagName("div");
        var _len = element.length;
        // console.log (_len, "divs found");
        var k;
        for (k = 0; k < _len; k++)
            {
            var _ver = element[k].getAttribute("data-vad");
            if (_ver != null)
                {
                // console.log ("div version is ", _ver);
                if ((_ver.indexOf (gr_version)) == -1)      // not found
                    {
                    element[k].setAttribute ("hidden", "true");
                    }
                }
            }
        }       // version selected
    }       // found span

