'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">theopaeance documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CommentModule.html" data-type="entity-link" >CommentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CommentModule-410bfa3ddd8ce00b834431a6590d168d78070a07204c5caa34dc91c5375e2df811891478e1ced6e4d98b1ef05f195957ab52c55ce82653be7ce5921fa18c25c6"' : 'data-bs-target="#xs-controllers-links-module-CommentModule-410bfa3ddd8ce00b834431a6590d168d78070a07204c5caa34dc91c5375e2df811891478e1ced6e4d98b1ef05f195957ab52c55ce82653be7ce5921fa18c25c6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CommentModule-410bfa3ddd8ce00b834431a6590d168d78070a07204c5caa34dc91c5375e2df811891478e1ced6e4d98b1ef05f195957ab52c55ce82653be7ce5921fa18c25c6"' :
                                            'id="xs-controllers-links-module-CommentModule-410bfa3ddd8ce00b834431a6590d168d78070a07204c5caa34dc91c5375e2df811891478e1ced6e4d98b1ef05f195957ab52c55ce82653be7ce5921fa18c25c6"' }>
                                            <li class="link">
                                                <a href="controllers/CommentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommentController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CommentModule-410bfa3ddd8ce00b834431a6590d168d78070a07204c5caa34dc91c5375e2df811891478e1ced6e4d98b1ef05f195957ab52c55ce82653be7ce5921fa18c25c6"' : 'data-bs-target="#xs-injectables-links-module-CommentModule-410bfa3ddd8ce00b834431a6590d168d78070a07204c5caa34dc91c5375e2df811891478e1ced6e4d98b1ef05f195957ab52c55ce82653be7ce5921fa18c25c6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CommentModule-410bfa3ddd8ce00b834431a6590d168d78070a07204c5caa34dc91c5375e2df811891478e1ced6e4d98b1ef05f195957ab52c55ce82653be7ce5921fa18c25c6"' :
                                        'id="xs-injectables-links-module-CommentModule-410bfa3ddd8ce00b834431a6590d168d78070a07204c5caa34dc91c5375e2df811891478e1ced6e4d98b1ef05f195957ab52c55ce82653be7ce5921fa18c25c6"' }>
                                        <li class="link">
                                            <a href="injectables/CommentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ComposerModule.html" data-type="entity-link" >ComposerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ComposerModule-a20dc424f7e8330a2789d22863a0e6f9073a3c467f7279ed047eb25051aa72fcb18199ccf79fb44f9fd2f0f988f528b04d2ae8e005cde9f68148f46af1e8240b"' : 'data-bs-target="#xs-controllers-links-module-ComposerModule-a20dc424f7e8330a2789d22863a0e6f9073a3c467f7279ed047eb25051aa72fcb18199ccf79fb44f9fd2f0f988f528b04d2ae8e005cde9f68148f46af1e8240b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ComposerModule-a20dc424f7e8330a2789d22863a0e6f9073a3c467f7279ed047eb25051aa72fcb18199ccf79fb44f9fd2f0f988f528b04d2ae8e005cde9f68148f46af1e8240b"' :
                                            'id="xs-controllers-links-module-ComposerModule-a20dc424f7e8330a2789d22863a0e6f9073a3c467f7279ed047eb25051aa72fcb18199ccf79fb44f9fd2f0f988f528b04d2ae8e005cde9f68148f46af1e8240b"' }>
                                            <li class="link">
                                                <a href="controllers/ComposerController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComposerController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ComposerModule-a20dc424f7e8330a2789d22863a0e6f9073a3c467f7279ed047eb25051aa72fcb18199ccf79fb44f9fd2f0f988f528b04d2ae8e005cde9f68148f46af1e8240b"' : 'data-bs-target="#xs-injectables-links-module-ComposerModule-a20dc424f7e8330a2789d22863a0e6f9073a3c467f7279ed047eb25051aa72fcb18199ccf79fb44f9fd2f0f988f528b04d2ae8e005cde9f68148f46af1e8240b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ComposerModule-a20dc424f7e8330a2789d22863a0e6f9073a3c467f7279ed047eb25051aa72fcb18199ccf79fb44f9fd2f0f988f528b04d2ae8e005cde9f68148f46af1e8240b"' :
                                        'id="xs-injectables-links-module-ComposerModule-a20dc424f7e8330a2789d22863a0e6f9073a3c467f7279ed047eb25051aa72fcb18199ccf79fb44f9fd2f0f988f528b04d2ae8e005cde9f68148f46af1e8240b"' }>
                                        <li class="link">
                                            <a href="injectables/ComposerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComposerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CountriesModule.html" data-type="entity-link" >CountriesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CountriesModule-2d035fbedeba92f0a717c3f9a3f9df0b1347331f55ec6c2f6f9b223f839b19b6a27d22f3050847beba27934ada7a1c145e2538c73dbf20474dc06602fea37db4"' : 'data-bs-target="#xs-controllers-links-module-CountriesModule-2d035fbedeba92f0a717c3f9a3f9df0b1347331f55ec6c2f6f9b223f839b19b6a27d22f3050847beba27934ada7a1c145e2538c73dbf20474dc06602fea37db4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CountriesModule-2d035fbedeba92f0a717c3f9a3f9df0b1347331f55ec6c2f6f9b223f839b19b6a27d22f3050847beba27934ada7a1c145e2538c73dbf20474dc06602fea37db4"' :
                                            'id="xs-controllers-links-module-CountriesModule-2d035fbedeba92f0a717c3f9a3f9df0b1347331f55ec6c2f6f9b223f839b19b6a27d22f3050847beba27934ada7a1c145e2538c73dbf20474dc06602fea37db4"' }>
                                            <li class="link">
                                                <a href="controllers/CountriesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CountriesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CountriesModule-2d035fbedeba92f0a717c3f9a3f9df0b1347331f55ec6c2f6f9b223f839b19b6a27d22f3050847beba27934ada7a1c145e2538c73dbf20474dc06602fea37db4"' : 'data-bs-target="#xs-injectables-links-module-CountriesModule-2d035fbedeba92f0a717c3f9a3f9df0b1347331f55ec6c2f6f9b223f839b19b6a27d22f3050847beba27934ada7a1c145e2538c73dbf20474dc06602fea37db4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CountriesModule-2d035fbedeba92f0a717c3f9a3f9df0b1347331f55ec6c2f6f9b223f839b19b6a27d22f3050847beba27934ada7a1c145e2538c73dbf20474dc06602fea37db4"' :
                                        'id="xs-injectables-links-module-CountriesModule-2d035fbedeba92f0a717c3f9a3f9df0b1347331f55ec6c2f6f9b223f839b19b6a27d22f3050847beba27934ada7a1c145e2538c73dbf20474dc06602fea37db4"' }>
                                        <li class="link">
                                            <a href="injectables/CountriesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CountriesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GenreModule.html" data-type="entity-link" >GenreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-GenreModule-3f9735ba540b1aba47994b8b256126e97b219fc0c6927cee6f2611829cccc24787e88fc9c044e577debe66154cee624711b10d8e350678c1fb764eddc37fc69c"' : 'data-bs-target="#xs-controllers-links-module-GenreModule-3f9735ba540b1aba47994b8b256126e97b219fc0c6927cee6f2611829cccc24787e88fc9c044e577debe66154cee624711b10d8e350678c1fb764eddc37fc69c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GenreModule-3f9735ba540b1aba47994b8b256126e97b219fc0c6927cee6f2611829cccc24787e88fc9c044e577debe66154cee624711b10d8e350678c1fb764eddc37fc69c"' :
                                            'id="xs-controllers-links-module-GenreModule-3f9735ba540b1aba47994b8b256126e97b219fc0c6927cee6f2611829cccc24787e88fc9c044e577debe66154cee624711b10d8e350678c1fb764eddc37fc69c"' }>
                                            <li class="link">
                                                <a href="controllers/GenreController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenreController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-GenreModule-3f9735ba540b1aba47994b8b256126e97b219fc0c6927cee6f2611829cccc24787e88fc9c044e577debe66154cee624711b10d8e350678c1fb764eddc37fc69c"' : 'data-bs-target="#xs-injectables-links-module-GenreModule-3f9735ba540b1aba47994b8b256126e97b219fc0c6927cee6f2611829cccc24787e88fc9c044e577debe66154cee624711b10d8e350678c1fb764eddc37fc69c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GenreModule-3f9735ba540b1aba47994b8b256126e97b219fc0c6927cee6f2611829cccc24787e88fc9c044e577debe66154cee624711b10d8e350678c1fb764eddc37fc69c"' :
                                        'id="xs-injectables-links-module-GenreModule-3f9735ba540b1aba47994b8b256126e97b219fc0c6927cee6f2611829cccc24787e88fc9c044e577debe66154cee624711b10d8e350678c1fb764eddc37fc69c"' }>
                                        <li class="link">
                                            <a href="injectables/GenreService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenreService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LanguagesModule.html" data-type="entity-link" >LanguagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-LanguagesModule-5674f57c3922bcea760ffa028af278bfb0169bb27a998a4278725fe1141927f3821bf6802f741c39243dee1886ac75f6d6191e6170cab5bc2458e4278c5362cc"' : 'data-bs-target="#xs-controllers-links-module-LanguagesModule-5674f57c3922bcea760ffa028af278bfb0169bb27a998a4278725fe1141927f3821bf6802f741c39243dee1886ac75f6d6191e6170cab5bc2458e4278c5362cc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LanguagesModule-5674f57c3922bcea760ffa028af278bfb0169bb27a998a4278725fe1141927f3821bf6802f741c39243dee1886ac75f6d6191e6170cab5bc2458e4278c5362cc"' :
                                            'id="xs-controllers-links-module-LanguagesModule-5674f57c3922bcea760ffa028af278bfb0169bb27a998a4278725fe1141927f3821bf6802f741c39243dee1886ac75f6d6191e6170cab5bc2458e4278c5362cc"' }>
                                            <li class="link">
                                                <a href="controllers/LanguagesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LanguagesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LanguagesModule-5674f57c3922bcea760ffa028af278bfb0169bb27a998a4278725fe1141927f3821bf6802f741c39243dee1886ac75f6d6191e6170cab5bc2458e4278c5362cc"' : 'data-bs-target="#xs-injectables-links-module-LanguagesModule-5674f57c3922bcea760ffa028af278bfb0169bb27a998a4278725fe1141927f3821bf6802f741c39243dee1886ac75f6d6191e6170cab5bc2458e4278c5362cc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LanguagesModule-5674f57c3922bcea760ffa028af278bfb0169bb27a998a4278725fe1141927f3821bf6802f741c39243dee1886ac75f6d6191e6170cab5bc2458e4278c5362cc"' :
                                        'id="xs-injectables-links-module-LanguagesModule-5674f57c3922bcea760ffa028af278bfb0169bb27a998a4278725fe1141927f3821bf6802f741c39243dee1886ac75f6d6191e6170cab5bc2458e4278c5362cc"' }>
                                        <li class="link">
                                            <a href="injectables/LanguagesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LanguagesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SongModule.html" data-type="entity-link" >SongModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SongModule-7e1bc5aab6c81198f22b7fac0c5dc1915d8d9101597c6a930caad8181b8554b4f456aa8f6061c6d0281e689854a0b0a800f779af8959e39fd016adab3e0cad61"' : 'data-bs-target="#xs-controllers-links-module-SongModule-7e1bc5aab6c81198f22b7fac0c5dc1915d8d9101597c6a930caad8181b8554b4f456aa8f6061c6d0281e689854a0b0a800f779af8959e39fd016adab3e0cad61"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SongModule-7e1bc5aab6c81198f22b7fac0c5dc1915d8d9101597c6a930caad8181b8554b4f456aa8f6061c6d0281e689854a0b0a800f779af8959e39fd016adab3e0cad61"' :
                                            'id="xs-controllers-links-module-SongModule-7e1bc5aab6c81198f22b7fac0c5dc1915d8d9101597c6a930caad8181b8554b4f456aa8f6061c6d0281e689854a0b0a800f779af8959e39fd016adab3e0cad61"' }>
                                            <li class="link">
                                                <a href="controllers/SongController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SongController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SongModule-7e1bc5aab6c81198f22b7fac0c5dc1915d8d9101597c6a930caad8181b8554b4f456aa8f6061c6d0281e689854a0b0a800f779af8959e39fd016adab3e0cad61"' : 'data-bs-target="#xs-injectables-links-module-SongModule-7e1bc5aab6c81198f22b7fac0c5dc1915d8d9101597c6a930caad8181b8554b4f456aa8f6061c6d0281e689854a0b0a800f779af8959e39fd016adab3e0cad61"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SongModule-7e1bc5aab6c81198f22b7fac0c5dc1915d8d9101597c6a930caad8181b8554b4f456aa8f6061c6d0281e689854a0b0a800f779af8959e39fd016adab3e0cad61"' :
                                        'id="xs-injectables-links-module-SongModule-7e1bc5aab6c81198f22b7fac0c5dc1915d8d9101597c6a930caad8181b8554b4f456aa8f6061c6d0281e689854a0b0a800f779af8959e39fd016adab3e0cad61"' }>
                                        <li class="link">
                                            <a href="injectables/SongService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SongService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-310407f8e839a7bba5f3e855c113de7771f01d28e5d5651cc704e9c15c282de84168fa082cb48d6edf4655112b6ee7b719c44ffe1d5be655b3cc83d1084ce27b"' : 'data-bs-target="#xs-controllers-links-module-UserModule-310407f8e839a7bba5f3e855c113de7771f01d28e5d5651cc704e9c15c282de84168fa082cb48d6edf4655112b6ee7b719c44ffe1d5be655b3cc83d1084ce27b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-310407f8e839a7bba5f3e855c113de7771f01d28e5d5651cc704e9c15c282de84168fa082cb48d6edf4655112b6ee7b719c44ffe1d5be655b3cc83d1084ce27b"' :
                                            'id="xs-controllers-links-module-UserModule-310407f8e839a7bba5f3e855c113de7771f01d28e5d5651cc704e9c15c282de84168fa082cb48d6edf4655112b6ee7b719c44ffe1d5be655b3cc83d1084ce27b"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-310407f8e839a7bba5f3e855c113de7771f01d28e5d5651cc704e9c15c282de84168fa082cb48d6edf4655112b6ee7b719c44ffe1d5be655b3cc83d1084ce27b"' : 'data-bs-target="#xs-injectables-links-module-UserModule-310407f8e839a7bba5f3e855c113de7771f01d28e5d5651cc704e9c15c282de84168fa082cb48d6edf4655112b6ee7b719c44ffe1d5be655b3cc83d1084ce27b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-310407f8e839a7bba5f3e855c113de7771f01d28e5d5651cc704e9c15c282de84168fa082cb48d6edf4655112b6ee7b719c44ffe1d5be655b3cc83d1084ce27b"' :
                                        'id="xs-injectables-links-module-UserModule-310407f8e839a7bba5f3e855c113de7771f01d28e5d5651cc704e9c15c282de84168fa082cb48d6edf4655112b6ee7b719c44ffe1d5be655b3cc83d1084ce27b"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPaginatedResponse.html" data-type="entity-link" >AppPaginatedResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppResponse.html" data-type="entity-link" >AppResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/Comment.html" data-type="entity-link" >Comment</a>
                            </li>
                            <li class="link">
                                <a href="classes/Composer.html" data-type="entity-link" >Composer</a>
                            </li>
                            <li class="link">
                                <a href="classes/Country.html" data-type="entity-link" >Country</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCommentDto.html" data-type="entity-link" >CreateCommentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateComposerDto.html" data-type="entity-link" >CreateComposerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCountryDto.html" data-type="entity-link" >CreateCountryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateGenreDto.html" data-type="entity-link" >CreateGenreDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateLanguageDto.html" data-type="entity-link" >CreateLanguageDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSongDto.html" data-type="entity-link" >CreateSongDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Genre.html" data-type="entity-link" >Genre</a>
                            </li>
                            <li class="link">
                                <a href="classes/Language.html" data-type="entity-link" >Language</a>
                            </li>
                            <li class="link">
                                <a href="classes/PageData.html" data-type="entity-link" >PageData</a>
                            </li>
                            <li class="link">
                                <a href="classes/PostResponse.html" data-type="entity-link" >PostResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/Song.html" data-type="entity-link" >Song</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCommentDto.html" data-type="entity-link" >UpdateCommentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateComposerDto.html" data-type="entity-link" >UpdateComposerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCountryDto.html" data-type="entity-link" >UpdateCountryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateGenreDto.html" data-type="entity-link" >UpdateGenreDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateLanguageDto.html" data-type="entity-link" >UpdateLanguageDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSongDto.html" data-type="entity-link" >UpdateSongDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});