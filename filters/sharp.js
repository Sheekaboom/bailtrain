//import required libraries

const sharp = require('sharp');
const path = require('path');
const deasync = require('deasync');
const fs = require('fs');

module.exports = {

    sharpBlurBase64: function(img_path,fit){
        //var img_split = a.split(/\.(?![\/\.]+)/);
        //var img_out_path = img_split[0]+'_tiny.'+img_split[1];
        var done = false;
        var img_small;
        img_path = './site/'+img_path;
        console.log("$$$ -- "+img_path);
        if(fs.existsSync(img_path)){
          sharp(img_path).resize({width:15,height:9,fit:fit}).toBuffer((err,data,info)=>{if(err){console.log(err);};done=true;img_small=data;});
          deasync.loopWhile(function(){return !done});
          var imgb64 = 'data:image/png;base64,'+img_small.toString('base64')
          //console.log(imgb64)
          //console.log("### -- "+img_small);
          return imgb64
        } else {
          console.log("Error: Image not found "+img_path);
          return img_path;
        }
    },
    
    sharpResize: function(img_path,width,height,fit){
        //var img_split = a.split(/\.(?![\/\.]+)/);
        //var img_out_path = img_split[0]+'_tiny.'+img_split[1];
        var done = false;
        //assume path is /path/from/git/base.png
        var mypath = path.parse('./'+img_path)
        var out_path = path.join(mypath.dir,mypath.name+'_w'+width+'_h'+height+'_'+fit+mypath.ext);
        var write_out_path = './'+path.join('./_site',out_path);
        img_path = './site/'+img_path;
        //console.log("$?$?$ -- "+img_path);
        //console.log("$#$#$ -- "+write_out_path);
        // if out path exists, just use whats there (delete if needed)
        if(fs.existsSync(write_out_path)){
          console.log("$$$ -- Skipping. File exists: "+out_path)
          return '/'+out_path
        }
        if(fs.existsSync(img_path)){
          var sinfo = sharp(img_path).resize({width:parseInt(width),height:parseInt(height),fit:fit,background:{r:255,g:255,b:255,alpha:0}}).toFile(write_out_path,(err,info)=>{if(err){console.log(err);};done=true;return info});
          deasync.loopWhile(function(){return !done});
          return '/'+out_path
        } else {
          console.log("Error: Image not found "+img_path);
          return img_path;
        }
      }
}