
const user = {
    firstName:"Adarsh",
    lastName:"Verma",
    premiumMember: true,
    welcomeMessage : function(){
        console.log(`welcome ${this.firstName}`);
    }
}
    
// user.welcomeMessage()
// user.firstName = "sam"
// user.welcomeMessage()

// const askWho = function(){
//     const userName = "adarsh"
//     console.log(`is this ${this.userName} ?`)
// }
// askWho()

const askWho = () => {
    const userName = "adarsh"
    console.log(`is this ${this.userName}`)
}

askWho()