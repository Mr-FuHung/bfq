/*window.oncontextmenu = function () {
    alert('人家羞羞羞 不给看 ⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄');
    return false
};*/
// var data = [{
//     img: 'img/1.jpg',
//     src: 'music/1.m4a',
//     name: '신승훈 (申升勋)',
//     music: 'I Believe'
// }, {
//     img: 'img/2.jpg',
//     src: 'music/2.m4a',
//     name: 'BIGBANG (빅뱅)',
//     music: 'IF YOU'
// }, {
//     img: 'img/3.jpg',
//     src: 'music/3.m4a',
//     name: '袁娅维',
//     music: '说散就散'
// }, {
//     img: 'img/4.jpg',
//     src: 'music/4.m4a',
//     name: 'Charlie Puth',
//     music: 'We Don\'t Talk Anymore'
// }, {
//     img: 'img/5.jpg',
//     src: 'music/5.m4a',
//     name: '李健',
//     music: '父亲写散文诗'
// }, {
//     img: 'img/6.jpg',
//     src: 'music/6.m4a',
//     name: '周杰伦',
//     music: '稻香'
// }, {
//     img: 'img/7.jpg',
//     src: 'music/7.m4a',
//     name: '张韶涵',
//     music: '阿刁'
// }, {
//     img: 'img/8.jpg',
//     src: 'music/8.m4a',
//     name: 'Kim Ik',
//     music: 'You You You'
// }, {
//     img: 'img/9.jpg',
//     src: 'music/9.m4a',
//     name: '陈一发儿',
//     music: '童话镇'
// }, {
//     img: 'img/10.jpg',
//     src: 'music/10.m4a',
//     name: '关诗敏',
//     music: '听见下雨的声音'
// }, {
//     img: 'img/11.jpg',
//     src: 'music/11.m4a',
//     name: '다비치 ',
//     music: '这份爱'
// }, {
//     img: 'img/12.jpg',
//     src: 'music/12.m4a',
//     name: '赵雷 ',
//     music: '南方姑娘'
// }];
// //获取音频标签
// var audio = document.getElementsByTagName('audio')[0];
// var $audio = $('audio');
// // var list = '';
// var ind = 0;
// var ding;
// var posi = 1;
// var str = '';
// // 初始化页面
// // for (var i = 0; i < data.length; i++) {
// //     list += '<li>' + data[i].music + '---' + data[i].name + '</li>'
// // }
// //更新列表歌单
// // $('.list').html(list);
// // 初始化页面结束

// //更换内容
// function cut(ind) {
//     //更改专辑头像
//     $('img').attr('src', data[ind].img);
//     //更改专辑名字
//     $('.name').html(data[ind].music + '---' + data[ind].name);
//     //更改背景图片
//     $('.beijing').css({
//         'background': 'url(' + data[ind].img + ')  no-repeat 0 40%',
//         'background-size': '100% 170%'
//     });
//     //更改歌曲
//     $audio.attr('src', data[ind].src);
//     $('.list li').eq(ind).addClass('xuanzhong').siblings().removeClass('xuanzhong');
//     $('.beijing1').css('background', 'hsla(272, 66%, 17%, 0.3)');
// }

// cut(ind);

// //格式化时间
// function gtime(time) {
//     time = time >= 10 ? time : '0' + time;
//     return time;
// }

// // 判断循环模式
// function judge() {
//     // 列表循环
//     if (posi === 1) {
//         ind++;
//         ind = ind > data.length - 1 ? 0 : ind;
//         cut(ind);
//         clearInterval(ding);
//         xuanzuan();
//         $('.bofang').css({ 'background-position-x': '-30px' });
//         audio.play();
//     } else if (posi === 2) {
//         // 单曲循环
//         cut(ind);
//         clearInterval(ding);
//         xuanzuan();
//         $('.bofang').css({ 'background-position-x': '-30px' });
//         audio.play();
//     } else {
//         // 随机播放
//         var random = Math.floor(Math.random() * data.length);
//         cut(random);
//         ind = random;
//         clearInterval(ding);
//         xuanzuan();
//         $('.bofang').css({ 'background-position-x': '-30px' });
//         audio.play();

