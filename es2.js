const ogg = 
{ 
    id: 1,
    name: "John",
    post:["post1","post2","post3"]
};

function fetchUserData(data) {
    console.log("recupero dati in corso... ");
        return new Promise((resolve,reject) => {
            if(data){
                resolve({id:data.id , name:data.name});
            }else{
                reject('ko');
            }
        });
}

  function fetchUserPosts(userId, userName) {
    return new Promise((resolve,reject) => {
        if(userId==ogg.id && userName==ogg.name){
            resolve(ogg.post);
        }else{
            reject('ko');
        }
    });
}
  
fetchUserData(ogg)  .then((data)=>{console.log(data)})
                    .catch((error)=>{console.log(error)});

fetchUserPosts(1,"John")    .then((data)=>{console.log(data)})
                            .catch((error)=>{console.log(error)});

