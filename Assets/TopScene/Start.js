#pragma strict



var frame :int;
var Scenechange :GameObject;

Scenechange = GameObject.Find("Start_button");


function Start () {

}


function Update () {

frame++;

if (frame / 10 % 2 == 0) {
    GetComponent.<GUIText>().enabled = false;
}
else{
    GetComponent.<GUIText>().enabled = true;
}

if(Input.GetMouseButtonDown(0)) {

if(Scenechange.GetComponent.<GUIText>().HitTest(Input.mousePosition)){
Application.LoadLevel("hokkei");
}

}

}