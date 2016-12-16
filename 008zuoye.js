//数组forEach方法补丁
Array.prototype.forEach = function(callback){
  var a = 0,
    len = this.length;
  while(a < len){
    callback(this[a], a++, this);
  }
};
//数组map方法补丁
Array.prototype.map = function(callback){
  var a = 0,
    len = this.length,
    result = [];
  while(a < len){
    result.push(callback(this[a], a++, this));
  }
  return result;
};
//数组map方法补丁
Array.prototype.filter = function(callback){
  var a = -1,
    len = this.length,
    result = [];
  while(++a < len){
    callback(this[a], a, this) && result.push(this[a]);
  }
  return result;
};
var dataimg=[
  {
    url:"./images/50677_0_1397287969.jpg",
    hrefs:"https://www.baidu.com"
  },
  {
    url:"./images/20140409161503_45624.jpg",
    hrefs:"https://nuomi.baidu.com"
  },
  {
    url:"./images/guohua.jpg",
    hrefs:"https://tieba.baidu.com"
  },
  {
    url:"./images/hua.jpg",
    hrefs:"https://tieba.baidu.com"
  }
];
function lunbo(dataimg){
  function lunbotu(url,href){
    var pic=document.createElement("a");
      pic.href=href;
      pic.style.background="url("+url+") no-repeat";
      return pic;
  }
  var imagesall=document.createElement("div");
    imagesall.className="mainimg";
  var images=dataimg.map(function(item){
    var img=lunbotu(item.url,item.hrefs);
    imagesall.appendChild(img);
    return img;
    });
  var a=0,
    imageslen=dataimg.length,
    imagesindex=dataimg.length-1;
    images[0].className="current";
  var timer=setInterval(function(){
    now=(now+1)%yuandian.length;
      my();  
  },3000);

  imagesall.onmouseover= function () { 
     clearInterval(timer); 
    };

  imagesall.onmouseout= function() { 
     timer=setInterval(function(){
     now=(now+1)%yuandian.length;
      my();
    },3000);
    }
    
  var lefter=document.createElement("div");
    lefter.className="lefter";
  lefter.onclick=function(){
    if(now==0){now=yuandian.length};
   now=(now-1)%yuandian.length;
      my(); 
  }
  var righter=document.createElement("div");
    righter.className="righter";
  righter.onclick=function(){
  now=(now+1)%yuandian.length;
      my();
  }
  var yuandian= document.getElementById('point').getElementsByTagName('li');
  var now=0;
  function my(){
          for(var i=0; i<yuandian.length; i++){
          yuandian[i].style.background='black'; 
          images[i].className="currentmove"
                } 
          images[now].className="current";
          yuandian[now].style.background='red'
            };
  for(var i=0; i<yuandian.length; i++){
    yuandian[i].index=i;
    yuandian[i].onclick= function(){
    now=this.index;
    my();
  }
  };
  var Fragment=document.createDocumentFragment(); 
  imagesall.appendChild(righter);
  imagesall.appendChild(lefter);
  Fragment.appendChild(imagesall);
  document.getElementById("main").appendChild(Fragment);
  }
  lunbo(dataimg);




