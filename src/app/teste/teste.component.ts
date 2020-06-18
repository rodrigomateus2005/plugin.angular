import { Component, OnInit, Compiler, Injector, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef } from '@angular/core';

// Needed for the new modules
import * as AngularCore from '@angular/core';
import * as AngularCommon from '@angular/common';
// import * as AngularClarity from '@clr/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})
export class TesteComponent implements OnInit {

  @ViewChild('alertContainer', { read: ViewContainerRef }) container;

  constructor(private compiler: Compiler, private injector: Injector, private http: HttpClient,
              private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  carregarModulos() {
    const linksImport = [
      {
        name: '@sismoura/my-lib-two',
        link: 'http://localhost:4200/assets/sismoura-my-lib-two.umd.js',
        mod: 'my-lib-two',
        plugin: 'MyLibTwoComponent'
      },
      {
        name: '@sismoura/my-lib',
        link: 'http://localhost:4200/assets/sismoura-my-lib.umd.js',
        mod: 'my-lib',
        plugin: 'MyLibComponent'
      }
    ];

    for (const link of linksImport) {
      this.loadModule(link.link, link.name, link.mod, link.plugin).then(x => {
        console.log(x);
      });
    }
  }

  loadModule(url: string, name: string, mod: string, component: string): Promise<any> {
    const SystemJS = (window as any).System;

    SystemJS.set('@angular/core', AngularCore);
    SystemJS.set('@angular/common', AngularCommon);

    (window as any).ng.core = AngularCore;

    return SystemJS.import(url).then((module) => {

      const factory: ComponentFactory<unknown> = this.resolver.resolveComponentFactory(module.default[mod][component]);
      const componentRef = this.container.createComponent(factory);

    });

  }

}
