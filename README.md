# Viola Theme
One Page October Theme for Medical Professionals.
A productive example of this theme can be found [here](http://www.thp-garber.de).

![Theme Preview](assets/images/theme-preview.png)

## Features

* One Page Design
* Different selectable color schemes
* Beautiful homemade Icons
* Based on Bootstrap 4
* Almost full customizable using the [Static Pages Plugin](https://octobercms.com/plugin/rainlab-pages)
* Customizable slideshows using a [Slideshow Plugin](https://octobercms.com/plugin/flosch-slideshow)
* Builtin Contact Form
* Free Pictures from [Pixabay](https://pixabay.com/)

## Install

* Install this Theme in the same way you would install any other october theme.
* Create two Slideshows in the backends `Slideshow` section.
* Select one of the Slideshow for each Slidehsow Components in `partials/services.htm` and `partials/top_header.htm` in the backends CMS section.
* Setup your email address in the theme settings (this mail is used to send you contact form notifications).
* Create a new mail template with the code `viola::contact-notification` for the email you get if a visitors use your contact form, the available template variables are:
 * `name` - Content of the name field the questioner did
 * `email` - Content of the email field the questioner did
 * `regard` - Content of the regard field the questioner did
 * `sendermessage` - Content of the message field the questioner did

An mail template could look like

```
New request:

Name: {{name}}
Sender: {{email}}
Subject: {{regard}}

Message: {{sendermessage}}
```

## Develop

To change core stuff of the Theme you need to install the dependencies with `bower` and `npm`:

```
bower install --force
```
You need to ```--force```  the  bower install to overwrite the vendor files enclosed in this repository.


```
npm install
```

### Styles
The styles are written in sass and compiled to css, if you want to change the style you need to do this this in the sass files and to recompile the css.

You can recompile the styles with `npm run build`.

```
npm run build
```
