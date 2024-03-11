// ffmpeg 一个流媒体转码、剪辑、加减水印等开源程序

const {execSync, spawn} = require('node:child_process')

// const {stdout} = spawn('ffmpeg',['-i','test.mp4','test.mp3'])
// stdout.on('data',(msg)=> {
//     console.log(msg)
// })
execSync("ffmpeg -i test.mp4 test.avi",{stdio:"inherit"})