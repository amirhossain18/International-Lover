const loadData=()=>{
    fetch('https://randomuser.me/api/?results=100')
    .then(res=> res.json())
    .then(data=> displayUsers(data.results))

}

const displayUsers= users=> {
    const userCoutainer= document.getElementById('user-container');
    for(const user of users){
        console.log(user)
        const userDiv= document.createElement('div');
        userDiv.classList.add('user')
        userDiv.innerHTML = `
         <h3>Name: ${user.name.title}  ${user.name.first}  ${user.name.last}</h3> </h3>
         <img src=${user.picture.large } alt="">
        
         <h6>phone: ${user.cell}</h6>
         <h6>Email: ${user.email}</h6>
         <h6>Location: ${user.location.country}</h6>
        
        `

        userCoutainer.appendChild(userDiv)
    }
}

