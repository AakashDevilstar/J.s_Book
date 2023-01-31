const inputArr = inputObjArr.map((element)=>{
    return getTag(element);
})
const aaki=document.getElementById('inputContainer');
for(let it of inputArr ){
    aaki.appendChild(it);
}
const bt=document.createElement('button');
bt.classList.add('btnclass');
bt.innerText='Save';
aaki.appendChild(bt);

const tb=document.getElementsByClassName("main-table")[0];
const tbnew=maketable();
tb.appendChild(tbnew);
window.addEventListener("load",localst);
bt.addEventListener("click",infoadd);