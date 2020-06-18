(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@sismoura/my-lib-two', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global.sismoura = global.sismoura || {}, global.sismoura['my-lib-two'] = {}), global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var MyLibTwoService = /** @class */ (function () {
        function MyLibTwoService() {
        }
        MyLibTwoService.ɵfac = function MyLibTwoService_Factory(t) { return new (t || MyLibTwoService)(); };
        MyLibTwoService.ɵprov = core.ɵɵdefineInjectable({ token: MyLibTwoService, factory: MyLibTwoService.ɵfac, providedIn: 'root' });
        return MyLibTwoService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(MyLibTwoService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var MyLibTwoComponent = /** @class */ (function () {
        function MyLibTwoComponent() {
        }
        MyLibTwoComponent.prototype.ngOnInit = function () {
        };
        MyLibTwoComponent.ɵfac = function MyLibTwoComponent_Factory(t) { return new (t || MyLibTwoComponent)(); };
        MyLibTwoComponent.ɵcmp = core.ɵɵdefineComponent({ type: MyLibTwoComponent, selectors: [["lib-my-lib-two"]], decls: 2, vars: 0, template: function MyLibTwoComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "p");
                core.ɵɵtext(1, " my-lib-two works! hehehehe ");
                core.ɵɵelementEnd();
            } }, encapsulation: 2 });
        return MyLibTwoComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(MyLibTwoComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-my-lib-two',
                    template: "\n    <p>\n      my-lib-two works! hehehehe\n    </p>\n  ",
                    styles: []
                }]
        }], function () { return []; }, null); })();

    var MyLibTwoModule = /** @class */ (function () {
        function MyLibTwoModule() {
        }
        MyLibTwoModule.ɵmod = core.ɵɵdefineNgModule({ type: MyLibTwoModule });
        MyLibTwoModule.ɵinj = core.ɵɵdefineInjector({ factory: function MyLibTwoModule_Factory(t) { return new (t || MyLibTwoModule)(); }, imports: [[]] });
        return MyLibTwoModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(MyLibTwoModule, { declarations: [MyLibTwoComponent], exports: [MyLibTwoComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(MyLibTwoModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [MyLibTwoComponent],
                    imports: [],
                    exports: [MyLibTwoComponent]
                }]
        }], null, null); })();

    exports.MyLibTwoComponent = MyLibTwoComponent;
    exports.MyLibTwoModule = MyLibTwoModule;
    exports.MyLibTwoService = MyLibTwoService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sismoura-my-lib-two.umd.js.map
