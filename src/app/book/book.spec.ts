import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { BookComponent } from './book';
import { provideRouter } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { ApiService } from '../api.service';



describe('bookComponent', () => {
   let component: BookComponent;
    let fixture: ComponentFixture<BookComponent>;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BookComponent,ToastrModule.forRoot()],
      providers: [
        provideHttpClient(withFetch()),
        provideHttpClientTesting(),
        provideRouter([]),
        ApiService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
