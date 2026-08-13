
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'Mediazona',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: 'https://s3.zona.media',

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      infographic: {
      },

    }
  }


  entity = {
    "infographic": {
      "fields": [
        {
          "active": true,
          "name": "url",
          "req": false,
          "type": "`$STRING`",
          "index$": 0
        }
      ],
      "name": "infographic",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "example": "cae8add5",
                    "kind": "query",
                    "name": "cachebuster",
                    "orig": "cachebuster",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/infographics/g200w/urls.json.gz",
              "parts": [
                "infographics",
                "g200w",
                "urls.json.gz"
              ],
              "select": {
                "exist": [
                  "cachebuster"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.urls`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

