var banderaDown = true, banderaUp = true, actions = '';
var bg_position = ($(window).width() <= 960) ? -450 : -800;
var barPower = 0;
var count = 1;
var tl = new TimelineMax({});
var M1 = tl.to("#sprite", 1, { repeat: -1, backgroundPosition: bg_position + "px", ease: SteppedEase.config(5) });
M1.pause();
var swInicio = 0, IE = false;

if (navigator.appName.indexOf("Internet Explorer") > 0) {
    $("html").addClass('explorer');
    IE = true;
}

(function ($) {
    app = {
        settings: {
            'eventClick': {
                instr: $(".btn-instr"),
                premi: $(".btn-premi"),
                factura: $('.btn-factura'),
                ranking: $('.btn-ranking'),
                term_cond: $(".btn-term-cond"),
                linkRemenberPass: $('.btn-remenber-pass'),
                linkRecordUser: $(".btn-record-user")
            },
            login: $('#form-login'),
            record: $('#record-user'),
            remenberPass: $('#form-remenber-pass'),
            recordFactura: $("#record-factura"),
            logOut: $(".log-out"),
            spriteElement: $("#sprite"),
            barProgress: $('.barProgress')
        },
        init: function () {
            actions = this.settings;
            this.bindAction();
            $(document).ready(function () {
                app.userLogged();
            });
            $(window).load(function () {
                $("body").animate({ opacity: 1 }, 2000);
                app.showModal();
            });
        },
        progressSprite: function (type) {
            if (type == 'down') {

            } else {

            }
        },
        beginAnimation: function (type) {
            if (type == 'start') {
                barPower += 1;
                //var width = ($(window).width() <= 960)?100:50;
                //$(".barProgress").text(barPower+'%');
                if ($(window).width() > 960) {
                    if (barPower > 28 && barPower < 40) {
                        actions.barProgress.css({ 'background-position': '-100px 0' });
                    } else if (barPower > 41 && barPower < 50) {
                        actions.barProgress.css({ 'background-position': '-200px 0' });
                    } else if (barPower > 51 && barPower < 60) {
                        actions.barProgress.css({ 'background-position': '-300px 0' });
                    } else if (barPower > 61 && barPower < 70) {
                        actions.barProgress.css({ 'background-position': '-400px 0' });
                    } else if (barPower > 71 && barPower < 80) {
                        actions.barProgress.css({ 'background-position': '-500px 0' });
                    } else if (barPower > 81) {
                        actions.barProgress.css({ 'background-position': '-600px 0' });
                    }
                } else {
                    if (barPower > 28 && barPower < 40) {
                        actions.barProgress.css({ 'background-position': '-30px 0' });
                    } else if (barPower > 41 && barPower < 50) {
                        actions.barProgress.css({ 'background-position': '-60px 0' });
                    } else if (barPower > 51 && barPower < 60) {
                        actions.barProgress.css({ 'background-position': '-90px 0' });
                    } else if (barPower > 61 && barPower < 70) {
                        actions.barProgress.css({ 'background-position': '-120px 0' });
                    } else if (barPower > 71 && barPower < 80) {
                        actions.barProgress.css({ 'background-position': '-150px 0' });
                    } else if (barPower > 81) {
                        actions.barProgress.css({ 'background-position': '-180px 0' });
                    }
                }

                //console.log(barPower);
                if (banderaDown) {
                    var left = 75;
                    actions.spriteElement.animate({ 'left': left + '%' }, 5000);

                    M1.play();
                    banderaDown = false
                }
            } else {

                TweenLite.killTweensOf(actions.spriteElement);

                actions.spriteElement.stop(true, false);
                var str = actions.spriteElement.attr('style');
                if (IE) {
                    var salto = str.split(';')[1].split(':');
                } else {
                    var salto = str.split(';')[0].split(':');
                }
                salto = parseInt(salto[1].replace('%', '').trim());


                if (salto <= 64 && salto > 44) {
                    var anchoW = $(window).width();

                    var saltoClass = (anchoW <= 960) ? 'spriteSaltoMobile' : 'spriteSalto';
                    var saltoClass2 = (anchoW <= 960) ? 'spriteSaltoMobile2' : 'spriteSalto2';
                    actions.spriteElement.addClass(saltoClass);
                    //350
                    var x_position = '';//($(window).width() <= 960)?230:350;

                    if (anchoW <= 960 && anchoW > 668) {
                        x_position = 230;
                    } else if (anchoW < 668) {
                        x_position = 150;
                    } else {
                        x_position = 350;
                    }

                    tl.to(actions.spriteElement, 3.5, { x: x_position, ease: Linear.easeNone })
					.to(actions.spriteElement, 1.5, {
					    y: -55, ease: Sine.easeOut, repeat: 1, yoyo: true,
					    onComplete: app.resultGame, onCompleteParams: [salto, 'win']
					}, 0);


                    //limite de la raya
                    setTimeout(function () {
                        actions.spriteElement.removeClass(saltoClass).addClass(saltoClass2);
                    }, 3010);
                } else {
                    actions.spriteElement.addClass('spriteFail');
                    this.resultGame(salto, 'fail');
                }
            }
        },
        resultGame: function (salto, type) {
            var ptos = 20;

            if (salto <= 66 && salto > 59) {
                ptos = 20;
            }
            if (salto <= 59 && salto > 50) {
                ptos = 20;
            }
            if (salto <= 50 && salto > 45) {
                ptos = 20;
            }
            if (salto <= 45 && salto >= 39) {
                ptos = 20;
            }
            if (type == 'win') {
                $(".resultados_game .franja-title").html('<h3>Ganaste ' + ptos + ' Puntos</h3>');
            } else {
                $(".ibargueResult").addClass('fail');
                $(".resultados_game .franja-title").html('<h3>Mañana tendrás una nueva oportunidad</h3>');
            }

            TweenLite.to('.resultados_game', 1, { autoAlpha: 1, display: 'block' });
            alert("9");
            app.sumarPtos(ptos, 'game');
        },
        sumarPtos: function (qty, type) {
            var data = {
                data: 'gamePtos',
                action: 'gamePtos',
                'id_user': sessionStorage.getItem("alkomprarId"),
                'ptos': ptos,
                type: type
            };
            app.statusPtos(data);
        },
        statusPtos: function (data) {//consultamos y a la vez guardamos
            var status = 0;
            $.ajax({
                type: 'POST',
                async: false,
                url: 'user.php',
                data: data,
                dataType: 'json',
                success: function (data) {
                    alert(JSON.stringify(data));
                    status = 1;
                }
            });
            return status;
        },
        bindAction: function () {
            //var actions = this.settings;

            window.addEventListener("keydown", function (event) {
                if (event.keyCode == 32 && swInicio == 1) {
                    app.beginAnimation('start');
                }
            }, false);
            window.addEventListener("keyup", function (event) {
                if (event.keyCode == 32 && swInicio == 1) {
                    app.beginAnimation('end');
                }
            }, false);

            window.addEventListener("touchstart", function () {
                if ($(".wrapperGame").hasClass('jugar') && swInicio == 1)
                    app.beginAnimation('start');
            }, false);
            window.addEventListener("touchend", function () {
                if ($(".wrapperGame").hasClass('jugar') && swInicio == 1)
                    app.beginAnimation('end');
            }, false);


            actions.logOut.click(function (event) {
                sessionStorage.clear();
                location.reload();
            });

            actions.record.submit(function (event) {
                event.preventDefault();
                var status = true;
                if (!(app.validateForm('name', $(this).find('[name="name"]').val()))) {
                    app.setMessage('El campo nombre no es valido.'); status = false;
                } else if (!(app.validateForm('number', $(this).find('[name="cedula"]').val()))) {
                    app.setMessage('El campo cédula no es valido.'); status = false;
                } else if (!(app.validateForm('email', $(this).find('[name="email"]').val()))) {
                    app.setMessage('El campo correo electrónico no es valido.'); status = false;
                } else if (!(app.validateForm('number', $(this).find('[name="tel"]').val()))) {
                    app.setMessage('El campo teléfono no es valido.'); status = false;
                } else if (!$(this).find('[name="recidencia"]').val()) {
                    app.setMessage('El campo dirección no es valido.'); status = false;
                } else if ($(this).find('[name="pass_new"]').val() == '' && $(this).find('[name="pass_new_confirm"]').val() == '') {
                    if ($(this).find('[name="pass_new"]').val() != $(this).find('[name="pass_new_confirm"]').val())
                        app.setMessage('La contraseña no concide.'); status = false;
                    app.setMessage('La contraseña no es valida.'); status = false;
                } else if (!$(this).find('[name="term_cond"]').prop('checked')) {
                    app.setMessage('Debe aceptar términos y condiciones.'); status = false;
                }

                if (status)
                    app.recordUser();
            });

            actions.login.submit(function (event) {
                event.preventDefault();
                app.loginUser();
            });

            actions.remenberPass.submit(function (event) {
                event.preventDefault();
                var status = true;
                if (!(app.validateForm('email', $(this).find('[name="emil_remenber"]').val()))) {
                    app.setMessage('El campo correo electrónico no es valido'); status = false;
                }

                if (status)
                    app.remenberPass();
            });

            actions.recordFactura.submit(function (event) {
                event.preventDefault();
                app.recordFactura();
            });

            $.each(this.settings.eventClick, function (i, value) {
                $(this).on('click', function (e) {
                    e.preventDefault();
                    window.location.hash = $(this).data('url');
                    app.showModal();
                });
            });

            $('.menu .txt_menu_svg').mouseover(function () {
                $(this).nextAll('.txt_menu_svg').animate({ 'opacity': 0.3 }, 200);
                $(this).prevAll('.txt_menu_svg').animate({ 'opacity': 0.3 }, 200);
            }).mouseout(function () {
                $('.menu .txt_menu_svg').animate({ 'opacity': 1 }, 200);
            });
        },
        showModal: function () {
            if (window.location.hash) {
                var value = window.location.hash.substring(1);
                if (value == 'ranking')
                    this.getRanking();

                var width = ($(window).width() <= 1024) ? 100 : 50;

                $.fancybox.open({
                    content: $('.data-' + value),
                    autoSize: false,
                    width: width + "%",
                    height: "auto",
                    padding: 0,
                    afterClose: function () {
                        if (navigator.appVersion.indexOf("MSIE 9") > 0) {     //yeah, he's using IE
                            //navigator.appName.indexOf("Internet Explorer")!=-1							
                            // navigate to error page
                            window.location.href = 'http://' + window.location.hostname;
                        } else {
                            history.pushState('', document.title, window.location.pathname);
                        }
                    }
                });
            }
        },
        userLogged: function () {
            if (sessionStorage.getItem("alkomprar") == 'userLogged') {
                $(".campos-login").hide();
                $(".campos-user-logged").show();
                $(".campos-user-logged p").html('Bienvenid@ ' + sessionStorage.getItem("name"));
                return true;
            } else {
                $(".campos-login").show();
                $(".campos-user-logged").hide();
                return false;
            }
        },
        loginUser: function () {
            if (sessionStorage.getItem("alkomprar") == 'userLogged') {
                if (sessionStorage.getItem("alkomprarId") == 0) {
                    actions.logOut.trigger('click');
                }
                var data = {
                    data: 'gamePtos',
                    action: 'statusPtos',
                    'id_user': sessionStorage.getItem("alkomprarId")
                };

                if (window.innerHeight > window.innerWidth) {
                    app.setMessage('Para tener una mejor visualización del juego, por favor girar la pantalla del celular.');
                } else {
                    var status = 1;
                    if (status == 1) {

                        var handleTimer = function () {
                            var x_position = 175 * count;

                            if (count === 3) {
                                clearInterval(timer);
                                $('.countDown').css({ 'background-position': -x_position + 'px' + ' 0' });
                                TweenMax.to('.countDown', 1, { scale: 1.3, opacity: 0, display: 'none' });
                                count = 1;
                            } else {
                                $('.countDown').css({ 'background-position': -x_position + 'px' + ' 0' });
                                count++;
                            }
                        }

                        var timer = setInterval(function () { handleTimer(count); }, 1800);

                        $(".wrapperGame").addClass('jugar');
                        var height = '';//()?302:472;
                        var anchoW = $(window).width();
                        if (anchoW <= 960 && anchoW > 668) {
                            height = 302;
                        } else if (anchoW < 668) {
                            height = 230;
                        } else {
                            height = 472;
                        }
                        $.fancybox.open({
                            content: $('.wrapperGame'),
                            autoSize: false,
                            width: "100%",
                            maxWidth: "1310px",
                            height: height + 'px',
                            padding: 0,
                            afterClose: function () {
                                swInicio = 0;
                                //history.pushState('', document.title, window.location.pathname);
                                if (navigator.appVersion.indexOf("MSIE 9") > 0) {     //yeah, he's using IE
                                    //navigator.appName.indexOf("Internet Explorer")!=-1							
                                    // navigate to error page
                                    window.location.href = 'http://' + window.location.hostname;
                                } else {
                                    history.pushState('', document.title, window.location.pathname);
                                }
                            },
                            afterLoad: function () {
                                swInicio = 1;
                                app.setMessage('Recuerda mantener presionada la barra espaciadora y soltarla antes de llegar a la línea... Buena suerte!');
                            }
                        });
                    } else {
                        app.setMessage('Usted ha llegado al limite de intentos para jugar');
                    }
                }
            } else {
                var data = this.getFormData(this.settings.login);
                $.ajax({
                    type: 'POST',
                    url: 'user.php',
                    data: { data: data, action: 'login' },
                    success: function (data) {
                        var data = JSON.parse(data);
                        if (data.status) {
                            sessionStorage.setItem("alkomprar", "userLogged");
                            sessionStorage.setItem("alkomprarId", data.userId);
                            sessionStorage.setItem("name", data.name);

                            app.userLogged();
                        } else {
                            app.setMessage('Usuario o contraseña incorrecta');
                        }
                    }
                });
            }
        },
        recordUser: function () {
            var data = this.getFormData(this.settings.record);
            $.ajax({
                type: 'POST',
                url: 'user.php',
                dataType: 'json',
                data: { data: data, action: 'record' },
                success: function (data) {
                    console.log(data);
                    if (data.status === 1) {
                        sessionStorage.setItem("alkomprar", "userLogged");
                        sessionStorage.setItem("alkomprarId", data.userId);
                        sessionStorage.setItem("name", data.name);
                        app.userLogged();
                        app.setMessage('Se ha registrado con éxito.');
                        jQuery.fancybox.close();
                    } else if (data.status == 2) {
                        app.setMessage('Este usuario ya se encuentra registrado.');
                    }
                }
            });
        },
        getFormData: function ($form) {
            var unindexed_array = $form.serializeArray();
            var indexed_array = {};

            $.map(unindexed_array, function (n, i) {
                indexed_array[n['name']] = n['value'];
            });

            return indexed_array;
        },
        remenberPass: function () {
            var data = this.getFormData(this.settings.remenberPass);
            $.ajax({
                type: 'POST',
                url: 'user.php',
                data: { data: data, action: 'remenberPass' },
                success: function (data) {
                    if (parseInt(data)) {
                        app.setMessage('Su nueva contraseña ha sido enviada al correo');
                        jQuery.fancybox.close();
                    } else {
                        app.setMessage('Su correo electrónico no existe en nuestra base de datos');
                    }
                    app.settings.remenberPass.trigger("reset");
                }
            });
        },
        recordFactura: function () {
            var data = this.getFormData(this.settings.recordFactura);
            $.ajax({
                type: 'POST',
                url: 'user.php',
                dataType: 'json',
                data: { data: data, action: 'recordFactura', userId: sessionStorage.getItem("alkomprarId") },
                success: function (data) {
                    if (data.status === 1) {
                        app.setMessage('Factura registrada con exito.');
                    } else {
                        app.setMessage('Esta factura ya se encuentra registrada');
                    }
                }
            });
        },
        getRanking: function () {
            $.ajax({
                type: 'POST',
                url: 'user.php',
                dataType: 'json',
                data: { data: 'ranking', action: 'ranking', id_user: sessionStorage.getItem("alkomprarId") },
                success: function (data) {
                    var row = '', ranking = data.ranking, ptos = data.ptos, bandera = true;
                    if (sessionStorage.getItem("alkomprar") == 'userLogged') {
                        var qty = (ptos.length) ? ptos[0].qty : 0;
                        $(".ranking-user").show();
                        $(".ranking-user strong:eq(0)").html(sessionStorage.getItem("name"));
                        $(".ranking-user strong:eq(2)").html(qty);
                        $(".ranking-user strong:eq(4)").html(data.puesto);
                    }

                    var tableHead = '<div class="row-title"><div>Puesto</div><div>Nombre</div><div>Puntos</div></div>';
                    for (i = 0; i < ranking.length; i++) {
                        row += '<div class="row-ranking">' +
							'<div class="table-cell"><div class="index">' + (i + 1) + '</div></div>' +
							'<div class="table-cell"><div class="name-ranking">' + ranking[i].name + '</div></div>' +
							'<div class="table-cell"><div class="ptos-ranking">' + ranking[i].ptos + '</div></div>' +
						'</div>';

                        if (i > 48 && bandera == true) {
                            $(".ranking.column1 .content-row-ranking").html(tableHead + row);
                            row = '';
                            bandera = false;
                        }
                    }
                    if (i < 49 && bandera == true)
                        $(".ranking.column1 .content-row-ranking").html(tableHead + row);

                    if (ranking.length > 49)
                        $(".ranking.column2 .content-row-ranking").html(tableHead + row);
                }
            });
        },
        setMessage: function (msg) {
            $('.msg-box').html(msg).stop().animate({ 'top': '2%', opacity: 1 }, 1000, function () {
                setTimeout(function () { $('.msg-box').stop().animate({ 'top': '-15%', opacity: 0 }, 1000); }, 4000);
            });
        },
        validateForm: function (type, value) {
            var regex = '', status;
            switch (type) {
                case 'email':
                    regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    status = regex.test(value);
                    break;
                case 'text':
                    regex = /^[A-Za-z]+$/;
                    status = regex.test(value);
                    break;
                case 'number':
                    regex = /^[0-9]+$/;
                    status = regex.test(value);
                    break;
                case 'name':
                    regex = /^[^0-9!<>,;?=+()@#"°{}_$%:]*$/;
                    status = regex.test(value);
                    break;
            }
            return status;
        },
        share: function (type) {
            switch (type) {
                case 'fb':
                    window.open('http://www.facebook.com/sharer.php?s=100&p[title]=&p[summary]=N&p[url]=http://saltayganaconalkomprar.com/&p[images][0]=', 'sharer', 'toolbar=0,status=0,width=580,height=325');
                    //app.sumarPtos(5,'share');
                    break;
                case 'twitter':
                    //window.open('https://twitter.com/home?status=¡Participa ya! En un juego de habilidad para acumular el mayor número de metros valido durante toda la campaña del aniversario entre el 13 de agosto al 6 de septiembre del 2016. http://saltayganaconalkomprar.com/', '', 'width=500, height=400');
                    window.open('https://twitter.com/home?status=Salta y gana con alkomprar http://saltayganaconalkomprar.com/', '', 'width=500, height=400');
                    //app.sumarPtos(5,'share');
                    break;
                case 'mail':
                    //app.sumarPtos(5,'share');
                    break;
            }
            var data = {
                data: 'gamePtos',
                action: 'gamePtosShare',
                'id_user': sessionStorage.getItem("alkomprarId"),
                ptos: 10,
                type: 'share'
            };
            app.statusPtos(data);
            //return status;
        }
    }
})(jQuery)

app.init();