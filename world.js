function search(){
    var country = document.getElementById("country").value;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            document.getElementById("result").innerHTML = this.responseText
        }
    };
    
    if (document.getElementById('check').checked)
    {
        var url = "world.php?all=true";
    }
    else
    {
        var url = "world.php?country="+country;
    }
    
    request.open("GET",url,true);
    request.send("");
}