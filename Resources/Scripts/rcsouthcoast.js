var score = 0;
var startScreen = document.querySelector('.startScreen');
var funSplash = document.querySelector('.funSplash');
var compSplash = document.querySelector('.compSplash');
var funButton = document.querySelector('.fun');
var compButton = document.querySelector('.comp');
var mainScreen = document.querySelector('.mainScreen');
var funScreen = document.querySelector('.funScreen');
var compScreen = document.querySelector('.compScreen');
var scoreCard = document.querySelectorAll('.scoreCard');
var settings = document.querySelectorAll('.settings');
var rulesetInUse;

var pointTypes = {
    0: "progress",
    1: "reverse",
    2: "hitGate",
    3: "rollover",
    4: "boundary",
    5: "vehicleTouch",
    6: "winch",
    7: "handWinch"
}

var pointCounter = {
    progress: 0,
    reverse: 0,
    hitGate: 0,
    rollover: 0,
    boundary: 0,
    vehicleTouch: 0,
    winch: 0,
    handWinch: 0
}

var liteRuleset = {
    inUse: false,
    progress: 2,
    reverse: 0,
    hitGate: 10,
    rollover: 5,
    boundary: 5,
    vehicleTouch: 5,
    winch: 1,
    handWinch: 5
}

var sorrcaRuleset = {
    inUse: true,
    progress: 2,
    reverse: 0,
    hitGate: 10,
    rollover: 5,
    boundary: 10,
    vehicleTouch: 10,
    winch: 3,
    handWinch: 10
}

window.onload = function () {
    generate();
}

/**Currently, the program allows you to switch between SORRCA Lite and SORRCA. However, the 
 * old selection of scorecard buttons cannot be removed accurately without adjustments being made to the program.
 * 
 * These adjustments were unable to be added in time, but would have involved the deletion of old scorecards and subsequent replacement with the new/relevant scorecards
 * for the correct ruleset, allowing for the UI to update alongside the program.
 * 
 * The program behind the interface works as expected and allows the user to switch between rulesets - however, the interface is suffering with some techincal difficulties
 * in replacing the scorecards.
 */

function generate() {
    if (liteRuleset.inUse == true) {
        rulesetInUse = liteRuleset;
    }
    else if (sorrcaRuleset.inUse == true) {
        rulesetInUse = sorrcaRuleset;
    }
    var rowArea = document.querySelectorAll('.scorePoints');
    for (var n = 0; n < rowArea.length; n++) {
        for (var i in pointTypes) {
            var pointRow = document.createElement("div"),
                pointType = document.createElement("h"),
                changePoints = document.createElement("div"),
                deductPoint = document.createElement("div"),
                addPoint = document.createElement("div"),
                minus = document.createElement("h"),
                plus = document.createElement("h");
            pointRow.setAttribute("class", "pointRow");
            pointType.setAttribute("class", "pointType");
            changePoints.setAttribute("class", "changePoints");
            deductPoint.setAttribute("class", "deductPoint");
            addPoint.setAttribute("class", "addPoint");
            minus.innerHTML = "-";
            plus.innerHTML = "+";
            switch (pointTypes[i]) {
                case "progress":
                    pointType.innerHTML = "Progress (-" + rulesetInUse.progress + ")";
                    deductPoint.setAttribute("onclick", "deductPoint('progress')");
                    addPoint.setAttribute("onclick", "addPoint('progress')");
                    break;
                case "reverse":
                    pointType.innerHTML = "Reverse (+" + rulesetInUse.reverse + ")";
                    deductPoint.setAttribute("onclick", "deductPoint('reverse')");
                    addPoint.setAttribute("onclick", "addPoint('reverse')");
                    break;
                case "hitGate":
                    pointType.innerHTML = "Hit gate marker (+" + rulesetInUse.hitGate + ")";
                    deductPoint.setAttribute("onclick", "deductPoint('hitGate')");
                    addPoint.setAttribute("onclick", "addPoint('hitGate')");
                    break;
                case "rollover":
                    pointType.innerHTML = "Rollover (+" + rulesetInUse.rollover + ")";
                    deductPoint.setAttribute("onclick", "deductPoint('rollover')");
                    addPoint.setAttribute("onclick", "addPoint('rollover')");
                    break;
                case "boundary":
                    pointType.innerHTML = "Boundary (+" + rulesetInUse.boundary + ")";
                    deductPoint.setAttribute("onclick", "deductPoint('boundary')");
                    addPoint.setAttribute("onclick", "addPoint('boundary')");
                    break;
                case "vehicleTouch":
                    pointType.innerHTML = "Vehicle touch (reposition) (+" + rulesetInUse.vehicleTouch + ")";
                    deductPoint.setAttribute("onclick", "deductPoint('vehicleTouch')");
                    addPoint.setAttribute("onclick", "addPoint('vehicleTouch')");
                    break;
                case "winch":
                    pointType.innerHTML = "Use of winch (+" + rulesetInUse.winch + ")";
                    deductPoint.setAttribute("onclick", "deductPoint('winch')");
                    addPoint.setAttribute("onclick", "addPoint('winch')");
                    break;
                case "handWinch":
                    pointType.innerHTML = "Hand winch (+" + rulesetInUse.handWinch + ")";
                    deductPoint.setAttribute("onclick", "deductPoint('handWinch')");
                    addPoint.setAttribute("onclick", "addPoint('handWinch')");
                    break;
            }
            deductPoint.appendChild(minus);
            addPoint.appendChild(plus);
            changePoints.appendChild(deductPoint);
            changePoints.appendChild(addPoint);
            pointRow.appendChild(pointType);
            pointRow.appendChild(changePoints);
            rowArea[n].appendChild(pointRow);
        }
        var fillerArea = document.createElement("div");
        fillerArea.setAttribute("class", "filler");
        rowArea[n].appendChild(fillerArea);
    }
}


