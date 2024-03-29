<!doctype html>
<html ng-app="app" ng-strict-di>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Peobee</title>

    <meta name="theme-color" content="#0690B7">

    <link rel="manifest" href="manifest.json">
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"> -->

    <!--[if lte IE 10]>
    <script type="text/javascript">document.location.href = '/unsupported-browser'</script>
    <![endif]-->

    <style><?php require(public_path("css/critical.css")) ?></style>

</head>
<body>
<?php
// use Illuminate\Support\Facades\Auth;
// echo "MAD JAM";
// var_dump(Auth::id());?>
    <app-shell>
        <div id="app-shell-header">
            <!-- <img src="img/icons/logo.svg" width="171" height="41"> -->
        </div>
        <div id="app-shell-content"></div>
    </app-shell>


    <app-root></app-root>


    <script>
    (function(){
        var link = document.createElement("link");
        link.href = "{!! elixir('css/final.css') !!}";
        link.type = "text/css";
        link.rel = "stylesheet";
        document.body.appendChild(link);
    })();
    </script>

    <script src="{!! elixir('js/final.js') !!}" async></script>

</body>
</html>
