/// <reference path="../../../Scripts/jquery.validate-vsdoc.js" />
$().ready(function () {
   
    ValidateForm();

    $("#btnSend").click(function () {
        var validator = ValidateFormSmall();
        if ($("#ContactForm").valid()) {
            return true;
        }
        else {
            $(".ErrorValidation").fadeIn(200);
            window.setTimeout(function () {
                $(".ErrorValidation").fadeOut(200);
            }, 3500);
            return false;
        }
    });
});

function ContactFormBegin() {
    $("#btnSend").attr('disabled', 'disabled');
    $(".FormProgressPlateContact").show();
    ValidateForm();
}

function ContactFormFailure() {
    $(".FormProgressPlateContact").hide();
    $("#btnSend").removeAttr('disabled');
    $(".ErrorGeneral").fadeIn(200);
}
function ContactFormSuccess(context) {
    var message = context;
    if (message === "error:validation") {
        $(".ErrorValidation").fadeIn(200);
        window.setTimeout(function () {
            $(".ErrorValidation").fadeOut(200);
        }, 3500);
    } else if (message === "error:send") {
        $(".ErrorGeneral").fadeIn(200);
        window.setTimeout(function () {
            $(".ErrorGeneral").fadeOut(200);
        }, 3500);
    } else if (message === "error:captcha") {
        $(".ErrorCaptcha").fadeIn(200);
        window.setTimeout(function () {
            $(".ErrorCaptcha").fadeOut(200);
        }, 3500);

    } else {
        $(".SuccessFormSent").fadeIn(200);
        window.setTimeout(function () {
            $(".SuccessFormSent").fadeOut(200);
        }, 3500);
        $("#Name").val("");
        $("#Mobile").val("");
        $("#Email").val("");
        $("#Message").val("");
        $("#Area").val("");
        $("#Time").val("");
        $("#City").val("");
    }
    $(".FormProgressPlateContact").hide();
    $("#btnSend").removeAttr('disabled');
}
function ValidateForm() {
    // add the rule here
    $.validator.addMethod("valueNotEquals", function (value, element, arg) {
        return arg !== value;
    }, "Value must not equal arg.");

    return $("#ContactForm").validate({
        rules: {
            "Name": "required",
            "Email": "required",
            "Mobile": "required",
            "Area": "required",
            "City": "required"
        },
        messages: {
            "Name": "",
            "Email": "",
            "Mobile": "",
            "Area": "",
            "City": ""
        },
        errorClass: "error",
        highlight: function (element, errorClass) {
            $(element).addClass(errorClass);
        },
        unhighlight: function (element, errorClass) {
            $(element).removeClass(errorClass);
        }
    });
}