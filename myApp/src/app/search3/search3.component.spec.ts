
import { Search3Component } from './search3.component';
import { RouterTestingModule } from '@angular/router/testing'

import { DataService } from '../data.service';
 

import { TestBed,  ComponentFixture, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { HttpModule, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { BaseRequestOptions, Connection, ConnectionBackend, Http, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

describe('Search3Component', () => {
  let component: Search3Component;
  let fixture: ComponentFixture<Search3Component>;
  //let element: HTMLElement;
//  let spy: jasmine.Spy;
  
  beforeEach(async(() => {let DataService: DataService;
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ ConnectionBackend , HttpModule, DataService, { provide: XHRBackend, useClass: MockBackend },],
      declarations: [ Search3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Search3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 


});
       

  


