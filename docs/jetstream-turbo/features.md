# Features

  Jetstream includes a host of useful features listed below. 
  
  If you would like to see additional functionality please submit a [PR](https://github.com/laravel-turbo/jetstream-turbo)

## Alias Team

  By default, Jetstream uses the `/teams/` segment in URIs to refer to teams. 
  
  However, you can now customize this using the `aliasTeamAs` method in the `register` method of your local `JetstreamTurboServiceProvider`

> app/Providers/JetstreamTurboServiceProvider.php
```php
  JetstreamTurbo::aliasTeamAs('band');
```

  Be sure to call this method in the register method of your service provider, as Jetstream Trubo will not function correctly if it is called in the booted method. 
  
  > **Additionally**, make sure you pass the singular, lowercase form of the word.

  > **Note**: This value will also be used as a parameter for translatiions.  

  ## Transfer Team

  By default, Jetstream only allows a team to have a signle owner, if the owner wants to leave the team they will need to delete it.

  However, you can now allow team owner's to transfer ownership to another user with the `administrator` role.

> config/jetstream-turbo.php
```php
  'features' => [
    Features::teams(
            [
                'transfer' => true,
            ])
  ]
```
