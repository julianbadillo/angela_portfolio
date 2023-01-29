//--book flip--

const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book= document.querySelector("#book");


let currentLocation = 1;
let numOfPapers = 5;
let maxLocation = numOfPapers + 1;
const paper = [];
for(let i=1; i <= numOfPapers; i++){
    const paperi = document.querySelector(`#p${i}`);
    paper.push(paperi);
}

//-- events listeners

prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);


function openBook(){
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(25%)";
    nextBtn.style.transform = "translateX(25%)";
}


function closeBook(isAtBeginning){
    if(isAtBeginning){
        book.style.transform = "translateX(25%)";
    }else{
        book.style.transform = "translateX(50%)";
    }

    prevBtn.style.transform = "translateX(25%)";
    nextBtn.style.transform = "translateX(25%)";
}


function goNextPage(){
    if(currentLocation < maxLocation){
        // first page
        if(currentLocation == 1) {
            openBook();
        }
        // last page
        else if(currentLocation == numOfPapers) {
            closeBook();
        }
        let i = currentLocation - 1;
        paper[i].classList.add("flipped");
        paper[i].style.zIndex = currentLocation;
        currentLocation++;
    } 

}

function goPrevPage(){
    if(currentLocation > 1) {
        // first page
        if (currentLocation == 2) {
            closeBook();
        }
        // last page
        if (currentLocation == maxLocation) {
            openBook();
        }
        let i = currentLocation - 2;
        paper[i].classList.remove("flipped");
        paper[i].style.zIndex = maxLocation - i + 1;
        currentLocation--;   
    }
}