import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
 
import { HttpModule, Connection, ConnectionBackend } from '@angular/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));


  /*describe('Router tests', () => {
    //setup
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes(routes),
          AppModule
        ]
      });
    });
    
    //specs
    it('can navigate to home (async)', async(() => {
      let fixture = TestBed.createComponent(TestComponent);
      TestBed.get(Router)
        .navigate(['/home'])
          .then(() => {
            expect(location.pathname.endsWith('/home')).toBe(true);
          }).catch(e => console.log(e));
    }));
    
    it('can navigate to home (fakeAsync/tick)', fakeAsync(() => {
      let fixture = TestBed.createComponent(TestComponent);
      TestBed.get(Router).navigate(['/home']);
      fixture.detectChanges();
      //execute all pending asynchronous calls
      tick();    
      expect(location.pathname.endsWith('/home')).toBe(true);
    }));
    
    it('can navigate to home (done)', done => {
      let fixture = TestBed.createComponent(TestComponent);
      TestBed.get(Router)
        .navigate(['/home'])
          .then(() => {
            expect(location.pathname.endsWith('/home')).toBe(true);
            done();
          }).catch(e => console.log(e));
    });
  });*/
  
 /* it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));*/
});
