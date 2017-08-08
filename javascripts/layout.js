document.write('<link rel="stylesheet" href="/css/material.css">');
function CBL(con,lnk,fs){
    if(fs)return '<a class="block" href="'+lnk+'" style="font-size:'+fs+'px">'+con+'</a>';
    else if(document.body.clientWidth<=500)return '<a class="block" href="'+lnk+'" style="font-size:18px">'+con+'</a>';
        else return '<a class="block" href="'+lnk+'" style="font-size:30px">'+con+'</a>';
}
var base='  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header"> \
                <header class="mdl-layout__header"> \
                    <div class="mdl-layout__header-row"> \
                            <!-- Title --> \
                            <span class="mdl-layout-title">Math</span> \
                            <div class="mdl-layout-spacer" id="_spacer"></div> \
    	                    <input id="searchingBar" placeholder="Search for topics here"></input> \
                    <div id="searchingBox" height="300px"><ul id="searchingList"></ul></div> \
                    </div> \
                </header> \
                <div class="mdl-layout__drawer" style="overflow-y:hidden" id="container2"> \
                    <div style="overflow-y:scroll;overflow-x:hidden" id="container1"> \
                    <a class="block" href="/" style="font-size:36px;margin-top:15px;">Home</a> \
                    <a class="block" style="font-size:36px" target="y1" href="javascript:void(0);" id="y_1">Year 1</a> \
                    <div id="y1" class="hide"></div>\
                    <a class="block" style="font-size:36px" target="y2" href="javascript:void(0);" id=y_2>Year 2</a> \
                    <div id="y2" class="hide"></div>\
                    <a class="block" href="/search.html" style="font-size:36px">Search</a> \
                    <a class="block" href="/Tools/" style="font-size:30px">Maths Tools</a> \
                    <a class="block" href="/FurtherReadings/" style="font-size:30px">FurtherReadings</a> \
                    </div> \
                </div> \
                <main class="mdl-layout__content" id="body"> \
                    Content \
                </main> \
            </div> \
        ';

function layout(){
    var con=document.body.innerHTML;
    document.body.innerHTML=base.replace("Content",'<div class="page-content">'+con+'</div>');
    for(var i=0;i<Year1.length;i++)
        document.getElementById("y1").innerHTML+=CBL("&nbsp;  "+Year1[i],"/Grades/Year_"+1+"/"+replace(Year1[i])+".html",20);
    for(var i=0;i<Year2.length;i++)
        document.getElementById("y2").innerHTML+=CBL("&nbsp;  "+Year2[i],"/Grades/Year_"+2+"/"+replace(Year2[i])+".html",20);
    /*if(document.body.clientWidth<=500){
        $("#y_1").addClass("causeSlideOnMouse");
        $("#y_2").addClass("causeSlideOnMouse");*/
    if(document.body.clientWidth<=350)searchWidth="150px";
    else searchWidth="200px";
    //}else{
    $("#y_1").addClass("causeSlideOnClick");
    $("#y_2").addClass("causeSlideOnClick");
    //}
    document.getElementById("container1").style.height="100%";
    document.getElementById("container1").style.width=document.getElementById("container2").offsetWidth+18+"px";
    fillSearch("searchingList");
    oliverC.refresh();
}