//     }
// }

// function judge1() {
//     // 列表循环
//     if (posi === 1) {
//         ind--;
//         ind = ind < 0 ? data.length - 1 : ind;
//         cut(ind);
//         clearInterval(ding);
//         xuanzuan();
//         $('.bofang').css({ 'background-position-x': '-30px' });
//         audio.play();
//     } else if (posi === 2) {
//         // 单曲循环
//         cut(ind);
//         clearInterval(ding);
//         xuanzuan();
//         $('.bofang').css({ 'background-position-x': '-30px' });
//         audio.play();
//     } else {
//         // 随机播放
//         var random = Math.floor(Math.random() * data.length);
//         cut(random);
//         ind = random;
//         clearInterval(ding);
//         xuanzuan();
//         $('.bofang').css({ 'background-position-x': '-30px' });
//         audio.play();

//     }
// }

// //音频信息加载完毕事件
// audio.addEventListener('canplay', function () {
//     var fen = parseInt(audio.duration / 60);
//     var miao = parseInt(audio.duration % 60);
//     $('.z-time').html(gtime(fen) + ':' + gtime(miao))
// });
// //音频播放事件
// audio.addEventListener('timeupdate', function () {
//     var bfen = parseInt(audio.currentTime / 60);
//     var bmiao = parseInt(audio.currentTime % 60);
//     // 当前播放时间走动
//     $('.dq-time').html(gtime(bfen) + ':' + gtime(bmiao));
//     //进度条走动
//     var jindu = (audio.currentTime / audio.duration) * $('.progress').width();
//     $('.jd-progress').css('width', jindu + 'px');
//     $('.circle').css('left', jindu + 'px');
//     //播放完毕执行
//     if (audio.ended) {
//         judge()
//     }
// });
// //点击调整位置
// $('.progress').on('click', function (e) {
//     audio.currentTime = (e.offsetX / $('.progress').width()) * audio.duration;
// });

// //头像旋转定时器
// function xuanzuan() {
//     $('img').css('animationPlayState', 'running');

// }

// //点击播放
// $('.bofang').on('click', function () {
//     if (audio.paused) {
//         // 播放
//         clearInterval(ding);
//         xuanzuan();
//         $('.bofang').css({ 'background-position-x': '-30px' });
//         audio.play();
//     } else {
//         //暂停
//         clearInterval(ding);
//         $('.bofang').css({ 'background-position-x': '0' });
//         audio.pause();
//     }
// });
// // 上一曲
// $('.syq').on('click', function () {

