"use strict";
var friendsList = [{
        name: "Abu Hurairah",
        age: 21,
        friendSince: 2022
    },
    {
        name: "Fatima Rasheed",
        age: 19,
        friendSince: 2023
    },
    {
        name: "Bassam Tanveer",
        age: 20,
        friendSince: 2019
    },
    {
        name: "Hafsa Noor",
        age: 22,
        friendSince: 2001
    },
];
//name of friends
for (var i = 0; i < friendsList.length; i++) {
    var result = friendsList[i];
    console.log(result.name);
}
//oldest friend
function findOldest() {
    var oldestFriend = friendsList[0];
    for (var i = 1; i < friendsList.length; i++) {
        if (friendsList[i].friendSince < oldestFriend.friendSince) {
            oldestFriend = friendsList[i];
        }
    }
    return oldestFriend;
}
console.log("My oldest friend is ", findOldest());
//add friend at start
function addFriendAtStart(indexNum, newFriend) {
    friendsList.splice(indexNum, 0, newFriend);
    var newFriendListA = friendsList;
    return newFriendListA;
}
var updatedListAfterAdd = addFriendAtStart(0, {
    name: "Hassan Saeed",
    age: 18,
    friendSince: 2020
});
console.log("The updated list after adding item", updatedListAfterAdd);
//add friend at the end 
function addFriendAtLast(indexNum, newFriend) {
    friendsList.splice(indexNum, 0, newFriend);
    var newFriendListB = friendsList;
    return newFriendListB;
}
var updatedListAfterAdd = addFriendAtLast(friendsList.length, {
    name: "Asifa Ramzan",
    age: 21,
    friendSince: 2017
});
console.log("The updated list after adding item", updatedListAfterAdd);
//add friend at centre
function addFriendAtCentre(indexNum, newFriend) {
    friendsList.splice(indexNum, 0, newFriend);
    var newFriendListC = friendsList;
    return newFriendListC;
}
var updatedListAfterAdd = addFriendAtCentre(friendsList.length / 2, {
    name: "Abdullah",
    age: 22,
    friendSince: 2024
});
console.log("The updated list after adding item", updatedListAfterAdd);
