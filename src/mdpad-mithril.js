function minput({ 
      title = "", 
      mdpad = "", 
      type = "number", 
      step = 1, 
      min = 0, 
      value = 0, 
      groupclass = "",
      labelclass = "",
    }={}) {
    return m(".form-group." + groupclass,
             m("label.control-label." + labelclass, title),
             m("input.form-control", {mdpad:mdpad, type:type, step:step, min:min, value:value}));
}

function mselect({
      title = "", 
      mdpad = "", 
      options = "", 
      selected = "",
      groupclass = "",
      labelclass = "",
    }={}) {
    var options = options.map(x => m("option", (x == selected) ? {selected: "selected"} : {}, x));
    return m(".form-group." + groupclass,
             m("label.control-label." + labelclass, title),
             m("select.form-control", {mdpad:mdpad}, options));
}

function mcard(title, content, doshow) {
  var idref = "ref" + Math.random().toString().substring(2,15);
  return m(".card",
            m(".card-header",
              m(".mb-0",
                m("button.btn.btn-link", {"data-toggle":"collapse", "data-target":"#" + idref}, title, ))),
            m(".collapse" + (doshow ? ".show" : "") + "#" + idref,
              m(".card-body", content, )));
}


function mtable(tbl, {
      tableclass = "table-striped", 
      theadclass = "", 
    }={}) {
    var keys = Object.getOwnPropertyNames(tbl);
    var idx = Array(keys.length).fill()
    var rows = []
    for (i = 0; i < tbl[keys[1]].length; i++) {
        var cells = []
        for (j = 0; j < keys.length; j++) {
            cells.push(m("td", tbl[keys[j]][i]))
        }
        rows.push(m("tr", cells))
    }
    return m("table.table." + tableclass,
             m("thead." + theadclass,
               m("tr", keys.map((x) => m("th", x)))),
             m("tbody",
               rows))
}
