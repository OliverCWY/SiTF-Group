document.write('<meta charset="utf-8">');
document.write('<meta name="viewport" content="width=device-width, initial-scale=1">');
document.write('<script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>');
//document.getElementById("").innerHTML+=('');
//document.write('');
function include(src){
	document.write('<script src="/javascripts/'+src+'.js"></script>');
}
function check(id,ans,mode){
    if(mode==1)
        if(document.getElementById("ans"+id).value==ans){$("#res"+id).html("<i><u>Correct!</u></i>");$("#res"+id).css("color","green");}
        else {if(document.getElementById("ans"+id).value!=""){$("#res"+id).html("<i><u>Wrong!</u></i>");$("#res"+id).css("color","red");}}
    else {
        var choice=$("#ans"+id).children("input.choice");
        for(var i=0;i<choice.length;i++){
            if(choice[i].checked)
                if(choice[i].value==ans){$("#res"+id).html("<i><u>Correct!</u></i>");$("#res"+id).css("color","green");}
                else {$("#res"+id).html("<i><u>Wrong!</u></i>");$("#res"+id).css("color","red");}
        }
    }
}
include("lib/w3");
include('lib/material/main');
include("style");
include("lib/fillSearch");
include("layout");