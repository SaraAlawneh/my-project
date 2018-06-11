import { DataService } from './data.service';
import { TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { HttpModule, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { BaseRequestOptions, ConnectionBackend, Http, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

//import { user } from './user.model'

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule ],
      providers: [DataService, { provide: XHRBackend, useClass: MockBackend },]
    });
 
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));


  describe('getUsers()', () => {

    it('should retreive data from the server',
      inject([DataService, XHRBackend], (DataService, mockBackend) => {

        const mockResponse = {
         data: [
            { "id": "135", "firstName": "Sara", "lastName": "Alawneh" },
            { "id": "144", "firstName": "Someone First Name", "lastName": "Yoda" },
            { "id": "154", "firstName": "Luke", "lastName": "Moliku" },
            { "id": "155", "firstName": "Louis", "lastName": "Whateveryournameis" },
            { "id": "156", "firstName": "Someone First Name", "lastName": "Lara" },
            { "id": "157", "firstName": "Zed", "lastName": "Kyle" }
          ]
        };

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
          
          DataService.getUsers().subscribe((users) => {
            expect(users.data.length).toBe(6);
           //  expect(users.data[0].firstName).toEqual('Sara');
          
           });

        // DataService.getUsers(); 
        // tick(); 

       // expect(DataService.result.length).toBe(5); 
     // expect(DataService.result[0].firstName).toBe("sff");
      //  expect(DataService.result[0].lastName).toBe("Alawneh");
       // expect(DataService.result[0].id).toBe(135);

        });

      }));
  });

});



