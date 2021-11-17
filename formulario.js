
        
        $(document).ready(function(){
            $("#send").click(function(){
                var firstname = $("#firstname").val();
                var lastname = $("#lastname").val();
                var age = $("#age").val();
                var password = $("#password").val();

                if(firstname == ""){
                    $("#errormessage1").text("Type your name");
                    return false
                }else{
                    $("#errormessage1").fadeOut();
                    if(lastname == ""){
                        $("#errormessage2").text("Type your last name");
                        return false
                    }else{
                        $("#errormessage2").fadeOut();
                        if(age == ""){
                            $("#errormessage3").text("Type your age");
                            return false
                        }else{
                            $("#errormessage3").fadeOut();
                            if(password == ""){
                                $("#errormessage4").text("Type your password");
                                return false
                            }else{
                                $("#errormessage4").fadeOut();
                            }
                        }
                    }
                }
            });
        });