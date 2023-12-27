<script>    
function submitForm() { 
    // Get form values 
    var firstName = document.getElementById('firstName').value; 
    var lastName = document.getElementById('lastName').value; 
    var dob = document.getElementById('dob').value; 
    var qstationName = document.getElementById('qstation-name').value; 
    // Create JSON object 
    var json = { "firstName": firstName, "lastName": lastName, "dob": dob, "qstation-name": qstationName }; 
    // Convert JSON object to string 
    var jsonString = JSON.stringify(json); 
    // Display JSON string in the paragraph 
    document.getElementById('result').innerHTML = jsonString; }
</script>