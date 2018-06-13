
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

 

  describe('search', function() {
    
    it('search should return SearchItems', () => {
      component=fixture.componentInstance;
      expect(component.search).toBeDefined();
    });

    /*it('should display the `search` button', () => {
      //There should a create button in the template
       expect(element.innerText).toContain(" search");
   });
  
   it('should not display the search result unless the button is clicked', () => {
       //source-model is an id for the modal. It shouldn't show up unless create button is clicked
       expect(element.innerHTML).not.toContain("source-modal");
   })
  
  /* it("should display the search result when 'search' is clicked", () => {
       let searchButton = fixture.debugElement.query(By.css("button"));
       //triggerEventHandler simulates a click event on the button object
       searchButton.triggerEventHandler("click",null);
       fixture.detectChanges();
     //  expect(element.innerHTML).toContain("source-modal");
       expect(component.search).toBeTruthy("showModal should be true");
   })*/
   

  
    it('should return empty array if no field is given', () => {
      let comp=fixture.componentInstance;

      let items
     
  
      const filtered = comp.search(undefined);
  
      expect(filtered).toEqual([]);
    });

    it('should return empty array if no matches found ', () => {
      let comp=fixture.componentInstance;

      let items=[

        { "id": "135", "firstName": "Sara", "lastName": "Alawneh" },
        { "id": "144", "firstName": "Someone First Name", "lastName": "Yoda" }];
     
  
      const filtered = comp.search( 'lara');
  
      expect(filtered).toEqual([]);
    });



    it('should filter correctly', () => {
      let comp=fixture.componentInstance;
         const data=[

          { "id": "135", "firstName": "Sara", "lastName": "Alawneh" },
          { "id": "144", "firstName": "Someone First Name", "lastName": "Yoda" },
          { "id": "154", "firstName": "Luke", "lastName": "Moliku" },
          { "id": "155", "firstName": "Louis", "lastName": "Whateveryournameis" },
          { "id": "156", "firstName": "Someone First Name", "lastName": "Lara" },
          { "id": "157", "firstName": "Zed", "lastName": "Kyle" }

         ];
      // expect(comp.search('alawneh').length).toEqual(2);
       //expect(comp.applyfilter(data,'rola','tawalbeh')[0]).toEqual(data[0]);
    });
       

  });

});
       

  


