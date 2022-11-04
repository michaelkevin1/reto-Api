//  QUE ES UN API .. 
// ESUN SERVICIO EL CUAL PEUDE PROVEER INFORMACION PUEE CREARLA

//EN JS ESXISTE UNA FUNCION LA CUAL SE ENCARGA DE PODER HACER LA PETRICION

//FEtCH ()
//GET= OBTENER INFORMACION
//POST = CREAR DATOS
//PUT = ACTULIZA DATOS
//DELETE = ELIMINAR DATOS
// FUNCION ASYNC

//las funciones async fueron creadas para ejecutar algo en caso que la ejecuancion demore mas tiempo de los esparado para popder pasar a ala siguente funcion..

//https://api.github.com/users/michaelkevin1
//hay un tiempo de espera no sabemos cuanto puede tardar
//peticion.. no esta bien esctructurada nunca retornara nada.


const imgProfile = document.querySelector("#img-profile");
const githubName = document.querySelector("#github-name");
const githubUserName = document.querySelector("#github-username");
const githubBio = document.querySelector("#github-bio");
const githubJoined = document.querySelector("#github-joined");
const githubRepos = document.querySelector("#github-repos");
const githubFollowers = document.querySelector("#github-followers");
const githubFollowing = document.querySelector("#github-following");
const githubTwitter = document.querySelector("#github-twitter");
const githubLocation = document.querySelector("#github-location")


const githubActionSearch = document.querySelector("#github-action-search");
const gitgubInputSearch = document.querySelector("#github-search");



githubActionSearch.onclick = ()=>{
    const username = gitgubInputSearch.value;
    gitgubInputSearch.value = "";
    //aca nos falta validar si el input esrta vacio
    if(username ===""){
        Swal.fire({
            title: "error",
            text: "debes llenar el campo usuario",
            icon: "error"
        });
        return;
    }
    obetenerDatosgithub(username);
}; 


gitgubInputSearch.addEventListener("keyup", function(event){
    if(event.key ==="Enter"){
        obetenerDatosgithub(event.target.value)
    }
});


const obetenerDatosgithub = async(username = "michaelkevin1")=>{
    const response = await fetch(`https://api.github.com/users/${username}`);
    
    const data = await response.json();

    if(data.message === "not found"){
        Swal.fire({
            title: "error",
            text: "No se econtro el usuario",
            icon: "error",
        });
        return;
    }
    serDataUser(data);
    
}

const formatDate = (fecha)=>{
    let date = new Date(fecha);
    return date.toISOString().split("T")[0];
}


const serDataUser = (data)=>{
    imgProfile.src = data.avatar_url;
    githubName.innerHTML = data.name;
    githubBio.innerHTML = data.bio;
    githubUserName.innerHTML = `@${data.login}`;
    githubJoined.innerHTML = formatDate(data.created_at);
    githubRepos.innerHTML = data.public_repos;
    githubFollowers.innerHTML = data.followers;
    githubFollowing.innerHTML = data.following;
    githubLocation.innerHTML = data.location;
    githubTwitter.innerHTML = data.twitter_username;
}

obetenerDatosgithub();





// const obtenerDatosGithub = async()=>{
    //como ejemploawait esta haciendo lo siguente
    //ejecuta fectch con la url y una ves que sabe la ejecucion fetch recien ara el console.log
//     const response = await fetch("https://api.github.com/users/michaelkevin1");
   // es decir que hasta que la ejecucion no termine no mostrara la siguente linea
//     const data = await response.json();
//     imgProfile.src = data.avatar_url;
//     console .log(data)

// }

// obtenerDatosGithub();

