(function($){
	// Settings基本设置
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'false',
		continous = true,
		autoplay = true,
		playlist = [
			{
				title:'Nobody Could Survive',
				artist:'ARK',
				album:'方舟:生存进化',
				cover:'img/ARK.gif',
				mp3:'mp3/Nobody Could Survive(ARK).mp3',
				menu:'no',
				ogg:'',
			},
			{
				title:'《艹不起》(光哥加音乐版)',
				artist:'主唱：伟哥＆副唱：光哥 俊哥',
				album:'本人(光哥)太丑，就不放照片了',
				cover:'img/1.gif',
				mp3:'mp3/1.mp3',
				menu:'no',
				ogg:'',
			},
			{
				title:'大悲咒',
				artist:'',
				album:'富强、民主、文明、和谐<br>自由、平等、公正、法治<br>爱国、敬业、诚信、友善',
				cover:'img/fozhu.jpg',
				mp3:'mp3/dabeizou.mp3',
				menu:'no',
				ogg:'',
			},
			{
				title:'爱情买卖',
				artist:'楚河',
				album:'YY90327',
				cover:'img/chuhe.gif',
				mp3:'mp3/chuhe.mp3',
				menu:'no',
				ogg:'',
			},
			{
				title:'Overwatch大招语音及彩蛋',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'',
				menu:'yes',
				ogg:'',
			},
			{
				title:'我看到你了',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/76-1.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:"I've got you in my sights",
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/76-3.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'Tactical Visor activated',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/76-4.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'死吧，死吧',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Reaper-2.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'Die Die Die',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Reaper-4.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'天降正义',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Pharah-2.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'Justice rains from above',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Pharah-4.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'龍神の剣を喰らえ',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Genji-2.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'时间到了',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Tracer-1.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:"Time's up",
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Tracer-3.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'午时已到',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Mccree-2.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:"It's high noon",
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Mccree-4.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'龙が我が敌を食らう',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Hanzo-1.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'哔哔哔',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Bastion-1.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'熔火核心',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Torbjorn-1.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'Molten core',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Torbjorn-2.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'女士们,先生们,炸弹轮胎滚起来啦',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Junkrat-1.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'Fire in the hole',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Junkrat-2.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'冻住,不许走',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Mei-1.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'没人可以躲过我的眼睛',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Widowmaker-1.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'No one can hide from my sight',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Widowmaker-2.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'正在启动自毁程序',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/D.VA-1.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'这太IMBA了',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/D.VA-2.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'Nerf this',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/D.VA-3.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'随意开火',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Zarya-1.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'Огонь по готовности',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Zarya-2.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'嗷嗷嗷',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Winston-1.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'吃我一锤',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Reinharot-1.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'Hammer Down',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Reinharot-2.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'嗯哈吼嗯哈吼',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Roadhog-1.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'这太IMBA了',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Pharah-4.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'来点音乐',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Lúcio-2.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:"Oh, let's break it down",
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Lúcio-3.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:"Let's drop the beat",
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Lúcio-4.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'英雄不朽',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Mercy-1.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'Heroes never die',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Mercy-2.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'遁入智瞳',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Zenyatta-2.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'Experience tranquility',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Zenyatta-3.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'Pass into the Iris',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Zenyatta-4.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'传送面板上线，我已经打开通路',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Symmetra-1.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'传送面板上线，我们行动会更加迅捷',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Symmetra-2.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'Teleporter online,I have opened the path',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Symmetra-3.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'911',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/911.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'你们这群白痴在干什么,方向错了',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/idiot.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'请~,不要打脸',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/papaface.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'彩虹关',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/Whimsyshire.mp3',
				menu:'list',
				ogg:'',
			},
			{
				title:'什么?什么?我不知道,打给我秘书',
				artist:'',
				album:'Blizzard',
				cover:'img/overwatch.jpg',
				mp3:'mp3/overwatch/what.mp3',
				menu:'list',
				ogg:'',
			}
			];
			playlistlength=playlist.length-47;
	// Load playlist加载播放列表
	$(document).ready(function(){
		$("li#menu").click(function(){
			$("li#liebiao").show();
		});
		$("li#music").click(function(){
			$("li#liebiao").hide(500);
		});
		$("li#liebiao").click(function(){
			$("li#menu").css('background','url(css/images/jian.png)  no-repeat 0 center');
		});
		$("li#music").click(function(){
			$("li#menu").css('background','url(css/images/jia.png) no-repeat 0 center');
		});
		$("li#menu").click(function(){
			$("li#menu").css('background','url(css/images/jian.png) no-repeat 0 center');
		});
	});
	for (var i=0; i<playlist.length; i++){
		var item = playlist[i];
		if (item.artist=='')
		{
			if (item.menu=='list') {
				$('#playlist').append('<li id="liebiao" style="display:none;">'+item.title+'</li>');
			}
			else if (item.menu=='yes') {
				$('#playlist').append('<li id="menu">'+item.title+'</li>');
			}
			else {
				$('#playlist').append('<li id="music">'+item.title+'</li>');
			}
		}
		else
		{
			$('#playlist').append('<li id="music">'+item.title+' - '+item.artist+'</li>');
		}
	}

	var time = new Date(),
		currentTrack = shuffle === 'true' ? time.getTime() % playlistlength : 0,
		trigger = false,
		audio, timeout, isPlaying, playCounts;

	var play = function(){
		audio.play();
		$('.playback').addClass('playing');
		timeout = setInterval(updateProgress, 500);
		isPlaying = true;
	}

	var pause = function(){
		audio.pause();
		$('.playback').removeClass('playing');
		clearInterval(updateProgress);
		isPlaying = false;
	}

	// Update progress已播放时间
	var setProgress = function(value){
		var currentSec = parseInt(value%60) < 10 ? '0' + parseInt(value%60) : parseInt(value%60),
			ratio = value / audio.duration * 100;

		$('.timer').html(parseInt(value/60)+':'+currentSec);
		$('.progress .pace').css('width', ratio + '%');
		$('.progress .slider a').css('left', ratio + '%');
	}

	var updateProgress = function(){
		setProgress(audio.currentTime);
	}

	// Progress slider进度条滑块
	$('.progress .slider').slider({step: 0.1, slide: function(event, ui){
		$(this).addClass('enable');
		setProgress(audio.duration * ui.value / 100);
		clearInterval(timeout);
	}, stop: function(event, ui){
		audio.currentTime = audio.duration * ui.value / 100;
		$(this).removeClass('enable');
		timeout = setInterval(updateProgress, 500);
	}});

	// Volume slider音量条滑块
	var setVolume = function(value){
		audio.volume = localStorage.volume = value;
		$('.volume .pace').css('width', value * 100 + '%');
		$('.volume .slider a').css('left', value * 100 + '%');
	}

	var volume = localStorage.volume || 0.5;
	$('.volume .slider').slider({max: 1, min: 0, step: 0.01, value: volume, slide: function(event, ui){
		setVolume(ui.value);
		$(this).addClass('enable');
		$('.mute').removeClass('enable');
	}, stop: function(){
		$(this).removeClass('enable');
	}}).children('.pace').css('width', volume * 100 + '%');

	$('.mute').click(function(){
		if ($(this).hasClass('enable')){
			setVolume($(this).data('volume'));
			$(this).removeClass('enable');
		} else {
			$(this).data('volume', audio.volume).addClass('enable');
			setVolume(0);
		}
	});
	// Switch track矫正i并播放
	var switchTrack = function(i){
		if (i < 0){
			track = currentTrack = playlist.length - 1;
		} else if (i >= playlist.length){
			track = currentTrack = 0;
		} else {
			track = i;
		}

		$('audio').remove();
		loadMusic(track);
		if (isPlaying == true) play();
	}

	// Shuffle随机播放
	var shufflePlay = function(){
		var time = new Date(),
			lastTrack = currentTrack;
		currentTrack = time.getTime() % playlistlength;
		if (lastTrack == currentTrack) ++currentTrack;
		switchTrack(currentTrack);
	}

	// Fire when track ended连续播放
	var ended = function(){
		pause();
		audio.currentTime = 0;
		playCounts++;
		if (continous == true) isPlaying = true;
		if (repeat == 1){
			play();
		} else {
			if (shuffle === 'true'){
				shufflePlay();
			} else {
				if (repeat == 2){
					switchTrack(++currentTrack);
				} else {
					if (currentTrack < playlist.length) switchTrack(++currentTrack);
				}
			}
		}
	}

	var beforeLoad = function(){
		var endVal = this.seekable && this.seekable.length ? this.seekable.end(0) : 0;
		$('.progress .loaded').css('width', (100 / (this.duration || 1) * endVal) +'%');
	}

	// Fire when track loaded completely加载完成后开始播放
	var afterLoad = function(){
		if (autoplay == true) play();
	}
	// Load track加载歌曲
	var loadMusic = function(i){
		var item = playlist[i],
			newaudio = $('<audio>').html('<source src="'+item.mp3+'"><source src="'+item.ogg+'">').appendTo('#player');
		
		$('.cover').html('<img src="'+item.cover+'" alt="'+item.album+'">');
		$('.tag').html('<strong>'+item.title+'</strong><span class="artist">'+item.artist+'</span><span class="album">'+item.album+'</span>');
		$('#playlist li').removeClass('playing').eq(i).addClass('playing');
		// download下载
        document.getElementById("download").href=item.mp3;
		// 不懂js的我就搞上面一行代码都好累>_<...就为了实现下载功能QAQ...
		audio = newaudio[0];
		audio.volume = $('.mute').hasClass('enable') ? 0 : volume;
		audio.addEventListener('progress', beforeLoad, false);
		audio.addEventListener('durationchange', beforeLoad, false);
		audio.addEventListener('canplay', afterLoad, false);
		audio.addEventListener('ended', ended, false);
	}

	loadMusic(currentTrack);
	$('.playback').on('click', function(){
		if ($(this).hasClass('playing')){
			pause();
		} else {
			play();
		}
	});
	$('.rewind').on('click', function(){
		if (shuffle === 'true'){
			shufflePlay();
		} else {
			switchTrack(--currentTrack);
		}
	});
	$('.fastforward').on('click', function(){
		if (shuffle === 'true'){
			shufflePlay();
		} else {
			switchTrack(++currentTrack);
		}
	});
	$('#playlist li').each(function(i){
		var _i = i;
		$(this).on('click', function(){
			switchTrack(_i);
		});
	});

	if (shuffle === 'true') $('.shuffle').addClass('enable');
	if (repeat == 1){
		$('.repeat').addClass('once');
	} else if (repeat == 2){
		$('.repeat').addClass('all');
	}

	$('.repeat').on('click', function(){
		if ($(this).hasClass('once')){
			repeat = localStorage.repeat = 2;
			$(this).removeClass('once').addClass('all');
		} else if ($(this).hasClass('all')){
			repeat = localStorage.repeat = 0;
			$(this).removeClass('all');
		} else {
			repeat = localStorage.repeat = 1;
			$(this).addClass('once');
		}
	});

	$('.shuffle').on('click', function(){
		if ($(this).hasClass('enable')){
			shuffle = localStorage.shuffle = 'false';
			$(this).removeClass('enable');
		} else {
			shuffle = localStorage.shuffle = 'true';
			$(this).addClass('enable');
		}
	});
})(jQuery);
/*
本代码由素材家园收集并编辑整理;
尊重他人劳动成果;
转载请保留精品代码链接 - www.jphtml.com
*/