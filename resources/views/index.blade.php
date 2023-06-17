<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @vite('resources/sass/app.scss')
</head>

<body class="container-fluid">
    <div id="register"></div>
</body>

</html>
