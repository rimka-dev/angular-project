import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeParametresComponent } from './liste-parametres.component';

describe('ListeParametresComponent', () => {
  let component: ListeParametresComponent;
  let fixture: ComponentFixture<ListeParametresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeParametresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeParametresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
