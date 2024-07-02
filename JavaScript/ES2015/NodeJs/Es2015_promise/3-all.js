import {uploadPhoto, createUser} from './utils.js';

export default function handleProfileSignUp(){
    const promise = uploadPhoto();
    const promise2 = createUser();
    
    Promise.all([promise, promise2]).then(res => {
        const bodyObj = res.find(item => 'body' in item);
        const firstNameObj = res.find(item => 'firstName' in item);
        const lastNameObj = res.find(item => 'lastName' in item);
        console.log(bodyObj.body, firstNameObj.firstName, lastNameObj.lastName);
    }).catch(error => {
        console.error("Signup system offline");
    });
};