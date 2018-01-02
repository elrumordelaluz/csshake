const pug = require('pug')
const gzipSize = require('gzip-size')
const prettyBytes = require('pretty-bytes')
const fs = require('fs')
const version = require('./package.json').version

const compiledFunction = pug.compileFile('template-downloads.pug', {
  pretty: true,
})

fs.readdir('dist', (err, files) => {
  const cssFiles = files.filter(file => file.indexOf('.css') !== -1)
  const gzips = Promise.all(cssFiles.map(file => gzipSize.file(`dist/${file}`)))
  gzips.then(gz => {
    // [0] file name, [1] file size
    const sizes = gz.map((itemSize, i) => ([
      cssFiles[i], prettyBytes(itemSize),
    ]))
    fs.writeFile('dist/index.html', compiledFunction({ sizes, version }), err => {
      if (err) throw err
      console.log('The download index has been saved!')
    })
  })
})
