import {ClassRoom} from './0-classroom.js';


export default function initializeRooms(){
    // creating a array to hold the objects
    // make a loop that will insert a new object created in a instance.
    const rooms = [];
    const room_size = [19,20,34];

    for (const i in room_size){
        const obj = new ClassRoom(room_size[i]);
        rooms.push(obj);
    }
    return rooms;
}