//     judge1();
//     audio.play();
// });
// // 下一曲
// $('.xyq').on('click', function () {
//     judge();
//     audio.play();
// });
// $('.list li').on('click', function () {
//     $('.beijing1').css('background', 'hsla(272, 66%, 17%, 0.3)');
//     ind = $(this).index();
//     //更改专辑头像
//     $('img').attr('src', data[ind].img);
//     //更改专辑名字
//     $('.name').html(data[ind].music + '---' + data[ind].name);
//     //更改背景图片
//     $('.beijing').css({
//         'background': 'url(' + data[ind].img + ')  no-repeat 0 40%',
//         'background-size': '100% 170%'
//     });
//     //更改歌曲
//     $audio.attr('src', data[ind].src);
//     $('.list li').eq(ind).addClass('xuanzhong').siblings().removeClass('xuanzhong');
//     $('.bofang').css({ 'background-position-x': '-30px' });
//     audio.play()
// });
// $('.jyin').on('click', function () {
//     //是否静音
//     if (audio.muted) {
//         $('.jyin').css({ 'background-position-y': '-145px' });
//         audio.muted = false
//     } else {
//         $('.jyin').css({ 'background-position-y': '-183px' });
//         audio.muted = true
//     }
// });
// $('.volume').on('click', function (e) {
//     //获取音量
//     audio.volume = e.offsetX / $('.volume').width();
//     // 获取位置
//     $('.dq-volume').css('width', e.offsetX + 'px');
//     $('.circle-volume').css('left', e.offsetX + 'px');
//     $('.beijing1').css('background', 'hsla(' + e.offsetX + ', 66%, 17%, 0.3)')
// });
// $('.pattern').on('click', function () {
//     if (posi === 1) {
//         $(".pattern").css('background-position-y', ' -232px');
//         posi = 2;
//     } else if (posi === 2) {
//         //单曲循环
//         $(".pattern").css('background-position-y', ' -72px');
//         posi = 3;
//     } else {
//         $(".pattern").css('background-position-y', ' -205px');
//         //随机播放
//         posi = 1;
//     }
// });
let vm = new Vue({
    el: '#app',
    data: {
        musics: [
            {
                img: 'img/1.jpg',
                src: 'music/1.m4a',
                name: '신승훈 (申升勋)',
                music: 'I Believe'
            }, {
                img: 'img/2.jpg',
                src: 'music/2.m4a',
                name: 'BIGBANG (빅뱅)',
                music: 'IF YOU'
            }, {
                img: 'img/3.jpg',
                src: 'music/3.m4a',
                name: '袁娅维',
                music: '说散就散'
            }, {
                img: 'img/4.jpg',
                src: 'music/4.m4a',
                name: 'Charlie Puth',
                music: 'We Don\'t Talk Anymore'
            }, {
                img: 'img/5.jpg',
                src: 'music/5.m4a',
                name: '李健',
                music: '父亲写散文诗'
            }, {
                img: 'img/6.jpg',
                src: 'music/6.m4a',
                name: '周杰伦',
                music: '稻香'
            }, {
                img: 'img/7.jpg',
                src: 'music/7.m4a',
                name: '张韶涵',
                music: '阿刁'
            }, {
                img: 'img/8.jpg',
                src: 'music/8.m4a',
                name: 'Kim Ik',
                music: 'You You You'
            }, {
                img: 'img/9.jpg',
                src: 'music/9.m4a',
                name: '陈一发儿',
                music: '童话镇'
            }, {
                img: 'img/10.jpg',
                src: 'music/10.m4a',
                name: '关诗敏',
                music: '听见下雨的声音'
            }, {
                img: 'img/11.jpg',
                src: 'music/11.m4a',
                name: '다비치 ',
                music: '这份爱'
            }, {
                img: 'img/12.jpg',
                src: 'music/12.m4a',
                name: '赵雷 ',
                music: '南方姑娘'
            }
        ],
        imgSrc: '',//旋转图片链接
        title: '',//标题
        backgroundImg: '',//背景图片
        audioSrc: '',//音乐链接
        start: false,//播放暂停
        audioTag: null,//标签
        minutes: '00',//总时间 分
        second: '00',//总时间 秒
        minutesed: '00',//播放时间  分
        seconded: '00',//播放时间  秒
        nowProgress: 0,//进度条 进度
        nowIndex: 0,//当前播放的文件
        muted: false,//是否静音
        mouse: false//是否在拖动

    },
    mounted() {
        this.audioTag = this.$refs.audio//选中标签
        this.changeMusic(this.musics[this.nowIndex], this.nowIndex)//初始加载
    },
    methods: {
        changeMusic(item, index) {
            this.nowIndex = index;
            //更改专辑头像
            this.imgSrc = item.img;
            //更改专辑名字
            this.title = `${item.music}---${item.name}`;
            //更改歌曲
            this.audioSrc = item.src;
            this.start = true;
        },
        loading(event) {
            // 总播放时间
            this.minutes = parseInt(this.audioTag.duration / 60)
            this.second = parseInt(this.audioTag.duration % 60)
            //播放
            // setTimeout(,10)
            this.audioTag.play()
        },
        playing() {
            // 当前播放时间走动
            this.minutesed = parseInt(this.audioTag.currentTime / 60);
            this.seconded = parseInt(this.audioTag.currentTime % 60);
           
            // //进度条走动
            if (!this.mouse) {
                this.nowProgress = (this.audioTag.currentTime / this.audioTag.duration) * this.$refs.progress.offsetWidth;
            }
            // //播放完毕执行
            if (this.audioTag.ended) {
                this.nowIndex++
            }
        },
        volume(event) {//音量点击事件  调节音量
            this.$refs['dq-volume'].style.width = event.offsetX + 'px';
            this.$refs['round-volume'].style.left = event.offsetX + 'px';
            var volume = event.offsetX / this.$refs['volume'].offsetWidth;
            this.audioTag.volume = volume;
            if (volume <= 0) {
                this.muted = true
            } else {
                this.muted = false
            }
        },
        change_progress(event) {//进度条点击事件   调整进度
            this.$refs['now_progress'].style.width = event.offsetX + 'px';
            this.$refs['round_now_progress'].style.left = event.offsetX + 'px';
            this.audioTag.currentTime = (event.offsetX / this.$refs['progress'].offsetWidth) * this.audioTag.duration;
            this.start = true;

        },
        volumeMousedown(event) {//音量拖动事件
            var l = event.clientX - this.$refs['round-volume'].offsetLeft;
            var width = event.path[2].offsetWidth;
            var _this = this;
            document.body.onmousemove = function (el) {
                var left = el.clientX - l;
                if (left > width) {
                    _this.$refs['round-volume'].style.left = width + 'px'
                    _this.$refs['dq-volume'].style.width = width + 'px';
                    _this.audioTag.volume = 1;

                } else if (left < 0) {
                    _this.$refs['round-volume'].style.left = 0 + 'px'
                    _this.$refs['dq-volume'].style.width = 0 + 'px';
                    _this.audioTag.volume = 0;
                    _this.muted = true
                } else {
                    _this.$refs['round-volume'].style.left = left + 'px'
                    _this.$refs['dq-volume'].style.width = left + 'px';
                    _this.audioTag.volume = (left / width)
                    _this.muted = false
                }
            }.bind(this.$refs['round-volume'])
            document.body.onmouseup = function () {
                document.body.onmousemove = document.body.onmouseup = null
            }

        },
        progressMousedown() {//进度拖动事件
            var l = event.clientX - this.$refs['round_now_progress'].offsetLeft;
            var width = event.path[2].offsetWidth;
            this.mouse = true;
            var _this = this;
            var left = null;
            document.body.onmousemove = function (el) {
                left = el.clientX - l;
                if (left > width) {
                    _this.nowProgress = width
                } else if (left < 0) {
                    _this.nowProgress = 0;
                } else {
                    _this.nowProgress = left
                }
            }.bind(this.$refs['round-volume'])
            document.body.onmouseup = function (el) {
                // _this.audioTag.currentTime = left * _this.audioTag.duration;
                document.body.onmousemove = document.body.onmouseup = null;
                _this.audioTag.currentTime = (left /width) * _this.audioTag.duration;
                _this.mouse = false;
                _this.start = true;
                
            }.bind(this.$refs['round-volume'])
        }
    },
    watch: {
        start(newval) {//暂停播放
            if (newval) {
                this.audioTag.play()
            } else {
                this.audioTag.pause()
            }
        },
        nowIndex(newval) {//切换歌曲
            var length = this.musics.length;
            if (newval < 0) {
                this.nowIndex = length - 1
            } else if (newval >= length) {
                this.nowIndex = 0
            }
            this.changeMusic(this.musics[this.nowIndex], this.nowIndex)
        },
        muted(newval) {//静音
            if (newval) {
                this.audioTag.muted = true;
            } else {
                this.audioTag.muted = false;
            }
        }
    }
})
