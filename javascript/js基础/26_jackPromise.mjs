export function jackPromise(excutor) {
    this.status = 'pending'
    this.result = undefined
    let _this = this
    this._wait = []
    function resolve( data){
        if( _this.status !== 'pending') return   //调用resolve的将会是window,因为它异步 
        _this.status = 'fulfilled'
        _this.result = data
        _this._wait.forEach(item => {
            item.successCB && item.successCB( _this.result)
        });
    }
    function reject( data){
        if( _this.status !== 'pending') return   //调用resolve的将会是window,因为它异步 
        _this.status = 'rejected'
        _this.result = data
        _this._wait.forEach(item => {
            item.failCB && item.failCB( _this.result)
        });
    }
    excutor(resolve,reject)
}

jackPromise.prototype.then = function( successCB,failCB){
    if( this.status === 'fulfilled') {
        successCB && successCB( this.result)
    } else if( this.status === 'rejected') {
        failCB && failCB(this.result)
    } else {
        this._wait.push({
            successCB,
            failCB
        })
    }
}