/// <reference path="../../../Scripts/jquery.validate-vsdoc.js" />
$().ready(function() {
    ValidateForm();
    $("#btnSendRight").click(function() {
        if ($("#ContactFormSmall").valid()) {
            return true;
        } else {
            $(".ErrorValidation").fadeIn(200);
            window.setTimeout(function() {
                $(".ErrorValidation").fadeOut(200);
            }, 3500);
            return false;
        }
    });

    $("#btnSend").click(function() {
        if ($("#ContactForm").valid()) {
            return true;
        } else {
            $(".ErrorValidation").fadeIn(200);
            window.setTimeout(function() {
                $(".ErrorValidation").fadeOut(200);
            }, 3500);
            return false;
        }
    });

  
});

function ContactFormSmallBegin() {
    $("#btnSendRight").attr("disabled", "disabled");
    $(".pnlProgressPlateContact").show();
}

function ContactFormSmallFailure() {
    $(".FormProgressPlateContact").hide();
    $("#btnSendRight").removeAttr("disabled");
    $(".ErrorGeneral").fadeIn(200);
}

function ContactFormSmallSuccess(context) {
    var message = context;
    if (message === "error:validation") {
        $(".ErrorValidation").fadeIn(200);
        window.setTimeout(function() {
            $(".ErrorValidation").fadeOut(200);
        }, 3500);
    } else if (message === "error:send") {
        $(".ErrorGeneral").fadeIn(200);
        window.setTimeout(function() {
            $(".ErrorGeneral").fadeOut(200);
        }, 3500);
    } else {
        $(".SuccessFormSent").fadeIn(200);
        window.setTimeout(function() {
            $(".SuccessFormSent").fadeOut(200);
        }, 3500);
        $("#Name").val("");
        $("#Mobile").val("");
        $("#Company").val("");
        $("#Email").val("");
    }
    $(".FormProgressPlateContact").hide();
    $("#btnSendRight").removeAttr("disabled");

}

function ContactFormBegin() {
    $("#btnSend").attr("disabled", "disabled");
    $(".pnlProgressPlateContact").show();
    ValidateForm();
}

function ContactFormFailure() {
    $(".FormProgressPlateContact").hide();
    $("#btnSend").removeAttr("disabled");
    $(".ErrorGeneral").fadeIn(200);
}

function ContactFormSuccess(context) {
    var message = context;
    if (message === "error:validation") {
        $(".ErrorValidation").fadeIn(200);
        window.setTimeout(function() {
            $(".ErrorValidation").fadeOut(200);
        }, 3500);
    } else if (message === "error:send") {
        $(".ErrorGeneral").fadeIn(200);
        window.setTimeout(function() {
            $(".ErrorGeneral").fadeOut(200);
        }, 3500);
    } else if (message === "error:captcha") {
        $(".ErrorCaptcha").fadeIn(200);
        window.setTimeout(function() {
            $(".ErrorCaptcha").fadeOut(200);
        }, 3500);

    } else {
        $(".SuccessFormSent").fadeIn(200);
        window.setTimeout(function() {
            $(".SuccessFormSent").fadeOut(200);
        }, 3500);
        $("#Name").val("");
        $("#Mobile").val("");
        $("#Company").val("");
        $("#Email").val("");
        $("#Message").val("");
        //$("#CaptchaAnswer").val("");
    }
    $(".FormProgressPlateContact").hide();
    $("#btnSend").removeAttr("disabled");
    $(".imgCaptcha").attr("src", "Kontakta/Generera_Captcha?noisy=True&prefix=_Contact_Form&r=" + (Math.random() * 100));
    $("#CaptchaAnswer").val("");
}

function ValidateFormSmall() {
    return $("#ContactFormSmall").validate({
        rules: {
            "Name": "required",
            "Email": "required"
        },
        messages: {
            "Name": "",
            "Email": ""
        },
        errorClass: "error",
        highlight: function(element, errorClass) {
            $(element).addClass(errorClass);
        },
        unhighlight: function(element, errorClass) {
            $(element).removeClass(errorClass);
        }
    });
}

function ValidateForm() {
    return $("#ContactForm").validate({
        rules: {
            "Name": "required",
            "Email": "required",
            //"CaptchaAnswer": "required",
            "Message": "required"
        },
        messages: {
            "Name": "",
            "Email": "",
            //"CaptchaAnswer": "",
            "Message": ""
        },
        errorClass: "error",
        highlight: function(element, errorClass) {
            $(element).addClass(errorClass);
        },
        unhighlight: function(element, errorClass) {
            $(element).removeClass(errorClass);
        }
    });
}