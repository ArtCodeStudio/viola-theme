# Viola Theme
Bootstrap 4 One Page October Theme for Medical Professionals. There is a [demo](http://healthyteeth.jumplink.eu/) and a [customized productive](http://www.thp-garber.de) example of this theme.

![Theme Preview](assets/images/theme-preview.png)

## Features

* One Page Design
* Different selectable color schemes
* Beautiful homemade Icons
* Based on Bootstrap 4
* Use scss files directly
* Bootstrap variables using the theme settings
* Pages almost full customizable using the [Static Pages Plugin](https://octobercms.com/plugin/rainlab-pages)
* Customizable slideshows using a [Slideshow Plugin](https://octobercms.com/plugin/flosch-slideshow)
* Builtin Contact Form
* Free Pictures from [Pixabay](https://pixabay.com/)

## Bootstrap 4
To make it possible to use Bootstrap 4 Sass files directly we have create a fork of Bootstrap 4 called [Bootstrap 4 Backward](https://github.com/JumpLinkNetwork/bootstrap-backward).

## Variables
All Bootstrap 4 Variables full customizable on runtime:

![Alt text](/theme_settings.png?raw=true "Optional Title")

## Install

* Install this Theme in the same way you would install any other october theme.
* Create two Slideshows in the backends `Slideshow` section.
* Select one of the Slideshow for each Slidehsow Components in `partials/services.htm` and `partials/top_header.htm` in the backends CMS section.
* Setup your email address in the theme settings (this mail is used to send you contact form notifications).
* Create a new mail template with the code `viola::contact-notification` for the email you get if a visitor uses your contact form, the available template variables are:
 * `name` - Content of the name field the questioner did
 * `email` - Content of the email field the questioner did
 * `regard` - Content of the regard field the questioner did
 * `sendermessage` - Content of the message field the questioner did

Such a mail template could look like

```
New request:

Name: {{name}}
Sender: {{email}}
Subject: {{regard}}

Message: {{sendermessage}}
```

## Develop and contribute

In order to change core stuff of the Theme you need to install the dependencies with `bower` and `npm`:

```
bower install --force
```
(You need to ```--force```  the  bower install to overwrite the vendor files enclosed in this repository.)


```
npm install
```

If you change the theme setting files like utilities/custom.yaml you can generate a new theme.yaml with

```
npm run theme_settings
```

## See also
 * [Bootstrap 4 Boilerplate for OctoberCMS](https://github.com/JumpLinkNetwork/jumplink-october-boilerplate)