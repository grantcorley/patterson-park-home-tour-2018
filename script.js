//console.log('js is ready');

//const houses = document.getElementsByClassName("houses")[0];

const myURL = 'https://squareup.com/store/ppna/item/home-tour-day-of-ticket'

const image = document.getElementsByTagName("main")[0];
const button = document.getElementsByTagName("button")[0];


const imageScale = 1.5;
let imageSize;
let topMargin;
let leftMargin;


function checkDimensions(){

    //console.log("checkDimensions()");

    const globalWidth = window.innerWidth;
    const globalHeight = window.innerHeight;
    
    //console.log(`viewport width = ${globalWidth}` );
    //console.log(`viewport height = ${globalHeight}` );

    if(globalWidth < globalHeight){
        imageSize = (globalWidth*imageScale);
    } else if(globalHeight < globalWidth){
        imageSize = (globalHeight*imageScale);
    } else if(globalHeight === globalWidth){
        imageSize = (globalWidth*imageScale);
    }

        topMargin = getTopMargin(imageSize, globalHeight);
        leftMargin = getLeftMargin(imageSize, globalWidth);

         image.style.width = (imageSize) + "px";
         image.style.height = (imageSize) + "px";
         image.style.marginTop = topMargin + "px";
         image.style.marginLeft = leftMargin + "px";

}


function getLeftMargin(imageSize, globalWidth){
    
    if(imageSize > globalWidth){      
        var margLeft = 0 - ((imageSize - globalWidth)/2)
        return margLeft;
    }

    else if(globalWidth > imageSize){
        margLeft = (globalWidth - imageSize)/2;
        return margLeft;
    }

    else{
        return 0;
    }
}


function getTopMargin(imageSize, globalHeight){
   
    if(imageSize > globalHeight){
        var margTop = 0 - ((imageSize - globalHeight)/2);
        return margTop;
    }

    else if(globalHeight > imageSize){
        margTop = (globalHeight - imageSize)/2;        
        return margTop;
    }

    else{
        return 0;
    }

}


document.addEventListener("DOMContentLoaded", function(event) {
    //console.log("DOM fully loaded and parsed");
    //when program starts running...
    checkDimensions();
  });


//if browser gets resized...
window.addEventListener("resize", checkDimensions);

button.addEventListener("click", onButtonClick);

function onButtonClick(){
    window.open(myURL,'_blank');
}

