
<script>
        
        alert("you called javax");
        document.getElementById("fromPhone").disabled=true;function myFunctionchang(){var b;var c=document.getElementById("mySelect").value;alert(c);
        var a=document.getElementById("birthdaytime").value;var e=new Date(a);e.setDate(e.getDate()-c);let text=new Date(e).toUTCString();alert(" you selected "+text);document.getElementById("duedate").value=text;if(document.getElementById("duedate").value=="Invalid Date"){alert("invalid select the date and time  first");document.getElementById("duedate").style.color="#ff0000"}else{document.getElementById("duedate").style.color=""}};</script>
