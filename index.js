let user = {
    name: "moseti",
    age: 20,
    gender: "male",
    showInfo: (realAge) => {
        alert(`${ this.name } ${ realAge } ${ this.gender }`);
    }
};


const incrementAge = ({ age,name }) => {
    age += 1;
    alert(age,name);
};
incrementAge(user);
