<!DOCTYPE html>
<html>
<head>
    <title>FlowGig</title>

    <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">
    <link href="/css/app.css" rel="stylesheet" type="text/css">
    <meta name="google-site-verification" content="upfbbdBwiPSVWNW7UurPq7Rjhi_NhYU9PdBPYivSOE8"/>

    <style>
        html, body {
            height: 100%;
        }

        body.welcome-screen {
            margin: 0;
            padding: 0;
            width: 100%;
            display: table;
            background: url("/images/jpg/background.jpg");
            background-size: cover;
        }

        .container {
            text-align: center;
            display: table-cell;
            vertical-align: middle;
            background-color: rgba(0, 0, 0, .5);
        }

        .content {
            text-align: left;
            display: inline-block;
        }

        .input-group {
            text-align: left;
        }

        .title {
            font-size: 96px;
            color: #FFF;
            text-shadow: 0 0 20px rgba(0, 0, 0, .8);
        }

        .login-box {
            max-width: 100%;
            border-radius: 7px;
            width: 360px;
        }
        @media (max-width: 360px){
            .login-box{
                width: 100%;
            }
        }

        .login-box > .content {
            margin-top: 10px;
            width: 100%;
            max-width: 100%;
        }

        button[disabled]:hover {
            cursor: not-allowed;
        }
    </style>
</head>
<body class="welcome-screen">
<script>
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
        a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-79197814-1', 'auto');
    ga('send', 'pageview');

</script>
<div class="container">
    <div class="content">
        <div class="title">
            <img src="/images/svg/flowgig-logo-white.svg" alt="FlowGig logo"/>
        </div>
        <div class="box z-2 login-box">
            <div class="content">
                <div class="input-group">
                    <input id="username" type="text"/><label for="username">Username</label>
                </div>
                <div class="input-group">
                    <input id="password" type="password"/><label for="password">Password</label>
                </div>
                <div class="input-group float-right">
                    <button class="button button-flat" disabled="disabled">Register</button>
                    <button class="button button-primary">Log in</button>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="/js/all.js" type="application/javascript"></script>
</body>
</html>
