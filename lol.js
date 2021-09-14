var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function Derpy(pony)
{
    Derpy.posx = 0;
    Derpy.posy = 0;
    Derpy.pony = pony || "derpy";
    Derpy.oldaction = Derpy.action = (Derpy.pony=="twi")?"idle":"stand";
    Derpy.oldposition = Derpy.position = "right";
    Derpy.ijdkwww = new Audio("https://web.archive.org/web/20190121181824/http://julosoft.net/ponies/Derpy/wrong.mp3");
    Derpy.img = null;

Derpy.loadScript = function(url, callback)
{
    var script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) { //IE
        script.onreadystatechange = function ()
        {
            if (script.readyState == "loaded" || script.readyState == "complete")
            {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else { //Others
        script.onload = function () {
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

Derpy.loop = function()
{
	if(parseInt(Derpy.img.css("top"))>(Derpy.posy-jQuery(document).scrollTop()))
	{
		Derpy.img.css("top", "-=1");
	}
	else if(parseInt(Derpy.img.css("top"))+96<(Derpy.posy-jQuery(document).scrollTop()))
	{
		Derpy.img.css("top", "+=1");
	}
	if(parseInt(Derpy.img.css("left"))+Derpy.img.width()<(Derpy.posx-jQuery(document).scrollLeft())) // keys[39]
	{
		if(parseInt(Derpy.img.css("top")) >= jQuery(window).height()-97)
			Derpy.action = (Derpy.pony=="twi")?"trot-wings":"walking";
		else
			Derpy.action = (Derpy.pony=="twi")?"flight":"fly";
		Derpy.position = "right";
		Derpy.img.css("left", "+=1");
	}
	else if(parseInt(Derpy.img.css("left"))>(Derpy.posx-jQuery(document).scrollLeft())) // keys[37]
	{
		if(parseInt(Derpy.img.css("top")) >= jQuery(window).height()-97)
			Derpy.action = (Derpy.pony=="twi")?"trot-wings":"walking";
		else
			Derpy.action = (Derpy.pony=="twi")?"flight":"fly";
		Derpy.position = "left";
		Derpy.img.css("left", "-=1");
	}
	else
	{
		if(parseInt(Derpy.img.css("top")) >= jQuery(window).height()-97)
			Derpy.action = (Derpy.pony=="twi")?"idle":"stand";
		else
		{
			Derpy.action = (Derpy.pony=="twi")?"flight":"hover";
		}
	}
	if(Derpy.oldaction != Derpy.action || Derpy.oldposition != Derpy.position)
		if(Derpy.pony == "twi") Derpy.img.attr("src", "https://web.archive.org/web/20190121181824/http://julosoft.net/ponies/Princess Twilight Sparkle/p-twi-"+Derpy.action+"-"+Derpy.position+".gif");
		else Derpy.img.attr("src", "https://web.archive.org/web/20190121181824/http://julosoft.net/ponies/Derpy/derpy_"+Derpy.action+"_"+Derpy.position+".gif");
	Derpy.oldaction = Derpy.action;
	Derpy.oldposition = Derpy.position;
}

Derpy.load = function()
{
    Derpy.posy = jQuery(window).height()-97;
    var fps = 60;
    Derpy.img = jQuery(document.createElement('img')).attr("src", (Derpy.pony=="twi")?"https://web.archive.org/web/20190121181824/http://julosoft.net/ponies/Princess Twilight Sparkle/p-twi-idle-right.gif":"https://web.archive.org/web/20190121181824/http://julosoft.net/ponies/Derpy/derpy_stand_right.gif");
    jQuery("body").append(Derpy.img);
    Derpy.img.css("position", "fixed")
	.css("top", jQuery(window).height()-97)
	.css("left", "0px")
	.css("z-index", "9001");
    setInterval(Derpy.loop, 1000/fps);
    jQuery(document).mousemove(function(e){
        Derpy.posx=e.pageX;
        Derpy.posy=e.pageY;
    });
    if(Derpy.pony == "derpy") Derpy.img.click(function(e){
        Derpy.ijdkwww.currentTime=0;
        Derpy.ijdkwww.play();
    });
}
    if (typeof jQuery == 'undefined') {
        Derpy.loadScript("https://web.archive.org/web/20190121181824/https://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js", Derpy.load);
    }
    else
    {
        Derpy.load();
    }
}


}
/*
     FILE ARCHIVED ON 18:18:24 Jan 21, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:36:07 Sep 14, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 75.525
  exclusion.robots: 0.201
  exclusion.robots.policy: 0.192
  RedisCDXSource: 0.518
  esindex: 0.007
  LoadShardBlock: 54.265 (3)
  PetaboxLoader3.datanode: 45.813 (4)
  CDXLines.iter: 17.844 (3)
  load_resource: 39.17
  PetaboxLoader3.resolve: 33.816
*/
