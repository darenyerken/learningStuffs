# node marks

## 模块化

### CommonJs规范

1. 导出  
    ``module.export = {xxx,xxx}``
    ``exports.xxx = xxx``
2. 导入  
    ``require('./xxx')``直接导入代码块  
    ``xxx = require('./xxx')``导入模块，可以直接导入json文件

### es模块化规范

需要设置packagejson，否则默认CommonJs规范

## 全局变量

- globalThis在浏览器中是window，在node中是global
- ``__dirname`` 是当前文件所在目录的绝对位置;``__filename`` 当前文件的绝对位置
- node默认是没有DOM，BOM的API的，但可以使用第三方库 jsdom 安装使用，就可以实现服务端渲染
- 除了DOMBOM之外的其他ea的API都有，还有一些内置API例如process，fs，http等 例如 ``const path = require('node:path')

## SSR、CSR、SEO

- SSR 服务端渲染，可以在后台使用模拟浏览器环境的库预先渲染后发送给前端浏览器，例如jsdom，也有利于SEO
- CSR 浏览器渲染，例如vue、react等都是浏览器渲染，不利于SEO
- 一般ToB业务不需要SEO优化，ToC业务需要提高曝光所以需要SEO，例如官网等

## path

- windows系统不完全遵循posix规范、posix规范的文件路径分隔符是斜杠``/``，而windows系统是反斜杠``\\``
- 