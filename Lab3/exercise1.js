const dns = require("dns");
const { promisify } = require("util");
const EventEmitter = require("events");

const URL = "https://www.mum.edu/";

//1. dns resolve
dns.resolve4(URL, resp => console.log("1.", resp));

//2. promises
const resolve = promisify(dns.resolve4);
resolve(URL)
  .then(resp => console.log("2.", resp))
  .catch(err => console.log("2.", err));

//3. async/await
async function asyncResolve(url) {
  try {
    const resp = await resolve(url);
    console.log("3.", resp);
  } catch (err) {
    console.log("3.", err);
  }
}
asyncResolve(URL);

//4. observables
class ObservableResolve extends EventEmitter {
  constructor() {
    super();
  }
  resolve(url) {
    dns.resolve4(url, resp => this.emit("finish", resp));
  }
}
const obs = new ObservableResolve();
obs.on("finish", a => {
  console.log("4.", a);
});
obs.resolve(URL);
