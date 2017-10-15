let SA
let YML

try {
  SA = require('superagent')
  YML = require('js-yaml')
} catch (e) {
  console.error('Modules failed to require.\n\n' + e.message)
  process.exit(1)
}

async function doThings () { // i just wanted async support thats why this is in a function
  console.log('Getting supported languages...')
  const api1 = await SA.get('https://api.crowdin.com/api/supported-languages?json=true')
  const api2 = await SA.get('https://api.crowdin.com/api/project/wildbeast/info?json=true&key=' + process.env.CROWDIN_API_KEY)
  const languages = api1.body
  const project = api2.body
  console.log(`Got ${languages.length} languages supported by Crowdin, and ${project.languages.length} supported by the project.`)
  console.log('Reading MKDocs configuration...')
  const MKconfig = YML.safeLoad(require('fs').readFileSync('./mkdocs.yml'))
  console.log('Dynamically rewriting MKDocs config...')
  const fin = returnCopy(MKconfig)
  const json = []
  for (const lang of project.languages) {
    const info = languages.find(c => c.name === lang.name)
    const y = await autoGen(fin, info.locale.replace('-', '_'))
    if (info) {
      MKconfig.pages.push({[info.name]: y})
      json.push({
        image: `https://d1ztvzf22lmr1j.cloudfront.net/images/flags/${info.crowdin_code}.png`,
        name: info.name,
        href: MKconfig.site_url + '/' + info.locale.replace('-', '_')
      })
    }
  }
  console.log('Config generated, dumping...')
  require('fs').writeFileSync('./mkdocs.yml', YML.safeDump(MKconfig, {noRef: true}))
  console.log('Creating JSON file...')
  require('fs').writeFileSync('./docs/langs.json', JSON.stringify(json))
  console.log('Done!')
  process.exit(1)
}

async function autoGen(heck, lang) {
  let final = []
  for (const c in heck) {
    for (const y in heck[c]) {
      if (typeof heck[c][y] === 'string') {
        if (final[c] === undefined) final[c] = {}
        final[c][y] = lang + '/' + heck[c][y]
      } else if (Array.isArray(heck[c][y])) {
        heck[c][y].map(k => {
          for (const p in k) {
            if (final[c] === undefined) final[c] = {}
            if (final[c][y] === undefined) final[c][y] = []
            final[c][y].push({[Object.keys(k)[0]]: lang + '/' + k[p]})
          }
        })
      }
    }
  }
  return final
}
function returnCopy (MKconfig) {
  const copy = MKconfig.pages
  const fin = []
  for (const y in copy) {
    fin[y] = copy[y]
  }
  return fin
}

doThings()