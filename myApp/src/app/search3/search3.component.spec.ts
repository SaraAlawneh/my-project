
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
    ],
      providers: [ ConnectionBackend , HttpModule, DataService],
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
/*
  it('search should return SearchItems', fakeAsync(() => {
    let response = { 
      "resultCount": 1,
      "results": [
        {
          "id": "135",
          "fistName": "Sara",
          "lastName": "Alawneh",
          
        }]
    };
  
    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
      
    });
  }));*/
});
