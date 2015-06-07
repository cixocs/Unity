#pragma strict


static var score : int;


function Start () {

}

function Reset () {
 score = 0;
}

function Update () {

this.GetComponent.<GUIText>().text = "" + score;

}