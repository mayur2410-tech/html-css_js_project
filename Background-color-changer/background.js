function redbtn(){
    document.getElementById('body').style.backgroundColor="red";
    document.getElementById('text').style.color="red"
}

function orangebtn(){
    document.getElementById('body').style.backgroundColor="orange";
    document.getElementById('text').style.color="orange"
}

function yellowbtn(){
    document.getElementById('body').style.backgroundColor="yellow";
    document.getElementById('text').style.color="yellow"
}
function greenbtn(){
    document.getElementById('body').style.backgroundColor="green";
    document.getElementById('text').style.color="green"
}

function bluebtn(){
    document.getElementById('body').style.backgroundColor="blue";
    document.getElementById('text').style.color="blue"
}

function indigobtn(){
    document.getElementById('body').style.backgroundColor="indigo";
    document.getElementById('text').style.color="indigo"
}

function violetbtn(){
    document.getElementById('body').style.backgroundColor="violet";
    document.getElementById('text').style.color="violet"
}

function custombtn(){
    const color=document.getElementById('customselector').value
    document.getElementById('body').style.backgroundColor=color;
    document.getElementById('text').style.color=color
}