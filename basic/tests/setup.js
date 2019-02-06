process.env.NODE_ENV = "test";
require("babel-register")();
require("babel-polyfill");

const jsdom = require("jsdom");
const Enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new Adapter() });

const { JSDOM } = jsdom;
const { document } = new JSDOM("").window;

global.document = document;
global.window = { location: { host: "example.com" } };
