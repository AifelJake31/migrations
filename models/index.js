import Pick_One from './pick_one.js';
import Bettor from './bettor.js';
import Pick_One_Bet from './pick_one_bet.js'
import Event_Shark from './event_shark.js';

Pick_One.hasMany(Pick_One_Bet, {
  foreignKey: "pick_one_id",
  constraints: true,
  as: 'pick_one_events'
})
Pick_One_Bet.belongsTo(Bettor, {
  foreignKey: 'bettor_id',
  as: 'bettor',
});
Pick_One_Bet.belongsTo(Pick_One, {
  foreignKey: 'pick_one_id',
  as: 'pick_one',
});
Pick_One_Bet.belongsTo(Event_Shark, {
  foreignKey: 'event_shark_id',
  as: 'event_shark',
});
Bettor.hasMany(Pick_One_Bet, { 
  foreignKey: 'bettor_id', 
  as: 'pick_one_bets' 
});

