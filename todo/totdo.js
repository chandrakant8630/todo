// let divtask= document.createElement('div');
// // let body=document.getElementsByTagName('body');
// let outputdiv= document.createElement('div');
// let input = document.createElement('input');
// input.setAttribute('placeholder','ADD task Here');
// input.setAttribute('type','text');
// let ad_taskbtn=document.createElement('button');
// ad_taskbtn.textContent="add";
// divtask.append(input,ad_taskbtn);
// document.body.append(divtask,outputdiv);
// if(input.value!=""){
//     addtask();
// }else{
//     alert('please enter something');
// }

// function addtask(){
//     let divtem=document.createElement('div');
//     let span=document.createElement('span');
//    span.innerText=input.value;
//     //divtem.append(span);
//     outputdiv.append(divtem);
// }
// // function addtaskbtn(){

// // }




// main div as container

document.body.style.background="black";

let divtask=document.createElement('div');
document.body.append(divtask);
// divtask.style.width="100%";
// //divtask.style.height="100vh";
divtask.style.padding="30px";
divtask.style.backgroundColor="black";
let hed=document.createElement('h1');
hed.textContent="TODO APP";
hed.style.color="red";
hed.style.textAlign="center";

// div for contains input 


let divinput=document.createElement('div');
// divinput.style.width="100%"
// divinput.style.height="180px";
divinput.style.backgroundColor="white";
divinput.style.textAlign="center";
divtask.appendChild(hed);
divtask.appendChild(divinput);


//    intput for task ///*css*/`
    
let input = document.createElement('input');
input.setAttribute("placeholder","enter your task here");
input.setAttribute("type","text");
input.style.margin="20px";
// input.style.marginLeft="20px";
let input_btn=document.createElement('button');
input_btn.textContent="Add";
//input_btn.setAttribute=('id',"i_btn");
divinput.append(input,input_btn);

//function button  operations

 
input_btn.onclick=function(){
    if(input.value!=""){
        addtsk();
    }
    else{
        alert("enter your task please")
    }
}

function addtsk(){
    let divtemp=document.createElement('div');
    divtemp.style.borderBottom="1px dotted black";
    let task = document.createElement('h4');
    task.textContent=input.value;
    task.style.textAlign="center";
    let chek_btn=document.createElement('button');
    chek_btn.innerHTML="&check;";
    chek_btn.style.margin="8px";
    let cross_btn=document.createElement('button');
    cross_btn.innerHTML="&cross;";
    task.append(chek_btn);
    task.append(cross_btn);
    divtemp.append(task);
    divinput.append(divtemp);


    //  check button click 



    chek_btn.onclick=function(){
    if(task.style.textDecoration!="line-through"){
        task.style.textDecoration="line-through";
    }
    else{
      task.style.textDecoration="none";

    }
}

cross_btn.onclick=function(){
    divtemp.remove(task);
}
}
