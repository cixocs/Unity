#pragma strict

var Speed = 20.0;
		
function OnTriggerEnter (collider : Collider) {
if(collider.gameObject.CompareTag('racket1')) {
GetComponent.<Rigidbody>().AddForce(
			( transform.forward + transform.right ) * Speed,
			ForceMode.VelocityChange );
 }
}

function OnCollisionEnter () {
    GetComponent.<Rigidbody>().velocity = GetComponent.<Rigidbody>().velocity.normalized * 30;
 
    if (Mathf.Abs(GetComponent.<Rigidbody>().velocity.y) < 5) {
        GetComponent.<Rigidbody>().velocity.y *= 5;
    }
    if (Mathf.Abs(GetComponent.<Rigidbody>().velocity.x) < 5) {
        GetComponent.<Rigidbody>().velocity.x *= 5;
    }
 
}

function Update () {

}