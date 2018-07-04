// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {

}

exports.components = {
  "component---src-pages-counter-js": preferDefault(require("C:\\Users\\daniela.desira\\Documents\\vespra.github.io\\tutorial-part-one\\src\\pages\\counter.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\daniela.desira\\Documents\\vespra.github.io\\tutorial-part-one\\src\\pages\\index.js")),
  "component---src-pages-page-2-js": preferDefault(require("C:\\Users\\daniela.desira\\Documents\\vespra.github.io\\tutorial-part-one\\src\\pages\\page-2.js"))
}

exports.json = {
  "counter.json": require("C:\\Users\\daniela.desira\\Documents\\vespra.github.io\\tutorial-part-one\\.cache\\json\\counter.json"),
  "index.json": require("C:\\Users\\daniela.desira\\Documents\\vespra.github.io\\tutorial-part-one\\.cache\\json\\index.json"),
  "page-2.json": require("C:\\Users\\daniela.desira\\Documents\\vespra.github.io\\tutorial-part-one\\.cache\\json\\page-2.json")
}