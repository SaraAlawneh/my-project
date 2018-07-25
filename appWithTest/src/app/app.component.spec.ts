import { DataService } from './data.service';
import { TestBed, async,inject,ComponentFixture } from '@angular/core/testing';
import { HttpModule } from "@angular/http";
import { AppComponent } from './app.component';
import {Http,Response, Headers, RequestOptions, ConnectionBackend } from '@angular/http';   
import { Component } from '@angular/core';

import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';
import { browser, by, element } from 'protractor';
describe('AppComponent', () => {
let component : AppComponent;
let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    
    TestBed.configureTestingModule({

      imports: [ HttpModule ],
      declarations: [ AppComponent ],
      providers: [DataService, ConnectionBackend, HttpModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);

  }));
  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  
  }));
 
  describe('search', function() {
   

    
    it('search should return SearchItems', () => {
      var component=fixture.componentInstance;
      expect(component.search).toBeDefined();
    });

    it('should not display the search result unless the button is clicked', () => {
    var component=fixture.componentInstance;
      let users;
     
      const search = component.search( users,null);
  
      expect(search).toEqual([]);
    });

    
  

    it('should not display the search result if no matches found ', () => {
      let component=fixture.componentInstance;

      let users=[

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
        }];
     
  
      const search = component.search( users,'Sara');
  
      expect(search).toEqual([]);
    });

  

    it('should display the search result  correctly', () => {
      let component=fixture.componentInstance;
         const users=[
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

          
         ];

         
        // expect(component.search(users,users.indexOf(users[0]))).getText().toEqual('Sara!');
         expect(users[0]).toBeUndefined;
        
         expect(users.length).toBe(6);   
      // expect(comp.search(users,'').length).toEqual(0);
     //  expect(comp.search(users,'157').length).toEqual(0);
      // expect(comp.search(users,'Zed').length).toEqual(1);
      // expect(comp.search(users,'Yoda')[0]).toEqual(users[1]);
    });
  });


    describe('delete', function(){

       it('should delete correctly', ()=>{

        let component=fixture.componentInstance;
        const users=[

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

        ];
      component.delete(users,users.indexOf(users[0]))
      
      expect(users[0]).toBeUndefined;
     
      expect(users.length).toBe(5);       



       });

  });

});