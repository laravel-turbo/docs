# Installation

Getting started with Jetstream Turbo is simple. With a simple two-step process to get you on your way. Inspired by the simplicity of Jetstream's installation process, Jetstream Turbo follows the same `installation` process:

  ```bash
    composer require laravel-turbo/jetstream-trubo
    php artisan jetstream:install
  ```

The install command will overwrite a number of Jetstream published files which are required for Jetstream Trubo to enable features to work.

> **Note**: If you don't have Laravel Jetstream installed, the above command will walk you through the steps required to install it.

As Jetstream Turbo extends Jetstream the packages need to load in the correct order. The required service provider will ensure the correct entry is added but it m in the correct this requires the service providers to listed inthe correct order.

> `config/app.php`
```php
  App\Providers\JetstreamTurboServiceProvider::class,
```
after 
```php
  App\Providers\JetstreamServiceProvider::class,
```
