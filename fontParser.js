var icons = document.querySelectorAll(".glyph")
var formatString = ""
for (var i=0;i<icons.length;i++){
    var name = (icons[i].querySelector(".mls").innerText.replace("icon-",""))
    var value = (icons[i].querySelector("input.unit").value)
    formatString += 'static let '+name+' = "\\u{'+value+'}"\n'
}
console.log(formatString)
