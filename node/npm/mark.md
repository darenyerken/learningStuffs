# 笔记

## package.json

- 版本号中第一的数字表示重大更新，第二个表示功能升级，第三个表示bug修复
- 在通过package下载时，dependencies中的 ^ 表示大版本不变锁定 如2.3.0中的2，下载2大版本中的最新版
                                    ~ 表示3不变，精准下载2.3.x版本

## npm run 原理

1. 在当前项目的nodemodules中的.bin 文件夹中寻找脚本
2. 找不到第二步就去全局的nodemodules中的.bin文件夹中找
3. 找不到就找全局配置的脚本
4. 再找不到就报错

## npm intall 原理 

1. 先去找当前 项目的.npmrc文件（npm配置文件）-> 用户的的npmrc文件... 去寻找npm配置信息
2. 然后查看package文件和packagelock文件（两个不一样就更新packagelock文件）是否有记录，没有就添加进去
3. 然后查看缓存中是否有当前包，没有就下载并添加到缓存中
   
- npm理想状态下是扁平化管理包，及两个包同时依赖相同版本的另一个包，npm就会只保存一份这第三个包，避免冗余
- 搜索依赖树是广度优先算法
- .bin文件夹存放命令脚本
- @开头文件都是安装的包依赖的包

## npx

- npx主要是用来执行命令的,例如vite命令，如果本地没有安装vite就临时安装并使用然后卸载