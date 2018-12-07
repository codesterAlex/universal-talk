var fs = require('fs');

function getBears(filepath, done){

  fs.readFile(filepath, function(err, bears){
    if(err) return done(err)

    fs.readFile('bears.dictionary', function(err, dict)
    {
      if(err) return done(err)

      compareBears(bears, dict)
    })
  })

  function compareBears(bears, dict)
  {
    dict = dict.toString().split('\n');
    bears = bears.toString().split('\n').filter(function(bear)
  {
    return dict.indexOf(bear) !== -1;
  })
    done(null, bears)
  }
}

getBears('bears.txt', function(err,bears){
  console.log(bears)
})
