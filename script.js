let container=[]
function onload(){
	container=[]
    let d= document.getElementsByClassName("imagecontainer")[0]
    let e= document.getElementsByClassName("buttoncontainer")[0]
    let f= document.getElementsByClassName("message")[0]
    d.innerHTML=""
    e.innerHTML=""
    f.innerHTML=""
	const img1= document.createElement('img')
    img1.className="img1"
    img1.id="img1"
    img1.src="https://img.freepik.com/free-photo/people-sitting-bench-forest-night-generative-ai_260559-472.jpg?w=740&t=st=1688396580~exp=1688397180~hmac=caaf81f1d07bc4835276dfd5bd14347fb5eb4819d5ee0b3efdd3fd93222ca2dd"
    img1.setAttribute("data-ns-test", "img1");
    const img2= document.createElement('img')
    img2.className="img2"
    img2.id="img2"
    img2.setAttribute("data-ns-test", "img2");
    img2.src="https://img.freepik.com/premium-photo/abstract-colorful-oblique-lines-background-colorful-background_613001-1132.jpg?w=740"
    const img3= document.createElement('img')
    img3.className="img3"
    img3.id="img3"
    img3.setAttribute("data-ns-test", "img3");
    img3.src="https://img.freepik.com/premium-photo/future-is-now_360074-14007.jpg?w=740"
    const img4= document.createElement('img')
    img4.className="img4"
    img4.id="img4"
    img4.setAttribute("data-ns-test", "img4");
    img4.src="https://img.freepik.com/free-photo/vintage-grunge-paper-background_1048-10911.jpg?w=740&t=st=1688396713~exp=1688397313~hmac=b34dc47a6752ac1008ab673d9419ab362e3096f27a6f80527d46ac3d670210ab"
    const img5= document.createElement('img')
    img5.className="img5"
    img5.id="img5"
    img5.setAttribute("data-ns-test", "img5");
    img5.src="https://img.freepik.com/premium-photo/pastel-orange-watercolour-background_199112-162.jpg?w=740"
    let randomnum= Math.floor((Math.random() * 5) + 1);
    const randomimg= document.createElement('img')
    randomimg.setAttribute("data-ns-test", `img${randomnum}`);
    randomimg.id="img6"
    console.log(`img${randomnum}`)
    randomimg.className=`img${randomnum}`
    let gh=`img${randomnum}`
    let finalresult=[]
    finalresult.push(img1,img2,img3,img4,img5)
    for(let i=0;i<finalresult.length;i++){
        if(finalresult[i].className===`img${randomnum}`){
            randomimg.src=finalresult[i].src
            break;
        }
    }
    finalresult.push(randomimg)
    for (let i = finalresult.length - 1; i > 0; i--) {  
        let j = Math.floor(Math.random() * (5));      
        let temp = finalresult[i];
        finalresult[i] = finalresult[j];
        finalresult[j] = temp;
    }
    renderimages(finalresult)
}
function renderimages(result){
let imgc= document.getElementsByClassName("imagecontainer")[0]
for(let i=0;i<result.length;i++){
    imgc.append(result[i])
    result[i].addEventListener("click",checker)
}
function checker(event){
let tempert=document.getElementById(event.target.id)
tempert.style.border="solid 10px lightblue"    
console.log(event)
if(container.length>1 && document.getElementById("verify") !== undefined){
    let ver= document.getElementById("verify")
    ver.remove()
}
if(container.length===0){
    container.push(event.target.className)
    let reset = document.createElement("button")
    reset.innerText="RESET"
    reset.id="reset"
    reset.onclick= onload
    let df = document.getElementsByClassName("buttoncontainer")[0]
    df.append(reset)
}
else if(container.length===1){
    container.push(event.target.className)
    let verify = document.createElement("button")
    verify.innerText="VERIFY"
    verify.id="verify"
    verify.onclick= fncheck
    let df = document.getElementsByClassName("buttoncontainer")[0]
    df.append(verify)
}
}
}
function fncheck(){
    let p=document.createElement("p")
    p.id="para"
if(container[0]===container[1]){
    p.innerText="You are a human. Congratulations!"
}
else{
    p.innerText="We can't verify you as a human. You selected the non-identical tiles."
}
let verify=document.getElementById("verify")
let message=document.getElementsByClassName("message")[0]
message.append(p)
verify.remove()
}