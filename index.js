// code your solution here
function saturdayFun (activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
} 

function wrapAdjective (astrc = "*"){
    return function inner (string = "special") {
        return `You are ${astrc}${string}${astrc}!`;
    }
}
