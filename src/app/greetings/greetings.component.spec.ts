import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GreetingsComponent } from './greetings.component';

describe('GreetingsComponent', () => {
  let component: GreetingsComponent;
  let fixture: ComponentFixture<GreetingsComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detecta cambios iniciales en el componente
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the greeting message', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Hello, world!'); // Aquí asumo que tu componente renderiza un <p> con el mensaje 'Hello, world!'
  });
});
