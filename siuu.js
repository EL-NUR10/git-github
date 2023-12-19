function changeContents(){
    document.getElementById("sample").innerHTML="Abracadabra, hahahaha";
}
function changeStyles(){
    document.getElementById("sample").style.fontSize="40px";    }
function show() {
    document.getElementById("sample").style.display="block";
}
function hide(){
    document.getElementById("sample").style.display="none";
}
function changeImage() {
    document.getElementById("samplee").src="Pictures/Leo.jpg";
}
function hidee(){
    document.getElementById("samplee").style.display="none";
}
    function showw(){
    document.getElementById("samplee").style.display="block";
}
function getValue(){
    window.alert(document.getElementById("demo").value);
}
function getvalue(){
    alert(document.getElementById("Demo").checked);
}
function getdate(){
    alert(document.getElementById("Demo1").value);
}
function readFile(){
    var reader= new FileReader();
    var file= document.getElementById('demoo').files[0];
    reader.onload=function(e){
        document.getElementById('result').src=e.target.result;
    }
    reader.readAsDataURL(file);
}
function GetValue(){
    document.getElementById("demooo").value;
}
function GETvalue(){
    var value= document.getElementById("comment").value;
    alert(value);
}
function GETVALUE(){
    var Value= document.getElementById("fruit").value;
    alert(Value);
}
function GETVALUES(){
    var options=document.getElementById("Fruit").options;
    var options_count=document.getElementById("Fruit").options.length;
    var valuess= [];
    for(var i=0; i< options_count; i++){
        if(options[i].selected){
        valuess.push(options[i].value);
    }
}
alert(JSON.stringify(value));
}
