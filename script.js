console.log('js is ready');

//let globalWidth;


function checkDimensions(){
    console.log("checkDimensions()");
    const globalWidth = document.body.clientWidth;
    const globalHeight = document.body.clientHeight;
    
    console.log(`the doc width = ${globalWidth}` );
    console.log(`the doc height = ${globalHeight}` );

}



//when program starts running...
checkDimensions();

window.addEventListener("resize", checkDimensions);


