#pragma strict


var obj :GameObject;
var script :kara;
var ball :Transform;
var guiObj :GameObject;
var racket1 :GameObject;
var racket2 :GameObject;


racket1 = GameObject.Find("racket1");
racket2 = GameObject.Find("racket2");
guiObj = GameObject.Find("player1win");
obj = GameObject.Find("kara");
script = obj.GetComponent(kara);

function Start () {
}


function OnCollisionEnter (collision : Collision) {


if(collision.gameObject.CompareTag('Player')) {
   Destroy(collision.gameObject);
   Score1.score += 1;  
   
   racket1.transform.position = Vector3(0, 1.95, 5);
   racket2.transform.position = Vector3(0, 1.95, 15);

if(script.life > 0){

var off = Vector3(-0.399, -0.15, -12.5);

Instantiate(ball, transform.position + off, transform.rotation);


script.life--;


}

}
}


function Reset () {
 guiObj.GetComponent.<GUIText>().text = "";
 Time.timeScale = 1;

 racket1.GetComponent(racketController).enabled = true;

 racket1.transform.position = Vector3(0, 1.95, 5);
 racket2.transform.position = Vector3(0, 1.95, 15);

}

function Update () {


if(Score1.score == 11) {

guiObj.GetComponent.<GUIText>().text = "Player1 Winner!";

Time.timeScale = 0;

racket1.GetComponent(racketController).enabled = false;

}

}