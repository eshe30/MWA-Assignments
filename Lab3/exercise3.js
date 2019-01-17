class Gym extends require("events") {
  constructor() {
    super();
  }
}

const gym = new Gym();
setInterval(() => gym.emit("go"), 1000);

gym.on("go", () => console.log("Athlete is working out!"));
