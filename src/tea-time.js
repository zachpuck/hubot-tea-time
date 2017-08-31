//  Description
//    A hubot package for daily tea time!
// 
//  Configuration:
//    LIST_OF_ENV_VARS_TO_SET
// 
//  Commands:
//    hubot tea time - <what the respond trigger does>
// 
//  Notes:
//    <optional notes required for the script>
// 
//  Author:
//    zach puckett <zachpuckett@gmail.com>
'use strict';

module.exports = function(robot) {
    robot.hear(/tea time/, function(res) {
        res.send('Right-O, Chap! Jolly Good!');
    });
}
