import { DataService } from './data.service';
import { TestBed,async, inject, fakeAsync, tick } from '@angular/core/testing';
import { HttpModule, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { BaseRequestOptions, ConnectionBackend, Http, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

//import { user } from './user.model'

describe('MockBackend: DataService', () => {
  let mockbackend, service;

  //setup
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [
        DataService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    })
  });
    
  beforeEach(inject([DataService, XHRBackend], (_service, _mockbackend) => {
    service = _service;
    mockbackend = _mockbackend;
  }));

  //specs
  it('should return mocked response (sync)', () => {
    let response = [
      { "id": "135", "firstName": "Sara", "lastName": "Alawneh" },
      { "id": "144", "firstName": "Someone First Name", "lastName": "Yoda" },
      { "id": "154", "firstName": "Luke", "lastName": "Moliku" },
      { "id": "155", "firstName": "Louis", "lastName": "Whateveryournameis" },
      { "id": "156", "firstName": "Someone First Name", "lastName": "Lara" },
      { "id": "157", "firstName": "Zed", "lastName": "Kyle" }
     ];
    mockbackend.connections.subscribe(connection => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(response)
      })));
    });
    service.getUsers().subscribe(users => {

      expect(users.length).toBe(6); 
      expect(users[0].firstName).toBe("Sara");
      expect(users[0].lastName).toBe("Alawneh");
      expect(users[0].id).toBe(135);
     
    });
  });  
})


