<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $subject }}</title>
</head>
<body>
    <h1>{{ $subject }}</h1>
    <p>{{ $body }}</p>
    <p>Please click the following link to reset your password:</p>
    <a href="{{ $resetLink }}">Reset Password</a>
</body>
</html>
