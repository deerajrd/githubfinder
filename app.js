
const serach=document.getElementById("serach");
const profile=document.getElementById("profile");
const url="https://api.github.com/users";
const client_id="f290eb8dc4d1476df8d5";
const client_secret="b97cc750015ed24253b48322a224c061c2122995";

async function getUser(user){
    const profileResponse=await fetch(`${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`
    );


const profile=profileResponse.json();
return profile;
}

function Showprofile(user){
    console.log(user);
profile.innerHTML= `<div class="row">
<div class='col-md-4'>
    <div class="round-img" style="width:18rem;">
        <img class="card-img-top" src="${user.avatar_url}"/>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Repositories<span class="badge badge-success">${user.public_repos}</span></li>
            <li class="list-group-item">Followers<span class="badge badge-primary">${user.followers}</span></li>
            <li class="list-group-item">Following<span class="badge badge-info">${user.following}</span></li>
        </ul>
        <div class="card-body">
            <a href="${user.html_url}" target="_blank" class="btn btn-warning btn-block">profile</a>
        </div>
    </div>
</div>
<div class="col-md-8"><div id="repos"></div></div>
</div>`;
}

serach.addEventListener("keyup",e=>{
    const user=e.target.value;

    if(user.length>0) {
        getUser(user).then(res=> Showprofile(res));
    }
});
