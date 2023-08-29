import Pick_One from './pick_one.js';
import Bettor from './bettor.js';
import Pick_One_Bet from './pick_one_bet.js'
import Event_Shark from './event_shark.js';
import Shark from './shark.js';
import Event from './event.js';
import Rack_Bet from './rack_bet.js';
import Rack from './rack.js';

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
  as: 'pick_one_bet' 
});
Event_Shark.belongsTo(Shark, {
  foreignKey: "shark_id",
  as: 'shark'
})
Event_Shark.belongsTo(Event, {
  foreignKey: "event_id",
  as: 'event'
})
Event.hasMany(Event_Shark, {
  foreignKey: 'event_id',
  constraints: true,
  as: 'event_shark'
});
Shark.hasMany(Event_Shark, {
  foreignKey: 'shark_id',
  constraints: true,
  as: 'event_shark'
});
Rack_Bet.belongsTo(Event_Shark, {
  foreignKey: "event_shark_id",
  constraints: true,
  as: 'event_shark'
})
Rack_Bet.belongsTo(Rack, {
  foreignKey: "rack_id",
  constraints: true,
  as: 'rack'
})
Rack_Bet.belongsTo(Bettor, {
  foreignKey: "bettor_id",
  constraints: true,
  as: 'bettor'
})
Event_Shark.hasMany(Rack_Bet, {
  foreignKey: "event_shark_id",
  constraints: true,
  as: "rack_bet"
})
Rack.hasMany(Rack_Bet, {
  foreignKey: 'rack_id',
  constraints: true,
  as: 'rack_bet'
})
Bettor.hasMany(Rack_Bet, {
  foreignKey: 'bettor_id',
  constraints: true,
  as: 'rack_bet'
})