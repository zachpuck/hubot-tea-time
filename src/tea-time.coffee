# Description
#   A hubot package for daily tea time!
#
# Configuration:
#   LIST_OF_ENV_VARS_TO_SET
#
# Commands:
#   hubot tea time - <what the respond trigger does>
#
# Notes:
#   <optional notes required for the script>
#
# Author:
#   zach puckett <zachpuckett@gmail.com>

module.exports = (robot) ->
  robot.respond /tea time/, (res) ->
    res.reply "Right-O, Chap! Jolly Good!!"
