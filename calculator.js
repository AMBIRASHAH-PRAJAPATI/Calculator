const btns = document.querySelectorAll(".calbtn");
const disinput = document.querySelector(".calinput");
const disoutput = document.querySelector(".caloutput");
let input ="";
let output ="";

btns.forEach(btn => {
    const value = btn.dataset.key;
    btn.addEventListener("click", ()=>{
        switch(value){
            case 'Clear':
                input ="";
                disinput.innerHTML="";
                disoutput.innerHTML="";
                disoutput.classList.remove("bigcaloutput");
                disinput.classList.remove("smallcalinput");
                break;
            case 'del':
                input = input.slice(0,-1);
                disoutput.classList.remove("bigcaloutput");
                disinput.classList.remove("smallcalinput");
                calculate(input);
                break;
            case '=':
                disoutput.classList.add("bigcaloutput");
                disinput.classList.add("smallcalinput");
                calculate(input);
                break;
            default:
                input += value;
                disoutput.classList.remove("bigcaloutput");
                disinput.classList.remove("smallcalinput");
                calculate(input);
        }    
    });
});
// todo
const calculate =(input)=>{
    disinput.innerHTML = input;
      output = eval(findpercentage(input));
      disoutput.innerHTML = output;
}
// percentage % calculation
 const findpercentage =(input)=> {
    let inputslice = input.split("");
    for(var i=0; i<inputslice.length; i++)
    {  var k=i+1;
        if(inputslice[i]==="%")
        {
          if(inputslice[k] != undefined)
             inputslice[i]="/100*";
          else
          inputslice[i]="/100";
        }
    }
    return inputslice.join("");
 }