 module.exports = {
     configureWebpack: {
         output: {
             library: 'singleVue',
             libraryTarget: 'umd'
         },
         devServer: {
             port: 10000
         }
     }
 }

 // umd格式就是会把导出的内容挂载在window.singleVue.bootstrap/mount/unmount上面