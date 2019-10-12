const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BuildingReportSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  date: {
    type: Date,
    default: Date.now
  },
  // тип звіту
  reportType: {
    type: String
  },
  // назва
  buildingName: {
    type: String,
    required: true
  },
  // тип будівлі (багатоквартирний житловий будинок і т.д.)
  buildingType: {
    type: String,
    required: true
  },
  // адреса
  address: {
    type: String,
    required: true
  },
  // кільк поверхів
  floors: {
    type: Number,
    required: true
  },
  // опалювальна площа
  heatedArea: {
    type: Number,
    required: true
  },
  // Конд обєм
  conditionedVolume: {
    type: Number,
    required: true
  },
  // Рік прийняття в екплуатац
  commissioningYear: {
    type: Number,
    required: true
  },
  // Питомі тепловтрати
  heatLosses: {
    type: Number,
    required: true
  },
  // Питомі тепловтрати на кв метр
  heatLossesMeterSquare: {
    type: Number,
    required: true
  },
  // Максимально допустиме значення питомих тепловитрат на опалення будинку
  EPmax: {
    type: Number
  },
  // клас енергетичної ефективності
  energyEfficiencyClass: {
    type: String
  },
  // первинна енергія на кв метр
  primEnergyOnSquareMeter: {
    type: Number
  },
  // СО2 на кв метр
  throwCOSquareMeter: {
    type: Number
  },
  buildingEnergyNeeds: {
    type: Object
  },
  constructions: []
});

module.exports = BuildingReport = mongoose.model(
  "buildingReports",
  BuildingReportSchema
);
