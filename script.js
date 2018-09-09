//console.log('js is ready');



const image = document.getElementsByTagName("main")[0];
const imageScale = 1.85;
let imageSize;
let topMargin;
let leftMargin;


function checkDimensions(){
    //console.log("checkDimensions()");
    
    //const globalWidth = document.body.clientWidth;
    //const globalHeight = document.body.clientHeight;

    const globalWidth = window.innerWidth;
    const globalHeight = window.innerHeight;

    // const globalWidth = screen.width;
    // const globalHeight = screen.height;


    //const topMargin;
    console.log(" ");
    console.log(`the doc width = ${globalWidth}` );
    console.log(`the doc height = ${globalHeight}` );

    if(globalWidth < globalHeight){
        imageSize = (globalWidth*imageScale);
    } else if(globalHeight < globalWidth){
        imageSize = (globalHeight*imageScale);
    } else if(globalHeight === globalWidth){
        imageSize = (globalWidth*imageScale);
    }

    //console.log(`imageSize = ${imageSize}`);

   topMargin = getTopMargin(imageSize, globalHeight);
   leftMargin = getLeftMargin(imageSize, globalWidth);


    //console.log(`imageSize = ${imageSize}` );

    image.style.width = (imageSize) + "px";
    image.style.height = (imageSize) + "px";
    image.style.marginTop = topMargin + "px";
    image.style.marginLeft = leftMargin + "px";

}



function getLeftMargin(imageSize, globalWidth){
    console.log(`getLeftMargin(${imageSize}, ${globalWidth})`);
    
    if(imageSize > globalWidth){

        //console.log("CONDITION MET!!!!");
        var margLeft = (0 - (imageSize - globalWidth)/2);
        console.log(`margLeft = ${margLeft}`);
        return margLeft;

    }

    else if(globalWidth > imageSize){

        margLeft = (globalWidth - imageSize)/2;
        return margLeft;

    }

    return 0;

}


function getTopMargin(imageSize, globalHeight){
    console.log(`getTopMargin(${imageSize}, ${globalHeight})`);
    
    let margTop;

    if(imageSize > globalHeight){

        //console.log("CONDITION MET!!!!");
        margTop = (0 - (imageSize - globalHeight)/2);
        console.log(`margTop = ${margTop}`);
        return margTop;

    } else if(globalHeight > imageSize){

        margTop = (globalHeight - imageSize)/2;
        return margTop;

    } else return 0;

}




document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    //when program starts running...
    checkDimensions();
  });




//if browser gets resized...
window.addEventListener("resize", checkDimensions);


