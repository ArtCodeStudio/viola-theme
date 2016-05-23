# Viola Theme
Beautiful One Page October Theme for Medical Professionals.

## Features

* One Page Design
* Beautiful homemade Icons
* Based on Bootstrap 4
* Almost full customizable using the [Static Pages Plugin](https://octobercms.com/plugin/rainlab-pages)
* Customizable slideshows using a [Slideshow Plugin](https://octobercms.com/plugin/flosch-slideshow)
* Builtin Contact Form

## Install

* Create to Slideshows in the backends `Slideshow` section.
* Select one of the Slideshow for each Slidehsow Components in partials/services.htm and partials/top_header.htm in the backends CMS section.

## Develop

To change core stuff of the Theme you need to install the dependencies with `bower` and `npm`:

```
bower install --force
```
You need ```--force``` in bower to overwrite the vendor files enclosed in this repository.


```
npm install
```

### Styles
The styles are written in sass and compiled to css, if you want to change the style you need to do this this in the sass files and to recompile the css.

You can recompile the styles with

```
npm run build
```
