/*
PropTypes.js

Valence, a JavaScript library for building UI's, with an API
resembling that of React, but uses Vanilla JS Web components
under the hood...This file handles property type-checking
functionality...

Eric James Foster, MIT License.
*/


export class PropTypes {
// static prop types...
  static boolean = {
    types: ['boolean', 'undefined'],
    isRequired: {
      types: ['boolean']
    }
  }
  static number = {
    types: ['number', 'undefined'],
    isRequired: {
      types: ['number']
    }
  }
  static string = {
    types: ['string', 'undefined'],
    isRequired: {
      types: ['string']
    }
  }
  static symbol = {
    types: ['symbol', 'undefined'],
    isRequired: {
      types: ['symbol']
    }
  }
  static object = {
    types: ['object', 'undefined'],
    isRequired: {
      types: ['number']
    }
  }
  static array = {
    types: ['array', 'undefined'],
    isRequired: {
      types: ['array']
    }
  }
}
