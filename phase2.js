"use strict"

/* Any JavaScript here will be loaded for all users on every page load. */
/* phase3 16 Dec 2022 */

var gr_version = "";

var _art = document.getElementsByTagName("span");
if (_art.length > 0)    // found <span>
    {
    // console.log (_art.length, "spans found");
    var _art1 = _art[0].getAttribute("data-vad");
    if (_art1 == "gr_vad")
        {
        console.log ("Version-adaptive documentation");
        var w_loc = window.location.href;
        const url1 = new URL(w_loc);
        var url2 = url1.toString();
        var url = url2.replace("?title=","/");
        console.log ("phase3()", url);
        var p1 = url1.searchParams.get('ver1');
        var p2 = url1.searchParams.get('ver2');
        var p3 = url1.searchParams.get('ver3');
        // console.log (p1,p2,p3);
        if (p1 != null)
            {
            gr_version += p1;
            gr_version += ",";
            }
        if (p2 != null)
            {
            gr_version += p2;
            gr_version += ",";
            }
        if (p3 != null)
            {
            gr_version += p3;
            gr_version += ",";
            }
        var ver_len = gr_version.length;
        // console.log (gr_version, ver_len);
        if (gr_version.endsWith (","))
            {
            var temp = gr_version.slice (0, ver_len-1);
            gr_version = temp;
            }
        var ver_len = gr_version.length;
        // console.log (gr_version, ver_len);
        var _nav = document.getElementById("p-tb")
        var _br = document.createElement("br");
        _nav.appendChild (_br);
        var _li1 = document.createElement("li");
        _li1.innerHTML = "<br>Customize this page:<br>check only one.";
        _nav.appendChild (_li1);

        var _form1 = document.createElement("form");
        _form1.setAttribute("action", url);       // action
// ver1 3.8
        var _inp1 = document.createElement("input");
        _inp1.setAttribute("type", "checkbox");
        _inp1.setAttribute("id", "_ver1");
        _inp1.setAttribute("name", "ver1");
        _inp1.setAttribute("value", "3.8");
        if (gr_version == "3.8")        // found
            _inp1.setAttribute ("checked", "true");
        _form1.appendChild (_inp1);
        var _lbl1 = document.createElement("label");
        _lbl1.setAttribute("for", "_ver1");
        _lbl1.innerHTML = " 3.8<br>";
        _form1.appendChild (_lbl1);
// ver2 3.9
        var _inp2 = document.createElement("input");
        _inp2.setAttribute("type", "checkbox");
        _inp2.setAttribute("id", "_ver2");
        _inp2.setAttribute("name", "ver2");
        _inp2.setAttribute("value", "3.9");
        if (gr_version == "3.9")        // found
            _inp2.setAttribute ("checked", "true");
        _form1.appendChild (_inp2);
        var _lbl2 = document.createElement("label");
        _lbl2.setAttribute("for", "_ver2");
        _lbl2.innerHTML = " 3.9<br>";
        _form1.appendChild (_lbl2);
// ver3 3.10
        var _inp3 = document.createElement("input");
        _inp3.setAttribute("type", "checkbox");
        _inp3.setAttribute("id", "_ver3");
        _inp3.setAttribute("name", "ver3");
        _inp3.setAttribute("value", "3.10");
        if (gr_version == "3.10")       // found
            _inp3.setAttribute ("checked", "true");
        _form1.appendChild (_inp3);
        var _lbl3 = document.createElement("label");
        _lbl3.setAttribute("for", "_ver3");
        _lbl3.innerHTML = " 3.10<br>";
        _form1.appendChild (_lbl3);
        _form1.appendChild(_br);
// submit
        var _inp4 = document.createElement("input");
        _inp4.setAttribute("type", "submit");
        _inp4.setAttribute("value", "Submit");
        _form1.appendChild (_inp4);
        _nav.appendChild (_form1);

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
        }       // found gr-vad
    }       // found span

