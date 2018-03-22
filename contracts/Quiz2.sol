pragma solidity ^0.4.18;

contract Quiz2 {
// Contract owner
address public owner;

// Score of participants
// mapping(address => bool[10]) private score;
mapping(address =>
uint) private score;
mapping(address =>
string) private title;

event Scored(address,
string, uint);

function Quiz2()
public {
owner = msg.sender;
}

function setScore(address participant,
string _title, 
uint _score) public {
score[participant] = _score;
title[participant] = _title;
Scored(participant, _title, _score);
}

function getScore(address participant)
public view
returns (uint) {
return score[participant];
}

function getTitleAndScore(address participant)
public view
returns (string,
uint) {
return (title[participant], score[participant]);
}

function kill()
public {
require(msg.sender
== owner);
selfdestruct(this);
}

}