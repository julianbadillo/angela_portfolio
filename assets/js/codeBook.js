//--book flip--

const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book= document.querySelector("#processbook");


let currentLocation = 1;
let numOfSheets = 12;
let maxLocation = numOfSheets + 1;
const sheet = [];
for(let i=1; i <= numOfSheets; i++){
    const sheeti = document.querySelector(`#s${i}`);
    sheet.push(sheeti);
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
        else if(currentLocation == numOfSheets) {
            closeBook();
        }
        let i = currentLocation - 1;
        sheet[i].classList.add("flipped");
        sheet[i].style.zIndex = currentLocation;
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
        sheet[i].classList.remove("flipped");
        sheet[i].style.zIndex = maxLocation - i + 1;
        currentLocation--;   
    }
}