
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
    base: "https://s3.zona.media",

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
          "name": "url",
          "type": "`$STRING`"
        }
      ],
      "name": "infographic",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "cae8add5",
                    "kind": "query",
                    "name": "cachebuster",
                    "orig": "cachebuster",
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
              }
            }
          ]
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

