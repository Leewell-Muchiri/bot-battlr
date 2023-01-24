import React from "react";
import BotCard from "./Card";
function YourBotArmy({ botsArmy, getMyArmy, handleFilter }) {
  const mapBotArmy = botsArmy.map(bot => {
    return bot? <BotCard handleFilter={handleFilter} key={bot.id} getMyArmy={getMyArmy} bot={bot} /> : true
  })
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          { mapBotArmy }
        </div>
      </div>
    </div>
  );
}
export default YourBotArmy;