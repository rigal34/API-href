const dataApi =fetch('https://jsonplaceholder.typicode.com/photos')
// .then(response => response.json())
// .then(json => console.log(json))
//dataApi je récupére les donées
dataApi.then(async (response) => {
  //  console.log(response);

    const maresponse = await response.json();//pour avoir du body
    console.log(maresponse[0]);//m'affiche le contenu

    try {
      //je vais mettre tout mon code casi ici
        
 const monAlbum = maresponse[0].albumId;
 console.log(monAlbum);
 const id = maresponse[0].id;
 console.log(id);
 const thumbnailUrl = maresponse[0].thumbnailUrl;
 console.log(thumbnailUrl);
 const title = maresponse[0].title;
 console.log(title);
 const url = maresponse[0].url;
 console.log(url);


//Dom affichage textes et photos
const affichage_albumId = document.querySelector("#monAlbum");
affichage_albumId.innerHTML= monAlbum;

const affichage_id = document.querySelector("#id");
affichage_id.innerHTML=id;

const affichage_thumbnailUrl = document.querySelector("#thumbnailUrl");
affichage_thumbnailUrl.innerHTML =  thumbnailUrl;

const affichage_title = document.querySelector("#title");
affichage_title.innerHTML = title;

const affichage_url = document.querySelector("#url");
affichage_url.innerHTML = url;

const affichage_image = document.querySelector("#image01");

//affichage des 2 photos
const image01_thumbnailUrl = `<a href="${url}"target="_blank"><img src= "${thumbnailUrl}"></a>`;//je viens de mettre dans une variable du code html et url+ajout du lien
                                                                       //le "target="_blank"> évite de perdre ma page
affichage_image.insertAdjacentHTML("afterbegin", image01_thumbnailUrl);//j'insert ma constante en position à l'inérieur de l'élément avant son premier enfant

    } catch (err) {
        console.log(err);
    }
})

.catch((err) => {

    console.log(err);
});