

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { MediazonaSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('InfographicEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MEDIAZONA_TEST_LIVE=TRUE.
  afterEach(liveDelay('MEDIAZONA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MediazonaSDK.test()
    const ent = testsdk.Infographic()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MEDIAZONA_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'infographic.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"uri","name":"url","req":false,"short":"URL to the infographic resource","type":"`$STRING`","index$":0}],"name":"infographic","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"cae8add5","kind":"query","name":"cachebuster","orig":"cachebuster","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /infographics/g200w/urls.json.gz","json":"{\"operationId\":\"getInfographics\",\"parameters\":[{\"description\":\"Cache busting parameter to ensure fresh data retrieval\",\"in\":\"query\",\"name\":\"cachebuster\",\"required\":false,\"schema\":{\"example\":\"cae8add5\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/gzip\":{\"schema\":{\"description\":\"Gzipped JSON file containing infographics URLs and data\",\"format\":\"binary\",\"type\":\"string\"}},\"application/json\":{\"schema\":{\"description\":\"Decompressed JSON data containing infographics information\",\"properties\":{\"urls\":{\"description\":\"Array of infographic URLs and metadata\",\"items\":{\"properties\":{\"url\":{\"description\":\"URL to the infographic resource\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response containing compressed infographics data\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Resource not found\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Resource not found\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Internal server error\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/infographics/g200w/urls.json.gz","segments":[{"lit":"infographics"},{"lit":"g200w"},{"lit":"urls.json.gz"}],"select":{"exist":["cachebuster"]},"transform":{"req":"`reqdata`","res":"`body.urls`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"infographic","name__orig":"infographic","Name":"Infographic","name_":"infographic","name-":"infographic","NAME":"INFOGRAPHIC","index$":0}, {"active":true,"entity":"infographic","key$":"BasicInfographicFlow","kind":"basic","name":"BasicInfographicFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"infographic_ref01"}}],"index$":0}]}, 'Infographic')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let infographic_ref01_data = Object.values(setup.data.existing.infographic)[0] as any

    // LIST
    const infographic_ref01_ent = client.Infographic()
    const infographic_ref01_match: any = {}

    const infographic_ref01_list = (await infographic_ref01_ent.list(infographic_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/infographic/InfographicTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = MediazonaSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['infographic01','infographic02','infographic03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MEDIAZONA_TEST_INFOGRAPHIC_ENTID': idmap,
    'MEDIAZONA_TEST_LIVE': 'FALSE',
    'MEDIAZONA_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['MEDIAZONA_TEST_INFOGRAPHIC_ENTID']

  const live = 'TRUE' === env.MEDIAZONA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MEDIAZONA_TEST_INFOGRAPHIC_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new MediazonaSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.MEDIAZONA_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
