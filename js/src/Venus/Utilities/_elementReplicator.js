/*
** elementReplicator.js
**
** elementReplicator.js is a node programm that takes a Venus element/
** component creation code template and with a given array of element names,
** generates the files/code necessary to instantiate those elements...
**
** Eric James Foster, Fostware LLC, MIT License.
***/

const fs = require('fs')


let loader,
replicator,
stamper,
template = fs.readFileSync(
  './elTemplate.js'
),
elements = [
    // {
    //   UppercaseName: 'Area',
    //   name: 'area'
    // },
    // {
    //   UppercaseName: 'Col',
    //   name: 'col'
    // },
    // {
    //   UppercaseName: 'Aside',
    //   name: 'aside'
    // },
    // {
    //   UppercaseName: 'Colgroup',
    //   name: 'colgroup'
    // },
    // {
    //   UppercaseName: 'Footer',
    //   name: 'footer'
    // },
    // {
    //   UppercaseName: 'Header',
    //   name: 'header'
    // },
    {
      UppercaseName: 'H2',
      name: 'h2',
      Constructor: 'Heading',
      attr0: 'content'
    },
    {
      UppercaseName: 'H3',
      name: 'h3',
      Constructor: 'Heading',
      attr0: 'content'
    },
    {
      UppercaseName: 'H4',
      name: 'h4',
      Constructor: 'Heading',
      attr0: 'content'
    },
    {
      UppercaseName: 'H5',
      name: 'h5',
      Constructor: 'Heading',
      attr0: 'content'
    },
    {
      UppercaseName: 'H6',
      name: 'h6',
      Constructor: 'Heading',
      attr0: 'content'
    },
    {
      UppercaseName: 'Section',
      name: 'section',
      attr0: 'content'
    },
    {
      UppercaseName: 'Span',
      name: 'span',
      attr0: 'content'
    },
    // {
    //   UppercaseName: 'Table',
    //   name: 'table'
    // },
    {
      UppercaseName: 'TextArea',
      name: 'textarea',
      attr0: 'content'
    },
  ]

  // A node.js code templating function. The function takes a string of code, and
  // an object containing replacement values.
loader =(obj, code)=> {
// Replacement regexp...
  let replaceRE = /\|\|[\w 0-9]+\|\|/,
  variableRE    = /[\w 0-9 ]+/,
  variable,
  tuple = [],
  match,
  temp
// Convert code to string format...
  code = String(code)

// If we find a replacement match,
  if (replaceRE.test(code)) {
// store it...
    match = replaceRE.exec(code)[0]
// extract the variable from the match...
    if (variableRE.test(match)) {
// extract...
      variable = variableRE.exec(match)[0]
    }
// Replace it in the original code with...
    if (obj[variable]) {
      temp  = code.replace(
        match,
        obj[variable]
      )
    } else if (variable == 'Constructor') {
      temp  = code.replace(
        match,
        obj.UppercaseName
      )
    } else {
      temp  = code.replace(
        match,
        '-----'
      )
    }
  }

// See if we still have matches...
  if (replaceRE.test(temp)) {
// And if we do... recurse....
    return loader(obj, temp)
  } else {
// load tuple with UppercaseName and code...
    tuple.push(obj.UppercaseName)
    tuple.push(temp)
// Return the tuple...
    return tuple
  }
}



// A node.js function for filling out and returning in an array, templates, given an array
// of replacement objects and a template....
replicator =(objArray, template)=> {
  let loaded,
  loadedArray = []

// Load each template using the above template function...
  objArray.forEach((obj)=> {
// Load a template...
    loaded = loader(obj, template)
// Push a filename/code tuple to the array...
    loadedArray.push(loaded)
  })
// Return the array...
  return loadedArray
  }


// Function takes an array of code bits and saves them
stamper =(codeArray)=> {
// Cycle through the array of tuples...
  codeArray.forEach((tuple)=> {
// Write the files to disk...
    fs.writeFile(`../Elements/${tuple[0]}.js`, tuple[1], (err)=> {
// If there's a problem..
      if (err) {
// Throw....
        throw err
      } else {
// Log success...
        console.log(`Saved File -- ${tuple[0]}.js`)
      }
    })
  })
}

stamper(
  replicator(elements, template)
)
