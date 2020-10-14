// import your package here
import Team from "./modules/DataModule.js";
import NavSystem from "./modules/TheNavSystem.js";

(()=>{
    //stub * just a place for non-component-specific files

    //set up the XMLHHTP object
    let myReq = new XMLHttpRequest;

    //make sure we can handle whatever data comes back, or any errors
    myReq.addEventListener("readystatechange", handleRequest);

    //open a requst and pass thru the URL of the data that we want
    myReq.open('GET', '../DataSet.json');

    //actually make the request
    myReq.send();
    
    function handleRequest(){
        if(myReq.readyState === XMLHttpRequest.DONE){
            //check status here and proceed
            if(myReq.status === 200){
                //200 means done and dusted,ready to go with the dataset!
                handleDataSet(JSON.parse(myReq.responseText));
            } else {
                //probably got some kind of error code, so handle that
                //a 404, 500 etc...can render appropriate message here

                console.error(`${myReq.status}: something done broke, son`);
            } 
        }else {
                // requst isnt ready yet keep waiting
                console.log(`Requst state: ${myReq.readyState}. Still processing`);
            }
        }
    


    console.log('loaded');

    console.log(Team);

    //select our user elements and load the content 
    let userSection = document.querySelector(".user-section"),
        userTemplate = document.querySelector("#profs-template").content;

    
    // 
    function handleDataSet(data){

        for (let user in data){
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.user').children;
            
                currentUserText[1].textContent = data[user].name;
                currentUserText[2].textContent = data[user].role;
                currentUserText[3].textContent = data[user].nickname;

                userSection.appendChild(currentUser);
        }
    }
    // handleDataSet(Team);


})();