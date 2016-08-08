<!DOCTYPE html>
<html lang="en" prefix="og: http://ogp.me/ns#">
<head>
    <title>FlowGig - @yield('title')</title>
    <link rel="stylesheet" href="/css/app.css" type="text/css">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- TODO Add keywords and description
    <meta name="description" content="">
    <meta name="keywords" content="">
    -->
    <meta name="robots" content="follow">
    <!-- Google Site Verification -->
    <meta name="google-site-verification" content="upfbbdBwiPSVWNW7UurPq7Rjhi_NhYU9PdBPYivSOE8"/>
    <!-- OpenGraph -->
    <!-- TODO Add OpenGraph description -->
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="FlowGig">
    <meta property="og:title" content="FlowGig - @yield('title')">
    <meta property="og:description" content="">
    <meta property="og:url" content="http://flowgig.com">

    <!-- Twitter -->
<!-- TODO Add metadata for Twitter cards
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@app-page">
    <meta name="twitter:creator" content="@creator-page">
    <meta name="twitter:title" content="Set One's Cap Official Website">
    <meta name="twitter:description" content="">
    <meta name="twitter:image:src" content="">
    -->

    <meta name="apple-mobile-web-app-title" content="FlowGig">
    <meta name="application-name" content="FlowGig">
    <meta name="apple-mobile-web-app-title" content="FlowGig">
    <meta name="application-name" content="FlowGig">
    <meta name="apple-mobile-web-app-title" content="FlowGig">
    <meta name="application-name" content="FlowGig">
    <link rel="apple-touch-icon" sizes="57x57" href="/images/favicon/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/images/favicon/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/images/favicon/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/images/favicon/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/images/favicon/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/images/favicon/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/images/favicon/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/images/favicon/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon-180x180.png">
    <link rel="icon" type="image/png" href="/images/favicon/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="/images/favicon/favicon-194x194.png" sizes="194x194">
    <link rel="icon" type="image/png" href="/images/favicon/favicon-96x96.png" sizes="96x96">
    <link rel="icon" type="image/png" href="/images/favicon/android-chrome-192x192.png" sizes="192x192">
    <link rel="icon" type="image/png" href="/images/favicon/favicon-16x16.png" sizes="16x16">
    <link rel="manifest" href="/images/favicon/manifest.json">
    <link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#c32a22">
    <link rel="shortcut icon" href="/images/favicon/favicon.ico">
    <meta name="apple-mobile-web-app-title" content="FlowGig">
    <meta name="application-name" content="FlowGig">
    <meta name="msapplication-TileColor" content="#c32a22">
    <meta name="msapplication-TileImage" content="/images/favicon/mstile-144x144.png">
    <meta name="msapplication-config" content="/images/favicon/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">


    <script src="/js/all.js" type="application/javascript"></script>
    <style>

        html, body {
            background-image: none;
        }

        .main-content {
            background-color: #FFFFFF;
        }

        .box {
            border-radius: 0;
        }


    </style>
</head>
<body>
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

@if (!Request::is('dashboard'))
    @include('layouts.navbar-band')
@else
    @include('layouts.navbar-user')
@endif
@yield('actionbar')
<div class="main-content">
    <div class="container">

        @yield('content')
        <footer>
            <div class="container">
                <div class="text-center">
                    <img src="/images/svg/flowgig-logo-black.svg" alt="FlowGig logo" style="width: 150px; opacity: .4;"/>
                    <p>FlowGig licensed under
                        <a href="https://github.com/flowgig/flowgig/blob/master/LICENSE">GNU General Public License</a>
                    </p>
                    <p><a href="#">About</a> - <a href="#">Developers</a> - <a href="#">Send feedback</a></p>
                </div>
            </div>
        </footer>
    </div>
</div>
@yield('scripts')
</body>
</html>