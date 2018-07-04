// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-counter-js": require("gatsby-module-loader?name=component---src-pages-counter-js!C:\\Users\\daniela.desira\\Documents\\vespra.github.io\\tutorial-part-one\\src\\pages\\counter.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!C:\\Users\\daniela.desira\\Documents\\vespra.github.io\\tutorial-part-one\\src\\pages\\index.js"),
  "component---src-pages-page-2-js": require("gatsby-module-loader?name=component---src-pages-page-2-js!C:\\Users\\daniela.desira\\Documents\\vespra.github.io\\tutorial-part-one\\src\\pages\\page-2.js")
}

exports.json = {
  "counter.json": require("gatsby-module-loader?name=path---counter!C:\\Users\\daniela.desira\\Documents\\vespra.github.io\\tutorial-part-one\\.cache\\json\\counter.json"),
  "index.json": require("gatsby-module-loader?name=path---index!C:\\Users\\daniela.desira\\Documents\\vespra.github.io\\tutorial-part-one\\.cache\\json\\index.json"),
  "page-2.json": require("gatsby-module-loader?name=path---page-2!C:\\Users\\daniela.desira\\Documents\\vespra.github.io\\tutorial-part-one\\.cache\\json\\page-2.json")
}

exports.layouts = {

}