const Wappalyzer = require('wappalyzer');

const url = 'https://youtu.be/QdpxoFcdORI';

const options = {
  debug: false,
  delay: 3000,
  headers: {},
  maxDepth: 3,
  maxUrls: 10,
  maxWait: 10000,
  recursive: true,
  probe: true,
  userAgent: 'Wappalyzer',
  htmlMaxCols: 2000,
  htmlMaxRows: 2000,
};

const wappalyzer = new Wappalyzer(options)

;(async function() {
  try {
    await wappalyzer.init()

    // Optionally set additional request headers
    const headers = {}

    const site = await wappalyzer.open(url, headers)

    // Optionally capture and output errors
    // site.on('error', console.error)

    const results = await site.analyze()

    console.log(JSON.stringify(results.technologies, null, 2))
  } catch (error) {
    // console.error(error)
  }

  await wappalyzer.destroy()
})()