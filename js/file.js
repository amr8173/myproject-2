<p>Calculate Age in Days</p>

<input type="text" id="myInput" oninput="myFunction()">

<p id="demo"></p>

<script>
function myFunction() {
  var x = document.getElementById("myInput").value;
  document.getElementById("demo").innerHTML = "Number of Days: " + parseInt(x*365);
}
</script>