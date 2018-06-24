import { HttpModule, XHRBackend, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { DataService } from './data.service';
import { async, fakeAsync } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';

describe('DataService', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ DataService, { provide: XHRBackend, useClass: MockBackend },  ]
    });
  });
  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));
  describe('getusers()', () => {

    it('should get the list of users from the server',
      inject([DataService, XHRBackend], (DataService, mockBackend) => {

        const testUsers = {
          Users: [

            {
              "ID": "135",
              "firstname": "Sara",
              "lastname": "Alawneh"
            },
            {
              "ID": "144",
              "firstname": "Someone First Name",
              "lastname": "Yoda"
            },
            {
              "ID": "154",
              "firstname": "Luke",
              "lastname": "Moliku"
            },
            {
              "ID": "155",
              "firstname": "Louis",
              "lastname": "Whateveryournameis"
            },
            {
              "ID": "156",
              "firstname": "Someone First Name",
              "lastname": "Lara"
            },
            {
              "ID": "157",
              "firstname": "Zed",
              "lastname": "Kyle"
            }
          ]
        };

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(testUsers)
          })));
        });

        DataService.getusers().subscribe((users) => {
          expect(users.Users.length).toBe(6);
          expect(users.Users[0].firstname).toEqual('Sara');
          expect(users.Users[1].firstname).toBe("Someone First Name");
          expect(users.Users[0].ID).toBe('135');

        });

      }));
  });

});
