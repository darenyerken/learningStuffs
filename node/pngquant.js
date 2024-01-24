const { exec } = require('child_process');

exec('D:\\pngquant\\pngquant JW.png --speed=1 --quality=100 --output JW4.png', (error, stdout, stderr) => {
  if (error) {
    console.error(`执行错误: ${error}`);
    return;
  }
  if (stderr) {
    console.error(`标准错误输出: ${stderr}`);
    return;
  }
  console.log(`标准输出: ${stdout}`);
});
