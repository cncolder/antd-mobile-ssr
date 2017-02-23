const path = require('path')
const fs = require('fs-extra')
const glob = require('glob')
const child = require('child_process')

fs.emptyDirSync('./lib')
fs.copySync('./node_modules/antd-mobile-web/lib', './lib')
glob.sync('./lib/**/*.svg').forEach(svg => {
    console.log('[CLEAN] ' + svg)
    fs.removeSync(svg)
})
glob.sync('./lib/**/demo').forEach(demo => {
    console.log('[CLEAN] ' + demo)
    fs.removeSync(demo)
})
child.execSync('babel patch -d lib', {
    stdio: 'inherit'
})
