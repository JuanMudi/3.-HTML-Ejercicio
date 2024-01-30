import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NofuncionalesComponent } from './nofuncionales.component';

describe('NofuncionalesComponent', () => {
  let component: NofuncionalesComponent;
  let fixture: ComponentFixture<NofuncionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NofuncionalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NofuncionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
