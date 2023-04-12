"use strict";(self.webpackChunkflutter_news_toolkit_docs=self.webpackChunkflutter_news_toolkit_docs||[]).push([[372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={slug:"/",sidebar_position:1},i="Overview",l={unversionedId:"overview",id:"overview",title:"Overview",description:"Flutter and the Google News Initiative have co-sponsored the development of a news application template. The goal of this project is to help news publishers build mobile applications easily in order to make reliable information accessible to all.",source:"@site/docs/overview.md",sourceDirName:".",slug:"/",permalink:"/news_toolkit/",draft:!1,editUrl:"https://github.com/flutter/news_toolkit/tree/main/docs/docs/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Project Configuration",permalink:"/news_toolkit/category/project-configuration"}},s={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Generate your project",id:"generate-your-project",level:3},{value:"Install the Flutter News Template",id:"install-the-flutter-news-template",level:4},{value:"Generate the app",id:"generate-the-app",level:4},{value:"Template configuration",id:"template-configuration",level:4},{value:"Configure Firebase",id:"configure-firebase",level:4},{value:"Configure or remove ads",id:"configure-or-remove-ads",level:4},{value:"Run the API Server",id:"run-the-api-server",level:3},{value:"Run the Flutter app",id:"run-the-flutter-app",level:3},{value:"Contributions",id:"contributions",level:2},{value:"Opening issues",id:"opening-issues",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Flutter and the ",(0,r.kt)("a",{parentName:"p",href:"https://newsinitiative.withgoogle.com/"},"Google News Initiative")," have co-sponsored the development of a news application template. The goal of this project is to help news publishers build mobile applications easily in order to make reliable information accessible to all."),(0,r.kt)("p",null,"This template aims to ",(0,r.kt)("strong",{parentName:"p"},"significantly reduce the development time for typical news applications")," by giving developers a head start on core components and features."),(0,r.kt)("p",null,"The Flutter News Toolkit:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Contains common news app UI workflows and core features built with Flutter and Firebase"),(0,r.kt)("li",{parentName:"ul"},"Implements best practices for news apps based on ",(0,r.kt)("a",{parentName:"li",href:"https://newsinitiative.withgoogle.com/info/assets/static/docs/nci/nci-playbook-en.pdf"},"Google News Initiative research")),(0,r.kt)("li",{parentName:"ul"},"Allows publishers to monetize immediately with ads and subscription services")),(0,r.kt)("p",null,"Common services such as authentication, notifications, analytics, and ads have been implemented using ",(0,r.kt)("a",{parentName:"p",href:"https://firebase.flutter.dev/docs/overview/"},"Firebase")," and ",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/packages/google_mobile_ads"},"Google Mobile Ads"),". Developers are free to substitute these services and can find publicly available packages on ",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev"},"pub.dev"),"."),(0,r.kt)("p",null,"If you're just getting started with Flutter, we recommend first developing familiarity with the framework by reviewing the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.flutter.dev/get-started/install"},"onboarding guides"),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.flutter.dev/reference/tutorials"},"tutorials"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.flutter.dev/codelabs"},"codelabs")," before using this template."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Depending on the number of flavors you plan to create for your project, the setup time may vary. For example, you can complete end-to-end setup in less than 10 minutes for one flavor. For additional flavors, you can expect this setup time to increase. Check out flutter.dev/news for additional information and video tutorials.")),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dart")),(0,r.kt)("p",null,"In order to generate a project using the news template, you must have the ",(0,r.kt)("a",{parentName:"p",href:"https://dart.dev/get-dart"},"Dart SDK")," installed on your machine."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Dart ",(0,r.kt)("inlineCode",{parentName:"p"},'">=2.18.0 <3.0.0"')," is required.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mason")),(0,r.kt)("p",null,"In addition, make sure you have installed the latest version of ",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/packages/mason_cli"},"mason_cli"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dart pub global activate mason_cli\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/felangel/mason"},"Mason")," is a command-line tool that allows you to generate a customized codebase based on your specifications."),(0,r.kt)("p",{parentName:"admonition"},"You'll use mason to generate your customized news application from the Flutter News Template.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dart Frog")),(0,r.kt)("p",null,"Lastly, make sure you have the latest version of ",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/packages/dart_frog_cli"},"dart_frog_cli")," installed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dart pub global activate dart_frog_cli\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://dartfrog.vgv.dev"},"Dart Frog")," is a fast, minimalistic backend framework for Dart. It is stable as of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/VeryGoodOpenSource/dart_frog/releases/tag/dart_frog-v0.1.0"},"v0.1.0"),"."),(0,r.kt)("p",{parentName:"admonition"},"You'll use Dart Frog as a ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/architecture/patterns/backends-for-frontends"},"backend for frontends (BFF)"),", which allows you to connect your existing backend to the Flutter News Template frontend. Dart Frog reduces the barrier for entry for all publishers, despite any existing backend, and brings your app to market faster without required client modifications.")),(0,r.kt)("h3",{id:"generate-your-project"},"Generate your project"),(0,r.kt)("p",null,"To generate your app using Mason, follow the steps below:"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Projects generated from the Flutter News Template will use the latest stable version of Flutter.")),(0,r.kt)("h4",{id:"install-the-flutter-news-template"},"Install the Flutter News Template"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"mason add")," command to install the ",(0,r.kt)("a",{parentName:"p",href:"https://brickhub.dev/bricks/flutter_news_template"},"Flutter News Template")," globally on your machine:"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You only need to install the ",(0,r.kt)("inlineCode",{parentName:"p"},"flutter_news_template")," once. You can generate multiple projects from the template after it's installed."),(0,r.kt)("p",{parentName:"admonition"},"You can verify whether you have the ",(0,r.kt)("inlineCode",{parentName:"p"},"flutter_news_template")," installed by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"mason list --global")," command.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mason add -g flutter_news_template\n")),(0,r.kt)("h4",{id:"generate-the-app"},"Generate the app"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"mason make")," command to generate your new app from the Flutter News Template:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mason make flutter_news_template\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Running ",(0,r.kt)("inlineCode",{parentName:"p"},"mason make")," will generate over 900 files that will be listed in the console."),(0,r.kt)("p",{parentName:"admonition"},"You may need to increase your console scrollback buffer size to see all of the files listed in your console.")),(0,r.kt)("h4",{id:"template-configuration"},"Template configuration"),(0,r.kt)("p",null,"You'll be prompted with several questions. Be prepared to provide the following information in order to generate your project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# The name of your application as displayed on the device for end users.\n? What is the user-facing application name? (Flutter News Template)\n\n# The application identifier also know as the bundle identifier on iOS.\n? What is the application bundle identifier? (com.flutter.news.template)\n\n# A list of GitHub usernames who will be code owners on the repository.\n# See https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners\n? Who are the code owners? (separated by spaces) (@githubUser)\n\n# Select all flavors that you want the generated application to include.\n# We recommend having at least development and production flavors.\n# For more information see https://docs.flutter.dev/deployment/flavors\n? What flavors do you want your application to include?\n\u276f \u25c9  development\n  \u25ef  integration\n  \u25ef  staging\n  \u25c9  production\n")),(0,r.kt)("p",null,"After answering the above questions, your custom news application is generated. You are now ready to run the application locally!"),(0,r.kt)("h4",{id:"configure-firebase"},"Configure Firebase"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Before you can run your generated app, you must configure Firebase.\nPlease follow the instructions specified in the ",(0,r.kt)("a",{parentName:"p",href:"/project_configuration/firebase"},"Firebase setup")," section.")),(0,r.kt)("h4",{id:"configure-or-remove-ads"},"Configure or remove ads"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Your project includes sample configurations for ads so that you can run your generated app with minimal setup. You will need to follow additional steps to ",(0,r.kt)("a",{parentName:"p",href:"/project_configuration/ads"},"configure or remove ads"),".")),(0,r.kt)("h3",{id:"run-the-api-server"},"Run the API Server"),(0,r.kt)("p",null,"Before running the Flutter application, run the API server locally. Change directories into the ",(0,r.kt)("inlineCode",{parentName:"p"},"api")," directory of the newly-generated project and start the development server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dart_frog dev\n")),(0,r.kt)("h3",{id:"run-the-flutter-app"},"Run the Flutter app"),(0,r.kt)("p",null,"We recommend running the project directly from ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"VS Code")," or ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/studio"},"Android Studio"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can also run the project directly from the command-line using the following command from the root project directory:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"flutter run \\\n  --flavor development \\\n  --target lib/main/main_development.dart \\\n  --dart-define FLAVOR_DEEP_LINK_DOMAIN=<YOUR-DEEP-LINK-DOMAIN> \\\n  --dart-define FLAVOR_DEEP_LINK_PATH=<YOUR-DEEP-LINK-PATH> \\\n  --dart-define TWITTER_API_KEY=<YOUR-TWITTER-API-KEY> \\\n  --dart-define TWITTER_API_SECRET=<YOUR-TWITTER-API-SECRET> \\\n  --dart-define TWITTER_REDIRECT_URI=<YOUR-TWITTER-REDIRECT-URI>\n"))),(0,r.kt)("p",null,"Congrats \ud83c\udf89"),(0,r.kt)("p",null,"You've generated and run your custom news app! Head over to ",(0,r.kt)("a",{parentName:"p",href:"/category/project-configuration"},"project configuration")," for next steps."),(0,r.kt)("h2",{id:"contributions"},"Contributions"),(0,r.kt)("p",null,"We invite contributions from the Flutter community. Please review the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/flutter/flutter/blob/master/CONTRIBUTING.md"},"Contributing to Flutter")," documentation and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/flutter/flutter/wiki/Contributor-access"},"Contributor access")," page on our wiki to get started."),(0,r.kt)("h2",{id:"opening-issues"},"Opening issues"),(0,r.kt)("p",null,"Please open an issue in the main ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/flutter/flutter/issues"},"flutter/flutter")," issue tracker if you encounter any bugs or have enhancement suggestions for this toolkit. Issues should follow the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/flutter/flutter/wiki/Issue-hygiene"},"Issue hygiene")," guidelines and will be ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/flutter/flutter/wiki/Triage"},"triaged")," by the Flutter team with the appropriate labels and priority."))}d.isMDXComponent=!0}}]);