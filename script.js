window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            console.log(json);
            let array = [];
            let item;
            for (let i = 0; i < json.length; i++) {
                item = `<div class="astronaut">
                <div class="bio">
                   <h3>${json[i].name}</h3>
                   <ul>
                      <li>Hours in space: ${json[i].hoursInSpace}</li>
                      <li>Active: ${json[i].active}</li>
                      <li>Skills: ${Physician, Chemical Engineer;
            }</li >
                   </ul >
                </div > `
            }

   <img class="avatar" src="images/mae-jemison.jpg">
</div>
        });
    });
})
