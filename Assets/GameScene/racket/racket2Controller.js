#pragma strict

var Accel = 1000.0;

function Update () {
  GetComponent.<Rigidbody>().AddForce(
    transform.right * Input.GetAxisRaw( "Horizontal" ) * Accel * 2,
    ForceMode.Impulse
  );
  GetComponent.<Rigidbody>().AddForce(
    transform.forward * Input.GetAxisRaw( "Vertical" ) * Accel * 2,
    ForceMode.Impulse
  );
}