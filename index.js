let user = {
    name: "moseti",
    age: 20,
    gender: "male",
    showInfo: function(realAge){
        alert(`${ this.name } ${ realAge } ${ this.gender }`);
    }
}


const incrementAge = ({ age,name }) =>{
    age += 1;
    console.log(age,name);
}
incrementAge(user);
