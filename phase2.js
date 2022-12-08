/* phase2.js */

//  changed <article> to <span>
//  changed <section> to <div>

var gr_version = "";

document.body.onload = function() {phase2()};

function phase2()
    {
    var w_loc = window.location.href;
    const url = new URL(w_loc);
    console.log ("phase2()", w_loc);
    var p1 = url.searchParams.get('ver1');
    var p2 = url.searchParams.get('ver2');
    var p3 = url.searchParams.get('ver3');
    console.log (p1,p2,p3);
    if ((p1 == null) && (p2 == null) && (p3 == null))
        {       // first pass
        var _art = document.getElementsByTagName("span");
        if (_art.length > 0)    // found <span>
            {
            console.log ("<span> found");
            var _art1 = _art[0].getAttribute("data-vad");
            if (_art1 == "gr_vad")
                {
                console.log ("found data-vad tag in <span>");
                var _nav = document.getElementsByClassName("vector-menu-content-list");
                var _br = document.createElement("br");
                _nav[0].appendChild (_br);
                var _li1 = document.createElement("li");
                _li1.innerHTML = "<br>Customize this page:";
                var _form1 = document.createElement("form");
               _form1.setAttribute("action", "#");       // action
// ver1 3.8
                var _inp1 = document.createElement("input");
                _inp1.setAttribute("type", "checkbox");
                _inp1.setAttribute("id", "_ver1");
                _inp1.setAttribute("name", "ver1");
                _inp1.setAttribute("value", "3.8");
                _form1.appendChild (_inp1);
                var _lbl1 = document.createElement("label");
                _lbl1.setAttribute("for", "_ver1");
                _lbl1.innerHTML = " 3.8";
                _form1.appendChild (_lbl1);
                var _nbsp = document.createTextNode("  ");
                _form1.appendChild (_nbsp);
// ver2 3.9
                var _inp2 = document.createElement("input");
                _inp2.setAttribute("type", "checkbox");
                _inp2.setAttribute("id", "_ver2");
                _inp2.setAttribute("name", "ver2");
                _inp2.setAttribute("value", "3.9");
                _form1.appendChild (_inp2);
                var _lbl2 = document.createElement("label");
                _lbl2.setAttribute("for", "_ver2");
                _lbl2.innerHTML = " 3.9";
                _form1.appendChild (_lbl2);
                _form1.appendChild (_nbsp);
// ver3 3.10
                var _inp3 = document.createElement("input");
                _inp3.setAttribute("type", "checkbox");
                _inp3.setAttribute("id", "_ver3");
                _inp3.setAttribute("name", "ver3");
                _inp3.setAttribute("value", "3.10");
                _form1.appendChild (_inp3);
                var _lbl3 = document.createElement("label");
                _lbl3.setAttribute("for", "_ver3");
                _lbl3.innerHTML = " 3.10";
                _form1.appendChild (_lbl3);
                _form1.appendChild(_br);
                _form1.appendChild(_br);
// submit
                var _inp4 = document.createElement("input");
                _inp4.setAttribute("type", "submit");
                _inp4.setAttribute("value", "Submit");
                _form1.appendChild (_inp4);
                _li1.appendChild (_form1);
                _nav[0].appendChild (_li1);
                }   // found data-vad tag in <span>
            }   // end found <span>
        }   // first pass
    else
        {   // have selections / second pass
        console.log ("phase2 second pass");
        if (p1 != null)
            {
            gr_version += p1;
            gr_version += ", ";
            }
        if (p2 != null)
            {
            gr_version += p2;
            gr_version += ", ";
            }
        if (p3 != null)
            {
            gr_version += p3;
            }
        var ver_len = gr_version.length;
        console.log (gr_version, ver_len);
        if (gr_version.endsWith (", "))
            {
            var temp = gr_version.slice (0, ver_len-2);
            gr_version = temp;
            }
        var _nav = document.getElementsByClassName("vector-menu-content-list");
        var _br = document.createElement("br");
        _nav[0].appendChild (_br);
        var _li1 = document.createElement("li");
        _li1.innerHTML = "<br>Customize this page:";
        var _form1 = document.createElement("form");
        _form1.setAttribute("action", "#");       // action
// ver1 3.8
                var _inp1 = document.createElement("input");
                _inp1.setAttribute("type", "checkbox");
                _inp1.setAttribute("id", "_ver1");
                _inp1.setAttribute("name", "ver1");
                _inp1.setAttribute("value", "3.8");
                if ((gr_version.indexOf ("3.8")) != -1)      // found
                    _inp1.setAttribute ("checked", "true");
                _form1.appendChild (_inp1);
                var _lbl1 = document.createElement("label");
                _lbl1.setAttribute("for", "_ver1");
                _lbl1.innerHTML = " 3.8";
                _form1.appendChild (_lbl1);
                var _nbsp = document.createTextNode("  ");
                _form1.appendChild (_nbsp);
// ver2 3.9
                var _inp2 = document.createElement("input");
                _inp2.setAttribute("type", "checkbox");
                _inp2.setAttribute("id", "_ver2");
                _inp2.setAttribute("name", "ver2");
                _inp2.setAttribute("value", "3.9");
                if ((gr_version.indexOf ("3.9")) != -1)      // found
                    _inp2.setAttribute ("checked", "true");
                _form1.appendChild (_inp2);
                var _lbl2 = document.createElement("label");
                _lbl2.setAttribute("for", "_ver2");
                _lbl2.innerHTML = " 3.9";
                _form1.appendChild (_lbl2);
                _form1.appendChild (_nbsp);
// ver3 3.10
                var _inp3 = document.createElement("input");
                _inp3.setAttribute("type", "checkbox");
                _inp3.setAttribute("id", "_ver3");
                _inp3.setAttribute("name", "ver3");
                _inp3.setAttribute("value", "3.10");
                if ((gr_version.indexOf ("3.10")) != -1)      // found
                    _inp3.setAttribute ("checked", "true");
                _form1.appendChild (_inp3);
                var _lbl3 = document.createElement("label");
                _lbl3.setAttribute("for", "_ver3");
                _lbl3.innerHTML = " 3.10";
                _form1.appendChild (_lbl3);
                _form1.appendChild(_br);
                _form1.appendChild(_br);
// submit
                var _inp4 = document.createElement("input");
                _inp4.setAttribute("type", "submit");
                _inp4.setAttribute("value", "Submit");
                _form1.appendChild (_inp4);
                _li1.appendChild (_form1);
                _nav[0].appendChild (_li1);
//
        if (gr_version.length > 0)
            {
            var element = document.getElementsByTagName("div");
            for (let i = 0; i < element.length; i++)
                {
                var _ver = element[i].getAttribute("data-vad");
                console.log ("div version is ", _ver);
                if ((gr_version.indexOf (_ver)) == -1)      // not found
                    {
                    element[i].setAttribute ("hidden", "true");
                    }
                }
            }   // end have selections
        }   // second pass
    }

