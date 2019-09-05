checker = () => {
    var emailAdd = "Judilyn@gmail.com";
    var pass = "jud3l!yn";

    if(($('#sampleInputEmail').val()==emailAdd)&&($('#sampleInputPassword').val()==pass)){
        // alert("You are succesfully Log in\n" + $('#sampleInputEmail').val() + "\n" + $('#sampleInputPassword').val())
        console.log("You are succesfully Log in\n" + $('#sampleInputEmail').val() + "\n" + $('#sampleInputPassword').val())
    }
    else{
        // alert('email and password mismatched');
        console.log('email and password mismatched')
    }
}