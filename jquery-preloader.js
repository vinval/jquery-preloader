/***
 * INIT:
 * {
 *  where: $(document.body),
 *  image: false,
 *  text: false,
 *  width: "50px",
 *  align: "center",
 *  valign: "middle",
 *  opacity: "0.6",
 *  animate: false || "x" || "y" || "z"
 * }
 * ***/


function Loader (init) {

    
    if (!init.where) init.where = $(document.body);
    if (!init.image) init.image = false;
    if (!init.text) init.text = false;
    if (!init.width) init.width = "50px";
    if (!init.align) init.align = "center";
    if (!init.valign) init.valign = "middle";
    if (!init.opacity) init.opacity = "0.6";
    if (!init.opacity) init.animate = false;
    
    var _this = this;
    var loader = $("<td id='__loader_content_td__' align='"+init.align+"' valign='"+init.valign+"'></td>");
    var wrapper = $("<table width='100%' height='100%'></table>");

    this.start = function(){
        wrapper.css("display", "table");
    }
    this.stop = function(){
        wrapper.css("display", "none");
    }

    buildCss ();
    buildLoader();
    
    function buildLoader(){
        var where = init.where;
        var text = init.text;
        var image = init.image;
        var opacity = init.opacity;
        var content = "";
        wrapper.css({
            position: "absolute",
            display: "none",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            backgroundColor: "rgba(0,0,0,"+opacity+")",
            zIndex: "9999999999999999999999999999"
        })
        if (image) {
            content = $("<img width='"+init.width+"' src='"+image+"'>");
        } else if (text) {
            content = $("<div display:'block'>"+text+"</div>");
        }
        if (init.animate) {
            switch (init.animate) {
                case "x":;
                    content.addClass("rotateX")
                    break;
                case "y":;
                    content.addClass("rotateY")
                    break;
                case "z":;
                    content.addClass("rotateZ")
                    break;
            }
        }
        loader.html(content);
        wrapper.html(loader);
        where.append(wrapper);
    }
    function buildCss () {
        var css =   ".rotateX {-webkit-animation: rotateX 1s infinite linear;animation: rotateX 1s infinite linear;} @-webkit-keyframes rotateX {100% {-webkit-transform: rotatex(360deg)}} @keyframes rotateX {100% {transform: rotatex(360deg)}}";
        css +=      ".rotateY {-webkit-animation: rotateY 1s infinite linear;animation: rotateY 1s infinite linear;} @-webkit-keyframes rotateY {100% {-webkit-transform: rotatey(360deg)}} @keyframes rotateY {100% {transform: rotatey(360deg)}}";
        css +=      ".rotateZ {-webkit-animation: rotateZ 1s infinite linear;animation: rotateZ 1s infinite linear;} @-webkit-keyframes rotateZ {100% {-webkit-transform: rotatez(360deg)}} @keyframes rotateZ {100% {transform: rotatez(360deg)}}";
        $(document.head).append("<style>"+css+"</style>")
    }
}
