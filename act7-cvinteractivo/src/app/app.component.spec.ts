import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show the selected section', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelectorAll('app-header button')[1] as HTMLButtonElement;
    button.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('app-main h2').textContent).toContain('EXPERIENCIA PROFESIONAL');
  });

  it('should hide the contact details', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('app-aside button') as HTMLButtonElement;
    button.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('app-aside p')).toBeNull();
  });
});
