<html>
<head>
    <title>FlowGig - @yield('title')</title>
    <link rel="stylesheet" href="/css/app.css" type="text/css"/>
    <style>
        html, body {
            height: 100%;
            background: url("/images/jpg/background.jpg");
            background-attachment: fixed;
            background-size: cover;
        }
        .main-content {
            min-height: 100%;
            background-color: rgba(0, 0, 0, .5);
        }
    </style>
</head>
<body>
<nav class="navbar navbar-dark z-2">
    <a class="sidenav-toggle hide-big"><i class="sidenav-toggle-logo fa fa-bars"></i></a>
    <a class="logo">
        <img src="/images/svg/flowgig-logo-white.svg" alt="FlowGig logo"/>
    </a>
    <span class="menu-divider hide-xsmall"></span>
    <span class="hide-big hide-xsmall"></span>
    <div class="main-menu hide-medium hide-small hide-xsmall float-right">
        <div class="menu-link">
            <ul class="">
                <li><a href="/song">Songs</a></li>
                <li><a href="/setlist">Setlists</a></li>
            </ul>
        </div>
    </div>
</nav>
<div class="left-menu no-padding">
    <div>
        <div class="sidenav-logo">
            <a class="sidenav-toggle">
                <img src="/images/svg/flowgig-logo-black.svg" alt="FlowGig logo"/>
                <i class="fa fa-angle-left float-right"></i>
            </a>
        </div>
        <ul class="">
            <li><a href="/song">Songs</a></li>
            <li><a href="/setlist">Setlists</a></li>
        </ul>
    </div>
</div>
<div class="main-content">
    <div class="container">
        @yield('content')
    </div>
</div>
<script src="/js/all.js" type="application/javascript"></script>
</body>
</html>