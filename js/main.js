// import your package here


(()=>{
    // start with a Fetch all

    fetch('./DataSet.json')
        .then(res => res.json())
        .then(data => {
            //this is our data (DataSet.json)
            //converted to a plain JavaScript object
            handleDataSet(data);
        })
        .catch((error)=> console.log(error));

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
    // handleDataSet(Team);


})();