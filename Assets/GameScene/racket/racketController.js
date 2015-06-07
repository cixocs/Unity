#pragma strict


function Update () {
  
  var x : float = Input.GetAxis("Mouse X");
  var z : float = Input.GetAxis("Mouse Y");
  

  transform.Translate(x, 0, z);
  
}