function addPoint(addBy) {
    if (liteRuleset.inUse == true) {
        rulesetInUse = liteRuleset;
    }
    else if (sorrcaRuleset.inUse == true) {
        rulesetInUse = sorrcaRuleset;
    }
    switch (addBy) {
        case "progress":
            score -= rulesetInUse.progress;
            pointCounter.progress += 1;
            break;
        case "reverse":
            score += rulesetInUse.reverse;
            pointCounter.reverse += 1;
            break;
        case "hitGate":
            score += rulesetInUse.hitGate;
            pointCounter.hitGate += 1;
            break;
        case "rollover":
            score += rulesetInUse.rollover;
            pointCounter.rollover += 1;
            break;
        case "boundary":
            score += rulesetInUse.boundary;
            pointCounter.boundary += 1;
            break;
        case "vehicleTouch":
            score += rulesetInUse.vehicleTouch;
            pointCounter.vehicleTouch += 1;
            break;
        case "winch":
            score += rulesetInUse.winch;
            pointCounter.winch += 1;
            break;
        case "handWinch":
            score += rulesetInUse.handWinch;
            pointCounter.handWinch += 1;
            break;
    }
    changeScore();
}

function deductPoint(addBy) {
    switch (addBy) {
        case "progress":
            score += rulesetInUse.progress;
            pointCounter.progress -= 1;
            break;
        case "reverse":
            score -= rulesetInUse.reverse;
            pointCounter.reverse -= 1;
            break;
        case "hitGate":
            score -= rulesetInUse.hitGate;
            pointCounter.hitGate -= 1;
            break;
        case "rollover":
            score -= rulesetInUse.rollover;
            pointCounter.rollover -= 1;
            break;
        case "boundary":
            score -= rulesetInUse.boundary;
            pointCounter.boundary -= 1;
            break;
        case "vehicleTouch":
            score -= rulesetInUse.vehicleTouch;
            pointCounter.vehicleTouch -= 1;
            break;
        case "winch":
            score -= rulesetInUse.winch;
            pointCounter.winch -= 1;
            break;
        case "handWinch":
            score -= rulesetInUse.handWinch;
            pointCounter.handWinch -= 1;
            break;
    }
    changeScore(addBy);
}

function changeScore(updatePoints) {
    var displayScore = document.querySelectorAll('.score');
    for (var i = 0; i < displayScore.length; i++) {
        displayScore[i].innerHTML = score;
    }
    switch (updatePoints) {
        case "progress":
            break;
        case "reverse":
            break;
        case "hitGate":
            break;
        case "rollover":
            break;
        case "boundary":
            break;
        case "vehicleTouch":
            break;
        case "winch":
            break;
        case "handWinch":
            break;
    }
};
