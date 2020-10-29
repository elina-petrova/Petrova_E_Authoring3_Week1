// import your package here
import {fetchData} from "./modules/DataMiner.js";

(()=>{
    
    // start with a Fetch all



    console.log('loaded');


    //select our user elements and load the content 
    let userSection = document.querySelector(".user-section"),
        userTemplate = document.querySelector("#profs-template").content;

    
    // 
    function handleDataSet(data){

        for (let user in data){
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.user').children;
 
                currentUserText[1].src = `images/${data[user].avatar}.jpg`;
                currentUserText[2].textContent = data[user].name;
                currentUserText[3].textContent = data[user].role;
                currentUserText[4].textContent = data[user].nickname;

                userSection.appendChild(currentUser);
        }
    }
 fetchData('./DataSet.json').then(data => handleDataSet(data)).catch(err => console.log(err));
 fetchData('./AnotherDataSet.json').then(data => handleDataSet(data)).catch(err => console.log(err));
    // handleDataSet(Team);


})();