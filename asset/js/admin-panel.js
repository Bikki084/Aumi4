if(window.frameElement){let s=function(t){if($(parent.document.getElementsByClassName("btn-destroy")).length){var n=$(parent.document.getElementsByClassName("btn-destroy"));n.unbind().on("click",function(){setTimeout(s.bind(this,t),delay_time)})}var e=$(parent.document.getElementsByClassName("theme-editor__card")),i=!1;e.each(function(){$(this).is("[data-content-for-index]")&&(i=$(this))}),e=i;var a=e.find("li");if(a.length===1)return!1;a.each(function(){var d=$(this),o=d.data("bind-attribute"),l=d.find("> a");!o||(o=o.split(","),o=c(o[1]),l.unbind().on("click",function(){setTimeout(function(){r(t,o)},200)}),r(t,o))})},r=function(t,n){var e=t.youtube[n];if(e===void 0||!$(parent.document.getElementsByClassName("te-panel--is-active")))return!1;var i=$(parent.document.getElementsByClassName("te-panel--is-active"));if(String(i.attr("id")).indexOf("-"+n+"-")==-1)return!1;var a=i.find("h2").first();a.find("img").length==0&&(a.append(icon_youtube),a.find("img").attr("data-link",e).click(function(){window.open($(this).attr("data-link"),"_blank")}))},c=function(t){for(var n="",e=0;e<t.length;e++)t.charAt(e)==="'"||t.charAt(e)===")"||t.charAt(e)==="}"||t.charAt(e)==='"'||t.charAt(e)===" "||(n+=t.charAt(e));return n},u=function(){t(adminlinks);function t(e){var i=document.createElement("script");i.setAttribute("src",e),i.onload=n,document.body.appendChild(i)}function n(){console.log(json.version),icon_youtube=json.icon_youtube,set_images(json),setTimeout(function(){s(json)},start_delay_time)}};var addImagesInAddedWidgets=s,setYoutube=r,parseTitle=c,initExtarnalData=u,$live=$(parent.document.getElementsByClassName("theme-editor__add-section")),$added=$(parent.document.getElementsByClassName("theme-editor__index")),icon_youtube=!1,image_class="section-image",youtube_class="section-youtube",delay_time=1500,start_delay_time=4e3;$added.find(".youtubebutton").length&&$added.find(".youtubebutton").remove();var add_image=function(t,n,e){if(n.find("."+image_class).length)return!1;if(!e.images.hasOwnProperty(t))return!1;var i='<img src="'+e.defaulturl+e.images[t]+'" alt="">',a=$(i).css({width:"100%",marginTop:10}).addClass(image_class);n.append(a)},set_images=function(t){$live.each(function(){var n=$(this),e=n.data("new-section"),i,a;if(e.type)i=e.type;else return;a=n.find("button").first();var d=function(){youtube_obj.youtube.hasOwnProperty(i)&&!a.find("."+youtube_class).length&&($icon_youtube=$('<a href="'+youtube_obj.youtube[i]+'">'+icon_youtube+"</a>").css({display:"inline-block",float:"right",width:24,height:"auto"}).addClass(youtube_class),a.append($icon_youtube))};add_image(i,a,t),a.css({paddingRight:20}),a.parent().find(".theme-editor__add-section-btn").on("click",function(){setTimeout(s.bind(this,t),delay_time)}),$(parent.document.getElementsByClassName("theme-editor__subheading")).length&&($(parent.document.getElementsByClassName("theme-editor__subheading")).css({"font-weight":"900","font-size":"18px",color:"#585858"}),$(parent.document.getElementsByClassName("theme-editor__add-section-item")).each(function(){$(this).find("img").length&&$(this).css({"text-decoration":"underline","font-weight":"600"})}))})};$(document).ready(function(){$.ajax({url:adminlinks,success:function(t){u()},error:function(t,n,e){console.log(t),console.log(n),console.log(e),setTimeout(function(){$added.find("[data-section-id=show-helper]").find(".stacked-menu__item-text").html('Update Help Information.<br><span style="color:black;">General Settings > Settings:<br>HELPER > Click Update information<br><br>In opened window copy<br>new link and paste<br>in the field "Link" in theme.</span>').css("color","red").parent().find(".stacked-menu__item-icon").remove()},start_delay_time)}})}),$(document).ready(function(){setTimeout(function(){var t=$(parent.document.getElementById("section-show-helper-show-helper")),n=t.find(".next-card__section");if(n.length){if(n.find(".adminpanelcl").length)return!1;$.ajax({url:"//softali.net/shopify/wo_ap/adminpanel.html",context:document.body,success:function(e){n.append(e)}})}},3e3)})}
//# sourceMappingURL=/s/files/1/0520/1669/t/48/assets/admin-panel.js.map
