     function helloworld(alertMsg, helloClick) { 
            var confirmBox = $("#container");
            confirmBox.find(".alertMessage").text(alertMsg);
            confirmBox.find(".yes").unbind().click(function()  
            { 
               confirmBox.hide(); 
            }); 
            confirmBox.find(".yes").click(helloClick); 
            confirmBox.show(); 
         } 
