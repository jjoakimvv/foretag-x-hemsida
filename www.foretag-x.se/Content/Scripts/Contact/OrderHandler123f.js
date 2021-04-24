/// <reference path="../../../Scripts/jquery.validate-vsdoc.js" />
$().ready(function () {
    //$("input[name=ContactType]:radio").change(function () {
    //    if ($(this).val() == "Telefon") {
    //        $("#TelTime").show();
    //    }
    //    else {
    //        $("#TelTime").hide();
    //    }
    //});
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
    $("input[name=OfferType]:radio").change(function () {
        if ($(this).val() == "Privatperson") {
            $(".company-type").hide();
            $(".private-type").show();
            $("#Company").attr("disabled","disabled");
        }
        else {
            $(".company-type").show();
            $(".private-type").hide();
            $("#Company").removeAttr("disabled");
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
        $("#Company").val("");
        $("#Email").val("");
        $("#Type").val("-1");
        $("#Message").val("");
        $("#Area").val("");
        $("#Time").val("");
        $("#City").val("");
        $("#OfferType").val("Privatperson");
        $("#ContactType").val("Telefon");
        $("#Decontamination").val("Ja");
        $("#Windows").val("Moderna");
        $("#Blinds").val("Ja");
        $("#IsEmpty").val("Ja");
        $("#Basement").val("Nej");
        $("#BasementArea").val("");
        $("#Garage").val("Nej");
        $("#GarageArea").val("");
        $("#Patio").val("Nej");
        $("#PatioArea").val("");
        $("#Bathroom").val("");
        $("#Broker").val("-1");
    }
    $(".FormProgressPlateContact").hide();
    $("#btnSend").removeAttr('disabled');
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
        highlight: function (element, errorClass) {
            $(element).addClass(errorClass);
        },
        unhighlight: function (element, errorClass) {
            $(element).removeClass(errorClass);
        }
    });
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
            "Company": function (element) {
                if ($("input[name=OfferType]:radio").val() == "Företag")
                    return true;
                else
                    return false;
            },
            "Area": "required",
            "City": "required",
            "Type": { valueNotEquals: "-1" },
            "Broker": { valueNotEquals: "-1" }
        },
        messages: {
            "Name": "",
            "Email": "",
            "Mobile": "",
            "Company": "",
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