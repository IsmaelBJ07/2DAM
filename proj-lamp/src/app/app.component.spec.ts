import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should change the plug state', () => {
    expect(component.enchufado).toBeFalse();

    component.onClickEnchufar();
    expect(component.enchufado).toBeTrue();

    component.onClickDesenchufar();
    expect(component.enchufado).toBeFalse();
  });

  it('should render the state text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Estado conexion electrica: DESENCHUFADO');
  });
});
