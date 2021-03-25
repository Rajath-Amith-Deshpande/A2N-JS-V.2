function fn(){
    var pRef = document.createElement('h1')
    var content = document.createTextNode("Welcome to Js")
    pRef.append(content)

    var bodyRef = document.querySelector('body')

    bodyRef.appendChild(pRef)
}
fn()