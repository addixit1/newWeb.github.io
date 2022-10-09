
       $(document).ready(function () {
          $("#callme").click(function () {


            $('#erroremail').html('');
             $('#successemail').html('');


             var email = $("#email").val();

             if (email == '') {
                $('#erroremail').html('Please Enter Valid Email-ID!');

             }else
             {
                if( !validateEmail(email)) { 

                    $('#erroremail').html('Enter Valid Email ID');
                }else
                {
                    
                    $.ajax({
                         type:'POST',
                         url:'/subscription',
                         headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                         data: {"email":email},
                         success:function(response){
                            //console.log(response); 
                            if(response.id >0){
                              $('#successemail').html('Thanks for Submitting');
                              $("#email").val(''); 
                            }else{
                              $('#erroremail').html('Some error occured');
                            }
                            return false;   
                         }
                      });
                      return false;                     
                    
                }
             }

            
    
             if (email == '') {
                $('#error').html('Please fill the form carefully');

             } else {
                // Returns successful data submission message when the entered information is stored in database.
                $.post("", {
                   email: email
                }, function (data) {

                   $('#success').html('Thank you for your query. We will get in touch with you shortly.');
                   $('#getintouch')[0].reset(); // To reset form fields
                });
             }
          });


          $("#contactUsBtn").click(function () {

             var name = $('#name').val();

             if (name == '') {
                $('#errorname').html('Please enter your Name');

             }


             var phone = $("#phone").val();
             if (phone == '') {
                $('#errormobile').html('Please enter your Mobile Number');

             }

             var email = $("#email").val();

             if (email == '') {
                $('#erroremail').html('Please enter your Valid Email');

             }
              var message = $("#message").val();

             if (message == '') {
                $('#errormessage').html('Please enter your Message');

             }
    

             if (name == '' || phone == '' || email == '' || message =='') {
                $('#error').html('Please fill the form carefully');

             } else {

                $('#success').html('');
                $('#error').html('');

                $.ajax({
                     type:'POST',
                     url:'/contact-form',
                     headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                     data: {"name":name, "phone":phone, "email":email, "message":message},
                     success:function(response){
                        console.log(response); 
                        if(response.id >0){
                          $('#success').html('We have received your request, will contact you soon.');
                          $("#name").val(''); 
                          $("#email").val(''); 
                          $("#phone").val(''); 
                          $("#message").val(''); 
                          
                          return false; 

                        }else{
                          $('#error').html('Some error occured');
                        }
                        return false;   
                     }
                  });
                  return false;      






                // Returns successful data submission message when the entered information is stored in database.
                // $.post("", {
                //    name: name,
                //    phone: phone,
                //    email: email,
                //    message: messages
                // }, function (data) {

                //    $('#success').html('Thank you for your query. We will get in touch with you shortly.');
                //    $('#getintouch')[0].reset(); // To reset form fields
                // });
             }
          });


       });

    function validateEmail($email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test( $email );
    }


$(document).ready(function () {
$('.customer-logos').slick({
slidesToShow: 5,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 1500,
arrows: false,
dots: false,
pauseOnHover: false,
responsive: [{
    breakpoint: 768,
    settings: {
        slidesToShow: 4
    }
}, {
    breakpoint: 520,
    settings: {
        slidesToShow: 3
    }
}]
});
});

    