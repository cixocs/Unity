#pragma strict



var clickcount :int;
var racket1 :GameObject;

  
racket1 = GameObject.Find("racket1");

function Update () {


if(clickcount % 2 == 0) {
if(Input.GetMouseButtonDown (1)) {

Time.timeScale = 0;
GetComponent.<GUIText>().text = "Pause";
racket1.GetComponent(racketController).enabled = false;
clickcount++;

 }
}
else if(clickcount % 2 != 0) {
if(Input.GetMouseButtonDown (1)) {

Time.timeScale = 1;
GetComponent.<GUIText>().text = "";
racket1.GetComponent(racketController).enabled = true;
clickcount++;

 }
}

}