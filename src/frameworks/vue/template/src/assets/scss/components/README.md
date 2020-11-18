# Components

Vue's Single File Components (SFCs) may often times contain styles within the component itself. Generally styles here in the assets folder are for more global site styles, and then in the component it will have scoped styles that apply only to the component itself. Alternatively you can keep all your styles here in the assets folder. Either/both is fine and is up to you, but be consistent. See [MDN](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling) for more information

For small components, there is the `components/` folder. While `layout/` is
macro (defining the global wireframe), `components/` is more focused on
widgets. It contains all kind of specific modules like a slider, a loader, a
widget, and basically anything along those lines. There are usually a lot of
files in components/ since the whole site/application should be mostly composed
of tiny modules.

Reference: [Sass Guidelines](http://sass-guidelin.es/) >
[Architecture](http://sass-guidelin.es/#architecture) >
[Components folder](http://sass-guidelin.es/#components-folder)
