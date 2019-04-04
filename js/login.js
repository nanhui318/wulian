$.validator.setDefaults({
    submitHandler: function() {  
        location.href = 'home.html' 
    }
})
$(document).ready(function () {
    // 输入框获取焦点特效
    $("input[name='password']").focus(function () { 
        $(this).parents().find('.password-text').removeClass('float')
    })
    $("input[name='account']").focus(function () { 
        $(this).parents().find('.account-text').removeClass('float')
    })
    $("input[name='password']").blur(function(){
        if($(this).val()==""){
            $(this).parents().find('.password-text').addClass('float')
        }
    })
    $("input[name='account']").blur(function(){
        if($(this).val()==""){
            $(this).parents().find('.account-text').addClass('float')
        }
    })


    // 显示隐藏密码
    $('#eye-icon').click(function(){ 
        if($(this).hasClass('eye-open')){
            $(this).parents().find('.login-password').attr('type','text');
            $(this).addClass('eye-close').removeClass('eye-open')
        }else{
            $(this).parents().find('.login-password').attr('type','password');
            $(this).addClass('eye-open').removeClass('eye-close') 
        }
        
    })
                          
    //表单校验  
    $("#login-form").validate({
	    // rules: { 
        //   account: {
	    //     required: true 
	    //   },
	    //   password: {
	    //     required: true,
	    //     minlength: 6
	    //   } 
	    // },
	    // messages: {
	    //   username: "请输入您的名字", 
	    //   password: {
	    //     required: "请输入密码",
	    //     minlength: "密码长度不能小于 6 个字段"
	    //   }
        // } 
        
    });


    $("#login-btn").validate();

    
    $("#login-btn").click(function(){
        setCookieLogin();
    })
    
    // 记住用户名密码
    function checkbox(ele){
        if($(ele).is(":checked")){
            $(ele).val("1")
        }else{
            $(ele).val("0")
        }
    }
    
    $("input[name='checkbox']").click(function(){
        // if($(this).is(":checked")){
        //     $(this).val("1")
        // }else{
        //     $(this).val("0")
        // }
        checkbox("input[name='checkbox']")
    })
    /*设置cookie */ 
    function setCookieLogin() {
        checkbox("input[name='checkbox']")
        var checked = $("input[name='checkbox']:checked");//获取“是否记住密码”复选框
        var checkedValue = $("input[name='checkbox']").val();
        if(checkedValue== '1'){ //判断是否选中了“记住密码”复选框 
            var loginCode = $("#login-account").val(); //获取用户名信息 
            var pwd = $("#login-password").val(); //获取登陆密码信息  
            $.cookie("login_code",loginCode);//调用jquery.cookie.js中的方法设置cookie中的用户名 
            $.cookie("pwd",$.base64.encode(pwd));//调用jquery.cookie.js中的方法设置cookie中的登陆密码，并使用base64（jquery.base64.js）进行加密 
            $.cookie("inputVlaue",1);//input框选中状态，赋值1
        }else{ 
            $.cookie("pwd", null); 
            $.cookie("inputVlaue",0);//input框不选中状态，赋值0
        } 
    }
    /*获取cookie */
    function getCookie(){  
        var loginCode = $.cookie("login_code"); //获取cookie中的用户名 
        var pwd = $.cookie("pwd"); //获取cookie中的登陆密码 
        var inputVlaue = $.cookie("inputVlaue");//获取input框状态 
        if(inputVlaue=="1"){//input框选中的话把“记住用户名和密码”复选框勾选住 
            $("input[name='checkbox']").attr("checked",true); 
        }else{
            $("input[name='checkbox']").attr("checked",false);
        } 

        if(loginCode){//用户名存在的话把用户名填充到用户名文本框 
            $("#login-account").val(loginCode); 
        } 
        if(pwd != "null"){//密码存在的话把密码填充到密码文本框 
            $("#login-password").val($.base64.decode(pwd)); 
        }else{
            $("#login-password").val("")
        } 
      } 
      window.getCookie = getCookie;
      getCookie()
       //判断是否选中复选框，如果选中，添加cookie
    if($("input[name='checkbox']").attr("checked",true)){ 
        //添加cookie 
        setCookie(); 
        //alert(1)
        // alert("记住密码登录。"); 
        // window.location = "http://www.baidu.com"; 
    }else{ 
        alert("不记密码登录。"); 
        // window.location = "http://www.baidu.com"; 
    } 


    // 判断输入框是否有内容，有内容文字移上
    function textMove(){
        $('#login-form input').each(function(index){
            console.log($(this).val())
            if($(this).val()!==""){
                $(this).parents().children('.mu-text-field-label').removeClass('float')
            }
        })
    }
    textMove()


});

 