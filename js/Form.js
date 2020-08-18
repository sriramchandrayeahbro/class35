class Form {
constructor (){

}
display(){
    var title=createElement('h3')
    title.html("ilegalRACING")
    title.position(130,0)
    var input=createInput("name")
    var button=createButton('play')
    var greeting=createElement('h1')
    input.position(130,160)
    button.position(250,200)
    button.mousePressed(function(){
        input.hide()
        button.hide()
        var name=input.value()
        playerCount+=1
        player.update(name)
        player.updateCount(playerCount)
        greeting.html("no place for lossers "+ name)
        greeting.position(110,160)
    })
}
}