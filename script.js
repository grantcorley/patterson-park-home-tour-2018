//console.log('js is ready');



const houses = document.getElementsByClassName("houses")[0];
const imageScale = 1.8;
let imageSize;
let topMargin;
let leftMargin;




function checkDimensions(){

    console.log("checkDimensions()");

    const globalWidth = window.innerWidth;
    const globalHeight = window.innerHeight;

    //const topMargin;
    console.log(" ");
    console.log(`viewport width = ${globalWidth}` );
    console.log(`viewport height = ${globalHeight}` );

    if(globalWidth < globalHeight){
        imageSize = (globalWidth*imageScale);
    } else if(globalHeight < globalWidth){
        imageSize = (globalHeight*imageScale);
    } else if(globalHeight === globalWidth){
        imageSize = (globalWidth*imageScale);
    }

    console.log(`imageSize = ${imageSize}`);



        topMargin = getTopMargin(imageSize, globalHeight);
        leftMargin = getLeftMargin(imageSize, globalWidth);


         houses.style.width = (imageSize) + "px";
         houses.style.height = (imageSize) + "px";
        houses.style.marginTop = topMargin + "px";
        houses.style.marginLeft = leftMargin + "px";

}





function getLeftMargin(imageSize, globalWidth){
    console.log(`getLeftMargin(${imageSize}, ${globalWidth})`);
    
    if(imageSize > globalWidth){

        console.log("the image is wider than the viewport");      
        var margLeft = 0 - ((imageSize - globalWidth)/2)
        console.log(`margLeft = ${margLeft}`);

        return margLeft;

    }

    else if(globalWidth > imageSize){

        console.log("the viewport is wider than the image");
        margLeft = (globalWidth - imageSize)/2;
        
        return margLeft;

    }

    return 0;

}



function getTopMargin(imageSize, globalHeight){
    console.log(`getTopMargin(${imageSize}, ${globalHeight})`);
    
    if(imageSize > globalHeight){

        console.log("the image is taller than the viewport");      
        var margTop = 0 - ((imageSize - globalHeight)/2);
        console.log(`margTop = ${margTop}`);

        return margTop;

    }

    else if(globalHeight > imageSize){

        console.log("the viewport is taller than the image");
        margTop = (globalHeight - imageSize)/2;
        
        return margTop;

    }

    return 0;

}





// function getTopMargin(imageSize, globalHeight){
//     console.log(`getTopMargin(${imageSize}, ${globalHeight})`);
    
//     let margTop;

//     if(imageSize > globalHeight){

//         margTop = (0 - (imageSize - globalHeight)/2);
//         console.log(`margTop = ${margTop}`);
//         return margTop;

//     } else if(globalHeight > imageSize){

//         margTop = (globalHeight - imageSize)/2;
//         return margTop;

//     } else return 0;

// }




document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    //when program starts running...
    checkDimensions();
  });




//if browser gets resized...
window.addEventListener("resize", checkDimensions);


