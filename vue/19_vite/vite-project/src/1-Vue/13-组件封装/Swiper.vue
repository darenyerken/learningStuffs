<template>
    <div id="swiper">
        <div id="imgs" @mousedown.stop="slide">
            <slot></slot>
        </div>
    </div>
</template>

<script>

    export default {
        data(){
            return {
                curIndex:0,
                swiperWidth:0
            }
        },
        methods: {
            slide(e){
                const _this = e.target.parentNode
                let startX = e.clientX
                let movedX = 0
                let startLeft = _this.offsetLeft
                _this.onmousemove= function(e){
                    movedX = e.clientX-startX
                }
                _this.addEventListener('mouseup',(e)=>{
                    _this.onmousemove = null
                    if( movedX < -30 && _this.offsetLeft%Number.parseInt(this.swiperWidth) ===0) {
                        _this.style.left = (startLeft - Number.parseInt(this.swiperWidth)) +'px'
                    } else if(movedX > 30 && _this.offsetLeft%Number.parseInt(this.swiperWidth) ===0) {
                        _this.style.left = (startLeft + Number.parseInt(this.swiperWidth)) +'px'
                    } 
                    movedX = 0
                })
            }
        },
        mounted() {
            // 获取父组件定义的视口宽度
            const outer = document.querySelector('#swiper')
            this.swiperWidth = window.getComputedStyle(outer).width
            // 获取视口dom
            const container = document.querySelector('#imgs')
            // 将视口初始化为第一张图片
            container.style.left = '-' + this.swiperWidth
            this.curIndex = 0
            const imgs = container.querySelectorAll('li')
            // 初始化父组件传来的图片
            for( let i = 0; i < imgs.length; i++) {
                imgs[i].style.flexShrink = '0'
                // 将最后一张图片放到第一张图片的左边
                if( i === imgs.length-1) {      
                    imgs[i].style.order = 0
                } else {
                    imgs[i].style.order = i+1
                }
            }
        },
        watch:{
            curIndexChange(){
                this.curIndex
            }
        },
        props:{
            spaceBetween:{
                type:String,
                default:'0'
            },
            piecesEachPage:{
                type:Number,
                default:1
            },
            loop:{
                type:Boolean,
                default:true
            },
            pager:{
                type:Boolean,
                default:true
            },
            arrows:{
                type:Boolean,
                default:true
            },
            carouselStrip: {
                type:Boolean,
                default:true
            },
            direction:{
                type:String,
                validator( value) {
                    return ['row','column'].includes(value)
                },
                default:'row'
            },
            auto:{
                type:Boolean,
                default:true
            }
        }
    }
</script>

<style scoped>
    #swiper {
        position: relative;
        overflow: hidden;
    }
    #imgs {
        /* width: 100%; */
        height: 100%;
        overflow: visible;

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;

        position: absolute;
        cursor: pointer;

        transition-delay: 0ms;
        transition-duration: .5s;
        transition-timing-function: ease;
        transition-property: left;
    }
</style>